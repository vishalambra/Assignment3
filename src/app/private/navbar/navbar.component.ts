import { Component, OnInit } from '@angular/core';
import { GetdataService } from 'src/app/services/getdata.service';
import { Router, NavigationEnd } from '@angular/router';
import { BookingsService } from 'src/app/services/bookings.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private details:GetdataService, private router:Router,private getbooking:BookingsService ) {
    
    router.events.subscribe((event)=>(event instanceof NavigationEnd )&& this.header());
   }
   head:any;
   header(){
     if(this.router.url.includes('profile'))
     {
       this.head = 'Profile'
     }
     if(this.router.url.includes('bookings'))
     {
       this.head = 'bookings'
     }
     if(this.router.url.includes('faq'))
     {
       this.head = 'faq'
     }
   }
  ngOnInit() {

    // total no of bookings
    this.getbooking.getFaq().subscribe(res=>{
      this.pbooking=res;
      this.getbooking.getPast().subscribe(res=>{
        this.cbookings=res;
        this.sum = this.cbookings.length + this.pbooking.length;
      })      
    })
    
    
    // this.getbooking.getPast().subscribe(res=>{
    //   this.cbookings=res;
    //   console.log(this.cbookings.length);
    // })


    // service to get the username 
  this.details.getData().subscribe(rsp =>{
    this.data=rsp;
    this.a=this.data.length;
    this.user=localStorage.getItem('name');
    
    // check availablity of user in database
      while(this.a>0)
      {
        
        if(this.user == rsp[this.a-1].email)
        {
          this.name = rsp[this.a-1].fname;
          this.owner = rsp[this.a-1].fname+ ' ' +rsp[this.a-1].lname;
        }
        this.a--;
      }
  });
  }

  pbooking:any;
  cbookings:any;
  

  flag:boolean;
  a:any;
  user:any;
  pass:any;
  data:any;
  name:string;
  owner:string;
  sum:number;
  myDropdown:any;
  dropdowns;
  openDropdown;
  i;


  //logout function
  logout(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }
  
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
  
}

// Close the dropdown if the user clicks outside of it
// function(event) {
//   if (!event.target.matches('.dropbtn')) {
//     console.log('hiii')
//     this.dropdowns = document.getElementsByClassName("dropdown-content");
//     this.i;
//     for (this.i = 0; this.i < this.dropdowns.length; this.i++) {
//       this.openDropdown = this.dropdowns[this.i];
//       if (this.openDropdown.classList.contains('show')) {
//         this.openDropdown.classList.remove('show');
//       }
//     }
//   }
// }

// Close the dropdown if the user clicks outside of it
// function(e) {
//   if (!e.target.matches('.dropbtn')) {
//   this.myDropdown = document.getElementById("myDropdown");
//     if (this.myDropdown.classList.contains('show')) {
//       this.myDropdown.classList.remove('show');
//     }
//   }
// }

}

