import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.page.html',
  styleUrls: ['./cards.page.scss'],
})
export class CardsPage implements OnInit {


  ngOnInit() {
  }
  constructor(private alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Servicio enviado',
      subHeader: 'Gracias por su preferencia',
      message: '!Enseguida haremos su pedido¡',
      buttons: ['OK'],
    });

    await alert.present();
  }

}
