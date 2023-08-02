import { Component } from "@angular/core";


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

    name = "Hello John";

    customerId = "1";

    getCustomerLocation(){
        return "London";
    }


    job = "Senior Software Engineer";


    inputType = "checkbox";



    evtClick(){
        console.log("you have clicked");
    }



    evtKeyUp(event:any){
        //console.log("key pressed");


        console.log("the value from the text box is",event.target.value);
    }
    


    officeName = "Infosys";














    streetName_1 = "oxford street";

//===================================================//



streetName_2 = "Brick Lane";

getStreetNameDetails(evtdetails:any){
    console.log(evtdetails);
}



//=============================//

//here we have to use HTMLinputelement instead of any type why beacuse for any it won't have any methods and in HTMLInputElement it have methods


getFullNameDetail(emp:HTMLInputElement){
    console.log(emp.value); 
}





//=============================//




schoolName = "oxford";






applyYellowcolor = true;








isVisiable = true;






isContent = false;








isIfCondition = false;





/* prepare the array
array --> list of items

array -->prepare list items what do you want*/



numbers = ["one","two","three","four","five"];






}


//steps for component
//1. creating component
//2.registration in app.module.ts
//3.using id in app.component.html