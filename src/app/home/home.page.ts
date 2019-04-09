import { Component } from '@angular/core';
import { _PARTNER_ } from '../model/list-partner';
import { Partner } from '../model/partner';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor( private navCtrl : NavController){
  }
  
  partners = _PARTNER_; 

  logTest(){
    console.log("Juste pour à nouveau")
  }
  dormir(){
    console.log("Je peux déjà aller dormier alors");
  }
  unRead(partner: Partner){
    console.log("Voici sa description "+partner.description);
  }

  callPart(partner){
    console.log("Appel du numéro"+partner.tel);
  }

  openDetails(id: any) {
    this.navCtrl.navigateForward(`details-partner/${id}`);
  }
  
}
