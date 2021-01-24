import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ThemeModule } from '../@theme/theme.module';
import { SharedModule } from 'primeng/api';
import { HomeRoutingModule } from './home-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { PlatformModule } from '@angular/cdk/platform';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    ThemeModule,
    PlatformModule,
    SharedModule,
    HomeRoutingModule
  ],
  exports: [
    CommonModule,
    ThemeModule,
    PlatformModule,
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
