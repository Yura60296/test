import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor() { }

  @Output() regComponent = new EventEmitter<any>();

  form: FormGroup;

  ngOnInit() {
  	this.form = new FormGroup({
  		email: new FormControl(null, [Validators.required, Validators.email]),
  		password: new FormControl(null, [Validators.required, Validators.minLength(4)])
  	});
  }

  onSubmit(){
    this.regComponent.emit('Аккаунт создан.');
  }

  closeModal() {
    this.regComponent.emit('1');
  }

}
