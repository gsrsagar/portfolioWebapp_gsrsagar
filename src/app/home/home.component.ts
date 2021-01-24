import { OnInit, OnDestroy, Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { RoutesEnum } from '../@core/_model/routes-model';



@Component({
    selector:'home-app',
    templateUrl:'./home.component.html',
    styleUrls:['./home.component.scss']
})
export class HomeComponent implements OnInit,OnDestroy{
    homepagetitles:any=[
        {title:"Add Intelligence to your hard work"},
        {title:"Yields Better Results"}]
    advertiseTItles:any=[
        {title:"Are you looking for web application development"},
        {title:"No worries , we are here to assist you"},
        {title:"we do freelancing for full stack web application development"}
    ]   
    routes:typeof RoutesEnum=RoutesEnum; 
    constructor(
        private http:HttpClient,
        private router:Router,
        private activatedRoute:ActivatedRoute
    ){

    }

    ngOnInit(){

    }
    navigate(value?:any){
        this.router.navigateByUrl(`${value}`);
    }
    ngOnDestroy(){

    }
}