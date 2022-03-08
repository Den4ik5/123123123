import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {User} from "../models/User";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  constructor(
    private http: HttpClient,
  ) {
  }
  getUser(id: string){
    return this.http.get(`${environment.host}/users/${id}`);
  }

  getAllUsers(){
    return this.http.get(`${environment.host}/users`);
  }

  createUser(user: User){
    return this.http.post(`${environment.host}/users`, user);
  }

  editUser(id: string, user: User){
    return this.http.put(`${environment.host}/users/${id}`, user);
  }

  deleteUser(id: string){
    return this.http.delete(`${environment.host}/users/${id}`);
  }
}
