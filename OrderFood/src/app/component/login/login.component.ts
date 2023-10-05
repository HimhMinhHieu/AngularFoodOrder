import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { ApisService } from 'src/app/Config/apis.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = new FormGroup({
    taiKhoan: new FormControl(''),
    matKhau: new FormControl('')
  });

  constructor(
    private cookie:CookieService,
    private apis: ApisService

    ){}
    public u:any = "";
    public p:any = "";

    public user = [
      {
        "taiKhoan": this.u,
        "matKhau": this.p
      }
    ]
  onSubmit() {
    if(this.loginForm.valid){
      const user = {
        "taiKhoan": this.loginForm.value.taiKhoan,
        "matKhau": this.loginForm.value.matKhau
      };
      const myJSON = JSON.stringify(this.loginForm.value);
      console.log(myJSON);
      console.log(JSON.stringify(user));
      try{
        
        this.apis.login(JSON.stringify(user)).subscribe();
        
      }catch(Exception)
      {
        console.log(Exception);
      }
      
    }
    
  }

  change(){
    console.log(this.loginForm.value);
    console.log("123");
    this.u = this.loginForm.value.taiKhoan;
    this.p = this.loginForm.value.matKhau;
    console.log(this.user);
    console.log(this.u);
  }

  click(){
    console.info("My name");
  }
}
