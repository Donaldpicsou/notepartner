import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(){

  }
  
  logTest(){
    console.log("Juste pour à nouveau")
  }
  dormir(){
    console.log("Je peux déjà aller dormier alors");
  }
  unRead(){
    console.log("Juste pour voir le comportement");
  }

  callPart(){
    console.log("Juste our voir ce qui va se passer");
  }
  
}
