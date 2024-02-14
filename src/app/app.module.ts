import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PayrollComponent } from './components/payroll/payroll.component';
import { PayrollTableComponent } from './components/payroll-table/payroll-table.component';
<<<<<<< HEAD
import { LoginComponent } from './components/login/login.component'
=======
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component'
>>>>>>> 7374ec64d5b548ec70185f2af75e14d6e4f77182
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    PayrollComponent,
    PayrollTableComponent,
<<<<<<< HEAD
    LoginComponent
=======
    HomeComponent,
    HeaderComponent
>>>>>>> 7374ec64d5b548ec70185f2af75e14d6e4f77182
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
