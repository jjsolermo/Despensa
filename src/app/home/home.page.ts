import { Component } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  usuario = '';
  password = '';
  constructor(private auth: Auth, private router: Router, private alertController: AlertController) { }

  async login() {
    try {
      const user = await signInWithEmailAndPassword(this.auth, this.usuario, this.password);
      if (user) {
        this.router.navigateByUrl('/main', { replaceUrl: true });
      }
    } catch (e) {
      this.presentAlert();
      console.error(e);
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Algo a courrido',
      message: 'Usuario o contraseña incorrectos',
      buttons: ['OK'],
    });

    await alert.present();
  }
}
