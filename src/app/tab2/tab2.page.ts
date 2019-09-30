import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  currentImage = "";
  name = "";
  empresa = "";
  projeto = "";
  descricao = "";

  constructor(private emailComposer: EmailComposer, private camera: Camera) { }
  

  sendEmail() {

    let email = {
      to: 'fellipes41@gmail.com',
      attachments: [
        this.currentImage
      ],
      subject: 'Cordova Icons',
      body: '<p>Name:  ' + this.name + '</p>' +
      '<p>Empresa: ' + this.empresa + '</p>' +
      '<p>Tipo de Projeto: ' + this.projeto + '</p>' +
      '<p>Descrição: ' + this.descricao + '</p>',
       isHtml: true
    };

    this.emailComposer.open(email);

  }

  captureImage(){
    const options: CameraOptions = {
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.FILE_URI
    }
    
    this.camera.getPicture(options).then((imageData) => {
     this.currentImage = imageData;
    }, err => {
     console.log('Image error: ', err);
    });
  }

}
