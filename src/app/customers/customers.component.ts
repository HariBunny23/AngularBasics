import { Component,
  Input,
Output,
EventEmitter } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent {

@Input() customerInputInfo : any;
@Output() sampleDataEmitter = new EventEmitter<any>();



sampleData = {
  name : 'customer name - 1',
  password : 'customer password -1',
  location : 'customer location -1'
}
submitData(){
    this.sampleDataEmitter.emit(this.sampleData);
}

}
