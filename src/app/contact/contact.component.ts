import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [
    trigger('onOff', [
      transition(':enter', [style({
        opacity: 0,
        transform: 'translateY(-100%)'
      }),
      animate(400)
      ])
    ])
  ]
})
export class ContactComponent implements OnInit {
  toggleText = false;
  constructor(private http: HttpClient) { }

  endpoint = "assets/contact.php";


  submitReport: string = '';
  submitComplete = false;
  @Input() german: boolean;

  ngOnInit() {

  }

  onSubmit(myForm: NgForm) {
    if (myForm.valid) {
      this.sendForm(myForm);
    }
  }

  sendForm(form: any) {
    this
      .http
      .post(this.endpoint, form.value)
      .subscribe(
        response => this.handleResponse(response, form),
        error => this.handleError(error, form)
      );
  }

  handleResponse(response: any, form: any) {
    console.log('TEST');
    //this.submitReport = "Thank up for your Contact. I will replay as soon as possible!";
    this.submitComplete = true;
    form.reset();
    this.toggleText = true;

    setTimeout(() => {
      this.toggleText =! this.toggleText
    }, 5000);

  }

  handleError(error: any, form: any) {
    console.log(error);
    this.submitReport = "Error! Please contact me on E-Mail: osman.bilgin@web.de";
    this.submitComplete = true;
    form.reset();
  }

  // public sendMail() {
  //   alert('your email was send');
  // }

  closeCard() {
    this.submitComplete = false;
    this.submitReport = '';
  }

}