import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserData } from '../_model/users';
import { LayoutService } from '../../@core/_services/layout.service';
import { map, takeUntil, filter } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { items } from 'src/app/_shared/model/menu-model';

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
        this.items=items
    }
    ngOnDestroy(){
    }
}
