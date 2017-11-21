import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { TabsPage } from '../tabs/tabs';
/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  isActiveToggleTextPassword: Boolean = true;

  @ViewChild('username') user;
  @ViewChild('password') password;
  @ViewChild('password') confirmpassword;

  constructor(private alertCtrl: AlertController, private fire: AngularFireAuth, 
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  alert(message: string) {
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons:['OK']
    }).present();
  }

  registerUser(){
    this.fire.auth.createUserWithEmailAndPassword(this.user.value +'@domain.xta', this.password.value)
    .then(data => {
      console.log('got data ', data);
      this.alert('Register!');
    })
    .catch(error => {
        console.log('got an error', error);
        this.alert(error.message);
    });
    console.log('Would register with ', this.user.value, this.password.value);
  }


  
    signup(){
      //Api connections
    this.navCtrl.push(TabsPage);

    }
    showPassword(input: any): any {
      input.type = input.type === 'password' ?  'text' : 'password';
     }
     public toggleTextPassword(): void{
      this.isActiveToggleTextPassword = (this.isActiveToggleTextPassword==true)?false:true;
  }
  public getType() {
      return this.isActiveToggleTextPassword ? 'password' : 'text';
  }
}
