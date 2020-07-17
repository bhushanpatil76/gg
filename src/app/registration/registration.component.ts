import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private loginService: LoginService,
  ) {}

  ngOnInit() {
  }

  createRegistrationForm() {
    return this.formBuilder.group({
      full_name: [
        "",
        [
          //Validators.required,
          //Validators.minLength(1),
          //Validators.maxLength(10),
          //Validators.pattern("")

        ]
      ],
      phone_number: [
        "",
        [
          //Validators.required,
          // Validators.minLength(1),
          // Validators.maxLength(10),

        ]
      ],
      email: [
        "",
        [
          //Validators.required,
          // Validators.minLength(1),
          // Validators.maxLength(10),

        ]
      ],
      password: [
        "",
        [
          //Validators.required,
          // Validators.minLength(1),
          // Validators.maxLength(10),

        ]
      ],
      dob: [
        "",
        [
          //Validators.required,
          // Validators.minLength(1),
          // Validators.maxLength(10),

        ]
      ],
      gender: [
        "",
        [
          //Validators.required,
          // Validators.minLength(1),
          // Validators.maxLength(10),

        ]
      ],
      fk_country_id: [
        "",
        [
          //Validators.required,
          // Validators.minLength(1),
          // Validators.maxLength(10),

        ]
      ],
      fk_state_id: [
        "",
        [
          //Validators.required,
          // Validators.minLength(1),
          // Validators.maxLength(10),

        ]
      ],
      fk_city_id: [
        "",
        [
          //Validators.required,
          // Validators.minLength(1),
          // Validators.maxLength(10),

        ]
      ],
      skype_id: [
        "",
        [
          //Validators.required,
          // Validators.minLength(1),
          // Validators.maxLength(10),

        ]
      ],
      phone_number2: [
        "",
        [
          //Validators.required,
          // Validators.minLength(1),
          // Validators.maxLength(10),

        ]
      ],
      website: [
        "",
        [
          //Validators.required,
          // Validators.minLength(1),
          // Validators.maxLength(10),

        ]
      ],
      company_name: [
        "",
        [
          //Validators.required,
          // Validators.minLength(1),
          // Validators.maxLength(10),

        ]
      ],
      fk_primary_bussiness: [
        "",
        [
          //Validators.required,
          // Validators.minLength(1),
          // Validators.maxLength(10),

        ]
      ],
      company_address: [
        "",
        [
         // Validators.required,
          // Validators.minLength(1),
          // Validators.maxLength(10),

        ]
      ],

    })
  }

  onRegistrationSubmit(){
    let postData: any = {}
    this.loginService.signupUser(postData).subscribe(result =>{
      console.log('registration form data here ....',result);
    })
  }

}
