import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contacts } from '@capacitor-community/contacts';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {


  contacts: any[] = [];
  scannedResult: any;
  content_visibility = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.getContacts();
  }

  ngOnDestroy(): void{
    this.stopScan();
  }

  async getContacts(){
    try{
      const permission = await Contacts.requestPermissions();
      console.log("permission: ", permission.contacts);

      if (!permission?.contacts) return;
      else if(permission?.contacts == "granted"){
        const result = await  Contacts.getContacts({
          projection: {
            name: true,
            phones: true,
            emails: true,
            organization: true,
            birthday: true
          }
        });
        console.log("results: ", result);
        this.contacts = result.contacts;
        console.log(this.contacts)
      }

    }
    catch(e) {
      console.log(e)
    }

  }

  checkPermission = async () => {
    // check or request permission
    const status = await BarcodeScanner.checkPermission({ force: true });
  
    if (status.granted) {
      // the user granted permission
      return true;
    }
  
    return false;
  };

  async startScan(){
    try{
      const permission = await this.checkPermission();
      if(!permission){
        return;
      }
      await BarcodeScanner.hideBackground();
      document.querySelector('body').classList.add('scanner-active');
      this.content_visibility = 'hidden';
      const result = await BarcodeScanner.startScan();
      console.log(result);
      
      BarcodeScanner.showBackground();
      document.querySelector('body').classList.remove('scanner-active');
      this.content_visibility = '';
      if(result?.hasContent) {
        this.scannedResult = result.content;
        this.showQRCodeAlert(result.content);        
        console.log(this.scannedResult);
      }
    }
    catch(e){
      console.log(e);
      this.stopScan();
    }
  }

  showQRCodeAlert(content: string) {
    alert('QR Code Content: ' + content);
  }

  stopScan(){
    
    BarcodeScanner.showBackground();
    BarcodeScanner.stopScan();
    document.querySelector('body').classList.remove('scanner-active');
    this.content_visibility = '';
  }

}
