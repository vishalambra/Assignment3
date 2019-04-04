import { Component, OnInit } from '@angular/core';
import { FaqService } from 'src/app/services/faq.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  ques:any;
  ans;any;
  data:any;

  constructor(private faq:FaqService) { }

  ngOnInit() {
    this.faq.getFaq().subscribe(rsp =>{ 
      this.data = rsp;
      console.log(rsp); 
      this.ques = this.data[0].ques;
      this.ans = this.data[0].ans;
      console.log(this.ques);
      console.log(this.ans);
    });
  }

  acc:any;
  i:number;
  panel:any;

  accord(){
    this.acc = document.getElementsByClassName("accordion");

    for (this.i = 0;this.i < this.acc.length; this.i++) 
    {
      this.acc[this.i].addEventListener("click", 
        function(){
          this.classList.toggle("active");
          this.panel = this.nextElementSibling;
          if (this.panel.style.display === "block") 
          {
            this.panel.style.display = "";
          } 
          else 
          {
            this.panel.style.display = "block";
          }
      });
    }
  }
  
 
}
