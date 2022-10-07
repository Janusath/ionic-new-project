import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  ngOnInit() {
  }
  username: string = "";
  password: string = "";

  constructor(private toastController: ToastController, private nav:NavController) { }


  async login() {
    if (this.username == "") {
      const toast = await this.toastController.create({
        message: 'user name is required!',
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

    else{

      if(this.username != this.password)
      {
        this.nav.navigateForward('home');

        const toast = await this.toastController.create({
          message: 'You are logged sucessfully!',
          duration: 100,
          position: 'middle',
        
          
        });
  
        await toast.present();
      }

  }

}


nextpage()
{
  this.nav.navigateForward('forget');
}


}
