import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuItem, MessageService} from 'primeng/api';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CarService } from 'src/app/_shared/services/carservice';
import { Districts } from 'src/app/@core/_model/users';
import { ResumeBuilder, Skills, Experience, Education, buttonClass, PersonalDetails, personaldetailsMock, experienceMock, careerobjMock, skillsMock } from 'src/app/_shared/model/resume-builder';
import { Product } from 'src/app/_shared/model/product';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-resumebuilder',
  templateUrl: './resumebuilder.component.html',
  styleUrls: ['./resumebuilder.component.scss']
})
export class ResumebuilderComponent implements OnInit {

  items: MenuItem[];  
  subscription: Subscription;
  education1: string;
  skills: boolean;
  personaldetails: PersonalDetails;
  avtivesection:string='education';
  states:any;
  districts:any;
  districtsarray:Districts[]=[];
  resumeBuilder:ResumeBuilder;
  skillsList:Skills[]=[];
  experienceList:Experience[]=[];
  educationList:Education[]=[];
  skill:Skills;
  experience:Experience;
  education:Education;
  propClass:string="p-button-text";
  skillButtonClasses:any[]=buttonClass;
  products: Product[];
  @ViewChild('personalform')
  form: NgForm;
  @ViewChild('skillsform')
  skillsform: NgForm;
  @ViewChild('experienceform')
  experienceform: NgForm;
  @ViewChild('educationform')
  educationform: NgForm;
  @ViewChild('careerObjectiveform')
  careerobjectiveform: NgForm;
  cols: any[];
  personalDetailsSubmitted:boolean;
  skillsformSubmitted:boolean;
  experienceSubmitted:boolean;
  educationSubmitted:boolean;
  careersubmitted:boolean;
  preparedResume:boolean=true;
  personalDatamock:any=personaldetailsMock;
  experienceMockdata:any=experienceMock;
  careerObjectiveMock:any=careerobjMock;
  skillsMockData:any=skillsMock;
  constructor(private router:Router,private http:HttpClient,private carService:CarService,private messageService:MessageService) {
      this.resumeBuilder=new ResumeBuilder;
      this.experience=new Experience;
      this.education=new Education;
      this.personaldetails=new PersonalDetails;
      this.skill=new Skills;
     
    }

    ngOnInit() {
      this.carService.getStates().then(x => {
        console.log("statessss",x);
        this.states = x;
      });
      this.cols = [
          { field: 'educationType', header: 'Study' },
          { field: 'institutionName', header: 'Institution' },
          { field: 'yearOfPassing', header: 'YOP' },
          { field: 'percentage', header: 'Percentage' }
      ];
      console.log("experienceMockdata",this.experienceMockdata);
  }


    getDistricts(value?:any){
      console.log("states",this.states)
      this.districts=(this.states.filter((x)=>x.state==value))[0].districts;
      this.districtsarray=[];
      this.districts.forEach(element => {
        let obj= new Districts
        obj.name=element;
        obj.value=element;
        this.districtsarray.push(obj);
      });
      console.log('dis',this.districtsarray);

    }
    onStateChange(event?:any){
      this.getDistricts(event.state);
    }
    onDistrictChange(event?:any){
      console.log("district  change",event)
    }
    saveSkill(){
      this.skillsformSubmitted=true;
      if(this.skillsform.valid){
        let index =0;
        index=this.skillsList?.length;
        let obj= new Skills;
        obj.skill=this.skill.skill;
        obj.class=buttonClass[index>=buttonClass.length?(index-buttonClass.length):index].class;
        obj.classIndex=index;
        this.skillsList.push(obj);
        this.skill.skill=undefined;
        this.skillsformSubmitted=false;
      }
      else{
        this.showError();
      }
    }
    editSkill(event?:any,index?:any){
      this.skill.skill=event;
      this.skillsList.splice(index,1);
    }
    addExperience(){
      this.experienceSubmitted=true;
      if(this.experience.employer && this.experience.experience && this.experience.jobDescription && this.experience.jobTitle){
        let obj=new Experience;
        console.log("this.experience",this.experience);
        obj.employer=this.experience.employer;
        obj.jobTitle=this.experience.jobTitle;
        obj.jobDescription=this.experience.jobDescription;
        obj.experience=this.experience.experience;
        obj.fromDate=new Date();
        obj.toDate=new Date();
        this.experienceList.push(obj);
        this.experience=new Experience;
        this.experienceSubmitted=false;
      }
      else{
        this.showError();
      }
    }
    editExperience(i:any){
      this.experience.employer=this.experienceList[i].employer;
      this.experience.experience=this.experienceList[i].experience;
      this.experience.jobDescription=this.experienceList[i].jobDescription;
      this.experience.jobTitle=this.experienceList[i].jobTitle;
      this.experienceList.splice(i,1);
    }
    addEducation(){
      this.educationSubmitted=true;
      if(this.educationform.valid){
        let obj= new Education;
        obj.educationType=this.education.educationType;
        obj.institutionName=this.education.institutionName;
        obj.percentage=this.education.percentage;
        obj.yearOfPassing=this.education.yearOfPassing;
        this.educationList.push(obj);
        this.education=new Education;
        this.educationSubmitted=false;
      }
      else{
        this.showError();
      }
    }
    ValidateAllForms():boolean{
      this.personalDetailsSubmitted=true;
      this.educationSubmitted=true;
      this.skillsformSubmitted=true;
      this.careersubmitted=true;
      if(this.educationform.valid  && this.skillsform.valid && this.form.valid
        && this.careerobjectiveform.valid)
        return true;
        else false;
    }
    saveAllFields(){
      console.log("this.validateforms()",this.ValidateAllForms())
      if(this.ValidateAllForms()){
        this.addEducation();
        this.saveSkill();
        this.addExperience();
        this.bindResumeFields();
      }
      else{
        this.showError();
      }
    }
    naviagteToExternalRoute(link?:any){
      window.open(link);
    }
    bindResumeFields(){

    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
    templateCall(value?:any){
      switch(value){
       case 'education': this.avtivesection=value;
       case 'skills': this.avtivesection=value;
       case 'projects': this.avtivesection=value;
       case 'personaldetails': this.avtivesection=value;
      }
    }





  showSuccess() {
      this.messageService.add({severity:'success', summary: 'Success', detail: 'Message Content'});
  }

  showInfo() {
      this.messageService.add({severity:'info', summary: 'Info', detail: 'Message Content'});
  }

  showWarn() {
      this.messageService.add({severity:'warn', summary: 'Warn', detail: 'Message Content'});
  }

  showError() {
      this.messageService.add({severity:'error', summary: 'One or More Validation Errors', detail: 'Please fill all mandatory fields'});
  }

  showCustom() {
      this.messageService.add({severity:'custom', summary: 'Custom', detail: 'Message Content', icon: 'pi-file'});
  }
  onConfirm() {
      this.messageService.clear('c');
  }

  onReject() {
      this.messageService.clear('c');
  }
  
  clear() {
      this.messageService.clear();
  }





}