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
  ) { }

  ngOnInit() {
    this.createRegistrationForm();
  }

  createRegistrationForm() {
    this.registrationForm = this.formBuilder.group({
      // full_name: [{value: '', disabled: true}, Validators.required, Validators.minLength],
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

    });

  }

  onRegistrationSubmit() {
    console.log("form", this.registrationForm);
    var formData = this.registrationForm.getRawValue();

    debugger;
    let postData = {
      full_name: formData.full_name,
      phone_number: formData.phone_number,
      email: formData.email,
      password: formData.password,
      dob: formData.dob,
      gender: formData.gender,
      fk_country_id: formData.fk_country_id,
      fk_state_id: formData.fk_state_id,
      fk_city_id: formData.fk_city_id,
      skype_id: formData.skype_id,
      phone_number2: formData.phone_number2,
      website: formData.website,
      company_name: formData.company_name,
      fk_primary_bussiness: formData.fk_primary_bussiness,
      company_address: formData.company_address
    }

    console.log("postData ",postData)
    this.loginService.signupUser(postData).subscribe(result => {
      console.log('registration form data here ....', result);
    },
      error => {
        console.log('registration form error here ....', error);
      })
  }



}
