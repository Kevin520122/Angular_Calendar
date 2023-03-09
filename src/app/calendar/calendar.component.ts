import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  curDate = new Date();
  curYear = this.curDate.getFullYear();
  curMonth = this.curDate.getMonth();

  MonthInfo: any[] = []
  days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  constructor() { }

  ngOnInit(): void {
    this.renderPage()
  }

  private renderPage(){
    this.MonthInfo = []
    const numDays = new Date(this.curYear, this.curMonth, 0).getDate();
    this.getMonthInfo(numDays);
  }
  private getMonthInfo(numDays: number){
    for(let i = 1; i<= numDays; i++){
      this.MonthInfo.push({
        curDate: i,
        curDay: new Date(this.curYear, this.curMonth, i).getDay()
      })
    }
    const numOfBlankDays1 = this.MonthInfo[0].curDay;
    for(let i = 0; i< numOfBlankDays1; i++){
      this.MonthInfo.unshift({
        curDate: '',
        curDay: ''
      })
    }

    const numOfBlankDays2 = 6 - this.MonthInfo[this.MonthInfo.length -1].curDay;
    for(let i = 0; i< numOfBlankDays2; i++){
      this.MonthInfo.push({
        curDate: '',
        curDay: ''
      })
    }
  }

  prevMonth(){
    if(this.curMonth == 1){
      this.curMonth = 12;
      this.curYear -= 1;
    }else{
      this.curMonth -= 1
    }
    this.curDate = new Date(this.curYear, this.curMonth)
    this.renderPage()
  }

  nextMonth(){
    if(this.curMonth == 12){
      this.curMonth = 1;
      this.curYear += 1;
    }else{
      this.curMonth += 1
    }
    this.curDate = new Date(this.curYear, this.curMonth)
    this.renderPage()
  }


}
