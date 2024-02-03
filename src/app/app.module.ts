import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PayrollComponent } from './components/payroll/payroll.component';
import { PayrollTableComponent } from './components/payroll-table/payroll-table.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component'
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    PayrollComponent,
    PayrollTableComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
