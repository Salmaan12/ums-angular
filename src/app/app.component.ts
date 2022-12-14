import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from './shared/services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ums';
  userRegistration!: FormGroup;
  userList: any;
  constructor(private _toast: ToastrService, private _fb: FormBuilder, private _apiServices: ApiService) { }

  ngOnInit() {
    this.initialize();
    this.getAllUser()
  }

  initialize() {
    this.userRegistration = this._fb.group({
      id: 0,
      username: [''],
      email: [''],
      password: [''],
      address: [''],
      phone: ['']
    });
  }

  getAllUser() {
    this._apiServices.getAllUsers().subscribe((res: any) => {
      this.userList = [];
      this.userList = res;
    },
      error => {
        this._toast.error(error.msg);
      })
  }

}
