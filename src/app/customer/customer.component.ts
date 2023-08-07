import { Component,ElementRef,ViewChild,Input } from "@angular/core";


// @Component({
//     selector:'app-customer',  //selector is id
//     template:'<p>Hello John</p> <h1>How are you</h1>',
//     styles : [' p {color:red} ', 'h1 { background-color : yellow}']

// })


@Component({
    selector:'app-customer',  //selector is id
    templateUrl:'./customer.component.html',
    styleUrls : ['./customer.component.css']

})

export class CustomerComponent{

   // 1.txtcustomerName is the local reference which ref the input element

//just try to import the txtcustomername(child) from customer view

@ViewChild('txtCustomerName') _txtCustomerName : ElementRef;
@ViewChild('txPassword') _txPassword : ElementRef;
@ViewChild('txtLocation') _txtLocation : ElementRef;


@Input() txtworld : any;



evtclick(){
    //txtcustomerName I want to pick  from text box
    console.log(this._txtCustomerName.nativeElement.value);
    console.log(this._txPassword.nativeElement.value);
    console.log(this._txtLocation.nativeElement.value);

    console.log("value from app component is:",this.txtworld);

    let customerInfo = {
        name         : this._txtCustomerName.nativeElement.value,
        password     : this._txPassword.nativeElement.value,
        location     :this._txtLocation.nativeElement.value
    }

    //console.log("clicked");
    console.log(customerInfo);
}




//I want to pass username , password and location to customer details page
//I want to ca[ture values of CN,pw,Loc when I fired/executed button


}


//steps for component
//1. creating component
//2.registration in app.module.ts
//3.using id in app.component.html