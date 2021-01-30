import { Component, OnInit } from '@angular/core';
import { MenuItem} from 'primeng/api';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CarService } from 'src/app/_shared/services/carservice';
import { Districts } from 'src/app/@core/_model/users';
@Component({
  selector: 'app-resumebuilder',
  templateUrl: './resumebuilder.component.html',
  styleUrls: ['./resumebuilder.component.scss']
})
export class ResumebuilderComponent implements OnInit {

  items: MenuItem[];  
  subscription: Subscription;
  education: string;
  education1: string;
  skills: boolean;
  personaldetails: boolean;
  avtivesection:string='education';
  states:any;
  districts:any;
  districtsarray:Districts[]=[];
  
 

    constructor(private router:Router,private http:HttpClient,private carService:CarService) {}

    ngOnInit() {
      this.carService.getStates().then(x => {
        console.log("statessss",x);
        this.states = x;
      });

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
}