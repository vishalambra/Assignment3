import { Component, OnInit } from '@angular/core';
import { BookingsService } from 'src/app/services/bookings.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {

  constructor(private getbooking:BookingsService) { }

  ngOnInit() {
    
    this.showUpcoming();

  }

  // variables 
  upcoming = true;
  upcomingBooking: any;
  pastBooking: any;

  showUpcoming() {
    this.upcoming = true;
    this.getbooking.getFaq().subscribe(res => {
      console.log(res);
      this.upcomingBooking = res;
    });
  }

  showPast() {
    this.upcoming = false;
    this.getbooking.getPast().subscribe(res => {
      console.log(res);
      this.pastBooking = res;
    });
  }

}
