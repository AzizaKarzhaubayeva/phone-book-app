import { Component, OnInit } from '@angular/core';
import { Contacts } from '@capacitor-community/contacts';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  contacts: any[] = [];

  ngOnInit(): void {
    this.getContacts();
  }

  constructor() {}

  async getContacts(){
    try{
      const permission = await Contacts.requestPermissions();
      console.log("permission: ", permission.contacts);

      if (!permission?.contacts) return;
      else if(permission?.contacts == "granted"){
        const result = await  Contacts.getContacts({
          projection: {
            name: true,
            phones: true
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

  joinNumbers(array){
    return array.map(x => x.number).join(', ')
  }

}
