import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from "../../providers/rest/rest";

/**
 * Generated class for the HomeDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home-details',
  templateUrl: 'home-details.html',
})
export class HomeDetailsPage {
  usersList: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider ) {
  }
  loaded: boolean;
  ionViewDidEnter() {
    // this.menu.swipeEnable(false);
  }
  ionViewDidLeave() {
    //this.menu.swipeEnable(true)
  }

  ngOnInit() {

    let nid = this.navParams.get('nid');

    this.restProvider.getUsersItem(nid)
      .then(data => {
        this.usersList = data;
        console.log(this.usersList);
      });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeDetailsPage');

  }

}
