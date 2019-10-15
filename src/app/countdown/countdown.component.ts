import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {

  currentTime: number;
  endDate: number;
  timeRemaining: number;
  days: any;
  hours: any;
  minutes: any;
  seconds: any;


  constructor() { }


  ngOnInit() {

    // Update timer every second
    setInterval(() => {
      this.countdownTimer();
    }, 1000);

  }


  countdownTimer() {
    this.endDate = new Date('January 15, 2020 23:59:59').getTime();
    this.currentTime = new Date().getTime();
    this.timeRemaining = ((this.endDate - this.currentTime) / 24 / 60 / 60 / 1000);

    if (this.timeRemaining > 0) {
      //Day    
      this.days = Math.floor(this.timeRemaining);
      //Hour    
      this.timeRemaining = (this.timeRemaining - this.days) * 24;
      this.hours = Math.floor(this.timeRemaining);
      //Minute
      this.timeRemaining = (this.timeRemaining - this.hours) * 60;
      this.minutes = Math.floor(this.timeRemaining);
      //Second
      this.timeRemaining = (this.timeRemaining - this.minutes) * 60;
      this.seconds = Math.floor(this.timeRemaining);


      // Set double digits
      if (this.days < 10) {
        this.days = `0${this.days}`
      }
      if (this.hours < 10) {
        this.hours = `0${this.hours}`
      }
      if (this.minutes < 10) {
        this.minutes = `0${this.minutes}`
      }
      if (this.seconds < 10) {
        this.seconds = `0${this.seconds}`;
      }


    } else {
      console.log('countdown is finished')
    }


  }


}

