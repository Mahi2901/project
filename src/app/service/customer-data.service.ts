import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerDataService {

  constructor(private http: HttpClient) { }

 public url = 'http://localhost:3000/users' ;


  getData(){
      return [
    {
      id: 1,
      name: 'John Doe',
      age: 28,
      department: 'Sales',
      phoneNumber: '9876543210',
      email: 'john@example.com'
    },
    {
      id: 2,
      name: 'Jane Smith',
      age: 32,
      department: 'Marketing',
      phoneNumber: '8765432109',
      email: 'jane@example.com'
    },
    {
      id: 2,
      name: 'Jane Smith',
      age: 32,
      department: 'Marketing',
      phoneNumber: '8765432109',
      email: 'jane@example.com'
    },
    {
      id: 2,
      name: 'Jane Smith',
      age: 32,
      department: 'Marketing',
      phoneNumber: '8765432109',
      email: 'jane@example.com'
    },
    {
      id: 2,
      name: 'Jane Smith',
      age: 32,
      department: 'Marketing',
      phoneNumber: '8765432109',
      email: 'jane@example.com'
    }
  ];

}

getDetails() {
  return this.http.get('https://fake-json-api.mock.beeceptor.com/users');
}
postDetails(data: any) {
  return this.http.post('https://fake-json-api.mock.beeceptor.com/users', data);
}
putDetails(data: any) {
  return this.http.put('https://fake-json-api.mock.beeceptor.com/users', data);
}
deleteDetails(data: any) {
  return this.http.delete('https://fake-json-api.mock.beeceptor.com/users', data);
}

getTheDetails() {
  return this.http.get('http://localhost:3000/users');
}

postData(sample: any) {
  return this.http.post('http://localhost:3000/users', sample);
}


sendTheData(sendingData : any){
  return this.http.post( this.url , sendingData)
}


sendTheReactiveFormData( userData : any ){
  return this.http.post( this.url , userData)
}

//  sendingTheData(newData: any) {
//     this.customerData.sendTheReactiveFormData(newData).subscribe((data) => {
//       console.log(data);
//     });

}
