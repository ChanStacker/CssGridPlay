import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CssGridPlay';
  envs: string[] = ['dev','uat']
  selectOptionData: string = 'anything';
  selectedOption: string;
  eventName: string;
  specialDiv: string = 'special-one';
  isSpecialDiv: boolean = true;

  public SpecialClass = {
    "special-one": this.isSpecialDiv,
    "other-one": !this.isSpecialDiv,
    "highlight-text": !this.isSpecialDiv
  }

  onClick(event: any){
    console.log(event);
    this.eventName = event.type;
  }


}
