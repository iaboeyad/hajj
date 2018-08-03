import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { HomePage } from "../home/home";

/**
 * Generated class for the AppliedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-applied',
  templateUrl: 'applied.html',
})
export class AppliedPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,  public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AppliedPage');
  }
  onClose() {
    //this.viewCtrl.dismiss();
    const placePageModal = this.modalCtrl.create(HomePage);
    placePageModal.present();
    placePageModal.onDidDismiss(
      () => {

      }
    );
  }
}
