import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { HomeDetailsPage } from "../home-details/home-details";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  users: any;
  public homeList: any = [];
  public homeListCopy: any = [];

  constructor(public navCtrl: NavController, public restProvider: RestProvider) {

    this.getUsers();
    //this.getUserslist();
    this.loadHome();
  }

  detail(nid: number) {
    this.navCtrl.push(HomeDetailsPage, {nid: nid});
  }

  getUsers() {
    this.restProvider.getUsers()
      .then(data => {
        this.users = data;
        console.log(this.users);

      });
  }


  loadHome(refresher?: any) {
    if (refresher) {
      setTimeout(() => {
        refresher.complete();
      }, 3000);
      this.homeList = this.users;
      if (refresher) {
        refresher.complete();
      }
      this.homeListCopy = this.homeList;
      //this.search();
    }



  }
}
