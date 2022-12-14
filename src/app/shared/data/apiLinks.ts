import { environment } from './../../../environments/environment';
export class ApiLinks {
  readonly baseUrl = environment.baseUrl;
  readonly userList = this.baseUrl + 'getAllUsers'
}
