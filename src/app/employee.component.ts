//1.importing component from angular packages

import { Component } from "@angular/core";


//2.creating component

@Component({
    selector:'app-employee', //component id
    template:'employee details'
})


export class EmployeeComponent{

}


//3.registration in module.ts


//steps

//1. component ID if you are not id giving id properly it will give the error

//2. Register the feature(component) into the app.module.ts