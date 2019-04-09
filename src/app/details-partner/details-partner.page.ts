import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { _PARTNER_ } from '../model/list-partner';
import { Partner } from '../model/partner';

@Component({
  selector: 'app-details-partner',
  templateUrl: './details-partner.page.html',
  styleUrls: ['./details-partner.page.scss'],
})
export class DetailsPartnerPage implements OnInit {
  id : number ;
  partners = _PARTNER_;
  current_partner: Partner;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.current_partner = this.partners[this.id];
  }
  changeNote(curr: Partner){
    console.log(`Etoiles de la personnes à changer ${curr.name}`);
  }


}
