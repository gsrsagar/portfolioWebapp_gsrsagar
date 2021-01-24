import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserData } from '../_model/users';
import { LayoutService } from '../../@core/_services/layout.service';
import { map, takeUntil, filter } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'png-header',
    styleUrls: ['./header.component.scss'],
    templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {

    private destroy$: Subject<void> = new Subject<void>();
    public readonly materialTheme$: Observable<boolean>;
    userPictureOnly: boolean = false;
    user: any;
    items: MenuItem[];
    isCollapsed:any=true;

     constructor(){
         
     }   
        ngOnInit(){
        this.items = [
          {
              label: 'Home',
              icon:'pi pi-fw pi-home',
              routerLink:'/home',
              routerLinkActiveOptions:'active',
              styleClass:'menupanel'
          },
          {
            label: 'Products',
            icon:'pi pi-fw pi-briefcase',
            routerLink:'#',
            styleClass:'menupanel'
        },
        {
            label: 'Blogs',
            icon:'pi pi-fw pi-comments',
            routerLink:'#',
            styleClass:'menupanel'
        },
        {
            label: 'Community',
            icon:'pi pi-fw pi-globe',
            routerLink:'#',
            styleClass:'menupanel'
        },
        {
            label: 'AboutUs',
            icon:'pi pi-fw pi-book',
            routerLink:'#',
            styleClass:'menupanel'
        }]
      }
    ngOnDestroy(){

    }
}
