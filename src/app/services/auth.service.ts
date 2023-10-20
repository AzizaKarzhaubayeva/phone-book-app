import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authenticated = false;

  private users: any[] = [
    {email: "Madmax@gmail.com", password: "12Aalkaf@"},
    {email: "Adam@mail.ru", password: "@lkd34$$A"}
  ]

  constructor(){};

  login(email: String, password: String): boolean{
    const user = this.users.find((u) => u.email === email && u.password === password);

    if (user){
      this.authenticated = true;
    }
    else{
      this.authenticated = false;
    }

    return !!user;
  }

  isAuthenticated(): boolean{
    return this.authenticated;
  } 

}
