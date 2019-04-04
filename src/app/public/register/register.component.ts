import { Component, OnInit } from '@angular/core';
// import { FormGroup,FormControl } from "@angular/forms";
import { Router } from "@angular/router";
import { FormBuilder, Validators } from '@angular/forms';
import { PostDataService } from "../post-data.service";
import { PasswordValidator } from "../../custom validator/password-validator"
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // fname for optimization
  get fname(){
    return this.registrationForm.get('fname');
  }

  // reactive registration form
  registrationForm = this.fb.group({

      fname:['',Validators.required],
      lname:['',Validators.required],
      email:['',Validators.required],
      phone:['',[Validators.required,Validators.maxLength(10),Validators.minLength(10)]],
      address:['',Validators.required],
      medical:[''],
      password:['',Validators.required], 
      cpass:['',Validators.required]
    },
    {
      validator:PasswordValidator('password',"cpass")
    }

  );
  // new FormGroup({
  //   fname: new FormControl('vishal'),
  //   lname: new FormControl('lambra'),
  //   email: new FormControl(''),
  //   address: new FormControl(''),
  //   password: new FormControl('')
  // });
    
  // method submit the data to the server
    submitData(){
      if(this.registrationForm.valid)
      {
        this.postService.postData(this.registrationForm.value).subscribe();
        this.router.navigate(['/login']);
      }
    }

  constructor(private fb: FormBuilder, private postService:PostDataService, private router:Router) { }

  ngOnInit() {
  }

}
