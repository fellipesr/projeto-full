import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Platform } from '@ionic/angular';
import { File } from '@ionic-native/File/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  currentImage = "";
  name = "";
  empresa = "";
  projeto = "";
  descricao = "";
  oppenpdf;

  constructor(private emailComposer: EmailComposer, private camera: Camera, private platform: Platform, private file: File, private ft: FileTransfer,
    private fileOpener: FileOpener, private document: DocumentViewer, private fileChooser: FileChooser, private filePath: FilePath) { }


  sendEmail() {

    let email = {
      to: 'fullengenharia@fullengenharia.com.br',
      attachments: [
        this.currentImage,
        this.oppenpdf
      ],
      subject: 'Proposta Full Engenharia',
      body: '<p><span style="font-weight:bold;">Name:</span>  ' + this.name + '</p>' +
        '<p><span style="font-weight:bold;">Empresa:</span> ' + this.empresa + '</p>' +
        '<p><span style="font-weight:bold;">Tipo de Projeto:</span> ' + this.projeto + '</p>' +
        '<p><span style="font-weight:bold;">Descrição:</span> ' + this.descricao + '</p>',
      isHtml: true
    };

    this.emailComposer.open(email);

  }

  captureImage() {
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

  openLocalPdf() {
    this.fileChooser.open().then(file => {
      this.filePath.resolveNativePath(file).then(resolvedFilePath => {
        this.fileOpener.open(resolvedFilePath, 'application/pdf').then(file => {
          this.oppenpdf = resolvedFilePath;

        }).catch(err => {
          alert(JSON.stringify(err));
        });
      }).catch(err => {
        alert(JSON.stringify(err));
      });
    }).catch(err => {
      alert(JSON.stringify(err));
    });
  }


  downloadAndOpenPdf() {
    let downloadUrl = 'https://drive.google.com/uc?id=11kpr-IllWN5L24nZeggYBtqUBpxtQ_PC&export=download';
    let path = this.file.dataDirectory;
    const transfer = this.ft.create();

    transfer.download(downloadUrl, path + 'myfile.pdf').then(entry => {
      let url = entry.toURL();

      if (this.platform.is('ios')) {
        this.document.viewDocument(url, 'application/pdf', {});
      } else {
        this.fileOpener.open(url, 'application/pdf')
          .then(() => console.log('File is opened'))
          .catch(e => console.log('Error opening file', e));
      }
    });
  }

}