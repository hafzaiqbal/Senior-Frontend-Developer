import { getLocaleTimeFormat } from '@angular/common';
import { Component } from '@angular/core';
import { timeInterval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Analog Clock';
  CurrentTime: any;
  constructor() {
    setInterval(() => {
      this.CurrentTime = new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds()
    }, 1);
  }
  ngOnInit() {
   
    console.log(this.CurrentTime)
  }

}
