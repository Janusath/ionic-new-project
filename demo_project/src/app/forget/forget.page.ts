import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
@Component({
  selector: 'app-forget',
  templateUrl: './forget.page.html',
  styleUrls: ['./forget.page.scss'],
})
export class ForgetPage implements OnInit {


  email:string="";
  password:string="";
  constructor( private nav:NavController,private toastController: ToastController) { }

  async Forgot() {
    if (this.email == "") {
      const toast = await this.toastController.create({
        message: 'email is required!',
        duration: 1500,
        position: 'middle'
      });

      await toast.present();
    }

    else if (this.password == "") {
      const toast = await this.toastController.create({
        message: 'password is required!',
        duration: 1500,
        position: 'middle'
      });

      await toast.present();

    }

    else {

      const toast = await this.toastController.create({
        message: 'You are reset sucessfully!',
        duration: 1500,
        position: 'middle'
      });

      await toast.present();

    }

}
  ngOnInit() {
  }

  back()
  {
    this.nav.navigateBack('login')
  }

}
