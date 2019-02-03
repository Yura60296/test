import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  form: FormGroup;
  @Output() loginComponent = new EventEmitter<any>();

  ngOnInit() {
  	this.form = new FormGroup({
  		email: new FormControl(null, [Validators.required, Validators.email]),
  		password: new FormControl(null, [Validators.required, Validators.minLength(4)])
  	});
  }

  onSubmit(){
  	console.log('отправил');
    this.loginComponent.emit('Вы успешно залогинились.');
  }

  closeModal() {
    this.loginComponent.emit('1');
  }

}
