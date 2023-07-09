import { UserForAuthenticationDto } from './../models/userforauthentication.model';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthResponseDto } from '../models/authresponse.model';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './admin.login.component.html',
  styleUrls: ['./admin.login.component.scss'],
})
export class AdminLoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage: string = '';
  showError: boolean;
  @Output() onAuthtorization: EventEmitter<boolean> = new EventEmitter();
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }
  validateControl(controlName: string) {
    return (
      this.loginForm.get(controlName).invalid &&
      this.loginForm.get(controlName).touched
    );
  }
  hasError(controlName: string, errorName: string) {
    return this.loginForm.get(controlName).hasError(errorName);
  }

  loginUser(loginFormValue) {
    this.showError = false;
    const login = { ...loginFormValue };
    const userForAuth: UserForAuthenticationDto = {
      email: login.username,
      password: login.password,
    };
    this.authService.loginUser(userForAuth).subscribe({
      next: (res: AuthResponseDto) => {
        localStorage.setItem('token', res.token);
        console.log(res);
        this.router.navigate(['/admin']);
        this.onAuthtorization.emit(true);
      },
      error: (err: HttpErrorResponse) => {
        this.errorMessage = err.message;
        this.showError = true;
        this.onAuthtorization.emit(false);
      },
    });
  }
}
