import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  getUserDetails(uname, password){
    return this.http.post('/api/auth.php',{
      uname,
      password
    }).subscribe(data=>{
      console.log(data, " is got from the server")
    })
  }
}
