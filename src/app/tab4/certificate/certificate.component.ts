import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { File, IWriteOptions } from '@ionic-native/file/ngx';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { Storage } from '@ionic/storage';
import { CommonService } from 'src/app/services/common.service';


@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.scss'],
})
export class CertificateComponent implements OnInit {

  constructor(private file: File, private service: CommonService, private transfer: FileTransfer, private storage: Storage, private router: Router, private popover: PopoverController, private fileOpener: FileOpener) { }

  ngOnInit() { }
  @ViewChild('quoteCanvas', { static: true }) certCanvas: ElementRef;

  ionViewWillEnter() {
    this.createCertificate()
  }

  goBack() {
    this.router.navigate(["/tabs/tab4"])
  }

  createCertificate() {
    const ctx = this.certCanvas.nativeElement.getContext('2d');
    let base_image = new Image();

    base_image.src = 'assets/images/Certificate.png';


    // alert(name)

    let name = this.service.getEmpObject().name
    let totalKm =  this.service.totalKm.toString()
    let treeCount = this.service.getTreesCount(totalKm)
    // name ='Mandar Edlabadkar'



    console.log(totalKm.length)

    base_image.onload = function () {

      
      // ctx.drawImage(base_image, 0, 0, base_image.width, base_image.height, 0, 0, 1173, 1308);
      // drawText(name,590,550,'46','Arial', 'black', 'normal')

      ctx.drawImage(base_image, 0, 0, base_image.width, base_image.height, 0, 0, 1236, 1842);
      drawText(name,630,490,'46','Arial', 'black', 'normal')
      drawText(totalKm,340 - (11*totalKm.length),823,'46','Arial', '#00008C', 'normal')
      drawText(treeCount,1020,1280,'56','Arial', 'white', 'bold')

      // ctx.font = "46px";
      // ctx.textBaseline = 'middle';
      // ctx.textAlign = 'center';
      // // ctx.fillText(name, 590, 550);
      // ctx.fillText(name, 630, 490);

    }

    function drawText(text,centerX,centerY,fontsize,fontface, color, weight){
      ctx.save();
      ctx.font=weight+' '+fontsize+'px '+fontface;
      ctx.textAlign='center';
      ctx.textBaseline='middle';
      ctx.fillStyle = color;
      ctx.fillText(text,centerX,centerY);
      ctx.restore();
    }


  }

  async viewImage() {
    this.onDowloadButtonClick()
    var dataUrl = this.certCanvas.nativeElement.toDataURL();
    var name = 'MilesCertificate.png';
    var osName = await this.service.get('Mode')

    // alert(osName)

    let path = '';

    if (osName === 'ios') {
      path = this.file.dataDirectory;
    }
    else {
      path = this.file.externalRootDirectory;
    }

    let options: IWriteOptions = { replace: true };

    // alert(path)

    var data = dataUrl.split(',')[1]
    let blob = this.b64toBlob(data, 'image/png');

    this.file.writeFile(path, name, blob, options).then(res => {
      console.log(res);
    }, err => {
      alert(JSON.stringify(err));
    });

    path = path + 'MilesCertificate.png'

    this.fileOpener.open(path, 'image/png').then(() => console.log('File is opened')).catch(e => console.log('Error opening file', e));

  }

  async onDowloadButtonClick() {
    //this.certCanvas.nativeElement.nativeElement.toBlob(blob => {
    // Store it
    // alert('Download Clicked')
    var dataUrl = this.certCanvas.nativeElement.toDataURL();
    var name = 'MilesCertificate.png';
    var osName = await this.service.get('Mode')

    let path = '';

    if (osName === 'ios') {
      path = this.file.dataDirectory;
    }
    else {
      path = this.file.externalRootDirectory;
    }

    let options: IWriteOptions = { replace: true };

    // alert(path)

    var data = dataUrl.split(',')[1]
    let blob = this.b64toBlob(data, 'image/png');

    this.file.writeFile(path, name, blob, options).then(res => {
      // alert('Downloaded')
      // this.popover.create({
      //   component: DownloadPopupComponent,
      //   cssClass: 'certPopover', backdropDismiss: true
      // }).then((popoverElement) =>{
      //   popoverElement.present();
      // })
      console.log(res);
      // const fileTransfer = this.transfer.create();
      // fileTransfer.download(path + name, this.file.externalRootDirectory + 'MilesCertificate.pdf').then((entry) => {
      //   // alert(this.file.externalRootDirectory+'/Download');
      // }, (error) => {
      //   alert("download error");
      // });
    }, err => {
      alert(JSON.stringify(err));
    });
    // });

  }

  b64toBlob(b64Data, contentType) {
    contentType = contentType || '';
    var sliceSize = 512;
    var byteCharacters = atob(b64Data.replace(/^data:image\/(png|jpeg|jpg);base64,/, ''));
    var byteArrays = [];

    for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      var slice = byteCharacters.slice(offset, offset + sliceSize);
      var byteNumbers = new Array(slice.length);
      for (var i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
      var byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    var blob = new Blob(byteArrays, { type: contentType });
    return blob;
  }
}
