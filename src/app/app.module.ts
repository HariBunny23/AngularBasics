import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { EmployeeComponent } from './employee.component';
import { FormsModule } from '@angular/forms';
import { CustomersComponent } from './customers/customers.component';

@NgModule({
  declarations: [
    AppComponent,CustomerComponent,EmployeeComponent, CustomersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
