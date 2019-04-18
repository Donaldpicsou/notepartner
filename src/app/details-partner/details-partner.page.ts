import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { _PARTNER_ } from '../model/list-partner';
import { Partner } from '../model/partner';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { Platform, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-details-partner',
  templateUrl: './details-partner.page.html',
  styleUrls: ['./details-partner.page.scss'],
})
export class DetailsPartnerPage implements OnInit {
  id : number ;
  partners = _PARTNER_;
  current_partner: Partner;
  avg : number;
  stars : string[];
  constructor(private route: ActivatedRoute, private makecall: CallNumber,
    private platform : Platform, private toastCrtl : ToastController) { }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.current_partner = this.partners[this.id];
    this.avg = this.getAvg(this.current_partner.stars)
    this.stars = this.partnerStar(this.avg);
  }
  changeNote(curr: Partner){
    console.log(`Etoiles de la personnes à changer ${curr.name}`);
  }

  async presentToast(msg: string){
    const toast = await this.toastCrtl.create({
      message : msg,
      duration : 2000,
      animated: true,
      color: "warning"
    });
    toast.present();
  }

  /**
   * This allow to call a partner directly from the app
   * @param tel : The phone number of the partner to contact
   */
  callPartner(tel:any){
    // We check if we are in the appropriate platform to be able to make a call
    if(this.platform.is("cordova") && (this.platform.is("ios") || this.platform.is("android"))){
    this.makecall.callNumber(tel, true)
    .then(res => console.log('launcher dialer', res))
    .catch(err => console.log("Error launching dialer", err));
    }else{
      this.presentToast("This platform not support this operation")
      .then((res) => console.log("No way to contact the phone", res))
      .catch((err) => console.log("Error on contactPartner", err))
    }
  }

  copyToClipboard(mail:string){
    console.log("copy the l'élément dans la mémoire interne");
  }
  
  showDetails(){

  }

  getAvg(note: number[]){
    let som: number = 0; 
    if((typeof note !== 'undefined') && (note.length > 0)){
      for(let i = 0; i < note.length; i++){
        som += note[i];
      }
      return Math.round(10*som/(note.length))/10;
    }else{
      return som;
    }
  }

  /**
   * partnerStar allow to determine the number of start of a partner
   * related to average of star
   * @param avg the average of star given by user for this partner
   */
  partnerStar(avg : number): string[]{
    let star : string[] = [];
    for(let i = 0; i < 5; i++){
      if( avg <= 0)
        star.push("star-outline");
      else
        if((avg > 0) && (avg < 1) )
          star.push("star-half");
        else
          if(avg > 1)
            star.push("star");
      avg--; 
    }
    console.log(star);
    return star
  }

}
