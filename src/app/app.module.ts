import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { NgxCurrencyModule  } from "ngx-currency";
import { Observable} from 'rxjs';
import { of } from 'rxjs/observable/of';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxCurrencyModule,
    OwlDateTimeModule, 
    OwlNativeDateTimeModule,
    ReactiveFormsModule 
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
