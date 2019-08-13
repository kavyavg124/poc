import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../../auth/services';
import { MessageService } from '../../../shared/services';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  returnUrl: string;
  submitted = false;
  error: string;
  loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    private messageService: MessageService) {
    if (this.authenticationService.isLoggedIn()) {
      this.router.navigate(['/landing']);
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }
  get formControl() {
    return this.loginForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    this.loading = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.authenticationService.login(this.loginForm.value)
      .subscribe(
        data => {
          this.router.navigate(['']);
        },
        loginFailure => {
          this.loading = false;
          if (loginFailure.error) {
            this.error = loginFailure.error.non_field_errors;
          } else {
            this.error = 'Server Error, please try again';
          }
        });
  }

}

