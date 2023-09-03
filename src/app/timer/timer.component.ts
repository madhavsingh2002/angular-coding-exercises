import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';
@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit ,OnDestroy {
  @Input() duration:number =0;
  displayTime:string='';
  error:string | null = null;
  private timerSubscription: Subscription | undefined;
  ngOnInit(){
    if(this.duration<=0 || isNaN(this.duration)){
      this.error = 'Invalid duration';
    }
    else{
      this.startTimer()
    }
  }
  ngOnDestroy(){
    this.stopTimer();
  }
  private startTimer() {
    const startTimer = this.duration;
    this.timerSubscription = timer(0,1000).subscribe((tick)=>{
      this.duration = startTimer -tick;
      if(this.duration <=0){
        // this.stopTimer(); //
        this.displayTime="time over"
      }
      else{
        this.displayTime = this.formatTime(this.duration)
      }
    })
  }
  private stopTimer() {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }

  private formatTime(seconds: number): string {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  }
}