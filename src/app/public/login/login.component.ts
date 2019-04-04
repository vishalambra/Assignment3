import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, Validators } from '@angular/forms';
import { GetdataService } from 'src/app/services/getdata.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder, private route:Router,private details:GetdataService,private auth:AuthService) { }

  ngOnInit() {
  }

  user:any;
  pass:any;
  data:any;

// reactive login form
  loginForm = this.fb.group({
    email:['',[Validators.required]],
    password:['',[Validators.required]]
  });

// email for code optimization
  get userEmail(){
    return this.loginForm.get('email');
  }

//getRequest method for user login 
  a:any;
  
  login(){

    this.details.getData().subscribe(rsp =>{
      this.data=rsp;
      this.a=this.data.length;
      this.user=this.loginForm.value.email;
      this.pass=this.loginForm.value.password;
      
      // check availablity of user in database
        while(this.a>0)
        {
          
          if(this.user == rsp[this.a-1].email && this.pass == rsp[this.a-1].password)
          {
            localStorage.setItem('name',this.user);
            localStorage.setItem('pswd',this.pass);
            this.auth.sendToken(this.loginForm.value.email)
            this.route.navigate(['/navbar/profile']);
            
            break;
          }
          this.a--;
          if(this.a == 0)
          {
            alert('Plz Register First Or enter valid mail');
          }
        }
    });
  }

}
