import { Component, OnInit } from '@angular/core';
import { GetdataService } from 'src/app/services/getdata.service';
import { PutdataService } from 'src/app/services/putdata.service';
import { Validators,FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
a:any;
user:any;
pass:any;
data:any;
firstName:string;
lastName:string;
fullName:string;
cname:any;
ln;

name:string;
address:string;
phone:number;
medical:string;
email:string;
id:number;
updateForm:FormGroup;

  ngOnInit() {

    this.updateForm = this.fb.group({
      fname:['',Validators.required],
      lname:[''],
      email:['',Validators.required,],
      phone:['',[Validators.required,Validators.maxLength(10),Validators.minLength(10)]],
      address:['',Validators.required],
      medical:['']
    });
  

    this.details.getData().subscribe(rsp =>{
      this.data=rsp;
      this.a=this.data.length;
      this.user=localStorage.getItem('name');

      // check availablity of user in database
        while(this.a>0)
        {
          
          if(this.user == this.data[this.a-1].email)
          {
            this.name = this.data[this.a-1].fname +" "+ this.data[this.a-1].lname;
            this.ln = this.data[this.a-1].lname;
            this.address = this.data[this.a-1].address;
            this.phone = this.data[this.a-1].phone;
            this.email = this.data[this.a-1].email;
            this.id = this.data[this.a-1].id;
            this.medical = this.data[this.a-1].medical;
          }
          this.a--;
        }
        this.fill();
    });
    
  }


  constructor(public details:GetdataService, private updateData:PutdataService, private fb:FormBuilder,private location:Location) { }
  
// fillvalues into the fields 
  fill(){
    this.updateForm.controls['fname'].setValue(this.name);
      this.updateForm.controls['lname'].setValue(this.ln);
      this.updateForm.controls['address'].setValue(this.address);
      this.updateForm.controls['email'].setValue(this.email);
      this.updateForm.controls['phone'].setValue(this.phone);
      this.updateForm.controls['medical'].setValue(this.medical);
      this.updateForm.get('email').disable();
  }

// chk krte h u hi

  // getval(){
  //   this.fullName=this.updateForm.get('fname').value;
  //   console.log(this.fullName);
  //   this.cname = this.fullName.split(' ');
  //   console.log(this.cname);
  //   this.firstName=this.cname[0];
  //   this.lastName=this.cname[1];
  //   console.log(this.firstName);
  //   console.log(this.lastName);

  // }
   
    //update data through service
    updateDetails(){
      this.fullName=this.updateForm.get('fname').value;
      this.cname = this.fullName.split(' ');
      this.firstName=this.cname[0];
      this.lastName=this.cname[1];
      this.updateForm.controls['fname'].setValue(this.firstName);
      this.updateForm.controls['lname'].setValue(this.lastName);
      this.updateData.putDetails(this.id,this.updateForm.value).subscribe(rsp => {console.log('update sucess');location.reload()});
    }

   

}
