import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import{HttpClient, HttpClientModule} from '@angular/common/http'
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { ThemeModule } from './@theme/theme.module';
import {InputTextModule} from 'primeng/inputtext';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CarService } from './_shared/services/carservice';
import { CoreModule } from './@core/core.module';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { MDBBootstrapModule, IconsModule } from 'angular-bootstrap-md';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    IconsModule,
    ThemeModule.forRoot(),
    CoreModule.forRoot(),
    CollapseModule.forRoot(),
    MDBBootstrapModule.forRoot(),
    InputTextModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  }),
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  exports:[ThemeModule,CollapseModule],
  providers: [CarService],
  bootstrap: [AppComponent],
  entryComponents:[

  ]
})
export class AppModule { }
