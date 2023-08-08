import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


sampletext = "hello world";
customerDetails : any = {};

// output:now app component has triggered 
// {name: 'Hari', password: 'gahhshsh', location: 'Hyd'}
getCustomerDetails($event : any)
{
  console.log("now app component has triggered",$event);
  this.customerDetails = $event;
  // {name: 'Hari', password: 'gahhshsh', location: 'Hyd'}

}


customerSampleData: any = {};
takeSampleDatafunc($event:any){
  // sampleData = {
  //   name : 'customer name - 1',
  //   password : 'customer password -1',
  //   location : 'customer location -1'
  // }

  this.customerSampleData = $event;
}

}
