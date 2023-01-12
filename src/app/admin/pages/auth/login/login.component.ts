import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {AuthService} from './../../../../core/services/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  loadloginScreen = false;

  constructor(private _authService:AuthService, public fb:FormBuilder, private router:Router) {

   }

  ngOnInit(): void {
    this.formValidation()
  }

  formValidation()
  {
    this.loginForm = this.fb.group({
      email:['',[Validators.required]],
      password:['', Validators.required]
    })
  }

  get loginFormControl() { return this.loginForm.controls; }

    public errorHandlingLoginForm = (control: string, error: string) => {

        return this.loginForm.controls[control].hasError(error);
    }

  onSubmit()
  {
    if(this.loginForm.invalid)
    {
      return;
    }    
    this.loadloginScreen = true;
    let bodyData = {
      email: this.loginForm.get('email')?.value,
      password: this.loginForm.get("password")?.value
    }
    this._authService.login(bodyData).subscribe((res:any)=>{
    this.loadloginScreen = false;
    console.log(res)
     if(res.status == 'ssuccess')
     {
      this.router.navigateByUrl('admin/dash');
     }
    },
    (err)=>{
    this.loadloginScreen = false;
    throw err;
    }
    )
  }
  

}
