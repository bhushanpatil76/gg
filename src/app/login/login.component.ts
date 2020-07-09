import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
  ) {

  }

  ngOnInit() {
  }

  createLoginForm() {
    return this.formBuilder.group({
      email: [
        "",
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(10),
          //Validators.pattern("")

        ]
      ],
      password: [
        "",
        [
          Validators.required,
          // Validators.minLength(1),
          // Validators.maxLength(10),

        ]
      ]
    })
  }

}
