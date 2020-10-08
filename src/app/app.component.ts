import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormsService } from './forms.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'jimdo-test';
  reactiveForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    message: new FormControl('')
  });
  showLoader = false;
  constructor(private formsService: FormsService) {}


  submit() {
    console.log(this.reactiveForm.value);
    this.showLoader = true;
    this.formsService.submitUserData(this.reactiveForm.value).subscribe(() => {
      this.showLoader = false;
      this.reactiveForm.reset();
    });
  }
}
