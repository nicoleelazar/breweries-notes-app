import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterService } from '../register.service'
import { User } from '../models/User';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  //for dropdown select options in form
  options = ['brewery 1', 'brewery 2', 'brewery 3', 'brewery 4'];
  optionHasError = true;

  userModel = new User('', '', '', 'default');

  selectedFile: File = null;

  submitted: Boolean = false;

  constructor(private http: HttpClient, private _registerService: RegisterService) { }

  ngOnInit() {

  }

  // CUSTOM VALIDATION FOR SELECT OPTIONS
  validateOption(value) {
    if (value === 'default') {
      this.optionHasError = true;
    } else {
      this.optionHasError = false;
    }
  }

  // IMAGE UPLOAD
  onFileSelected(event) {
    // 'files' is a key of event object
    this.selectedFile = <File> event.target.files[0];
  }

  onUpload() {
    const formData = new FormData;
    //'name' is a built in property of <File>
    formData.append('image', this.selectedFile, this.selectedFile.name)
    //send to server (fake server url below) 
    this.http.post('https://', formData)
      .subscribe(res => {
        console.log(res)
      })
  }


  //FORM SUBMIT
  onSubmit() {
    this.submitted = true;

    this._registerService.register(this.userModel)
      .subscribe(
        data => console.log('success!', data),
        error => console.log('Error!', error)
      )

  }

}
