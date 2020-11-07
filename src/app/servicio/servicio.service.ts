import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  API_URL="http://146.83.102.99/api-calculadora-rest/public/index.php/";
  constructor(private http:HttpClient) {
   }

   get_suma(numeros:any){
     return this.http.post(`${this.API_URL}/api/calcular/suma/`,numeros,{responseType: 'text'});
   }

   get_resta(numeros:any){
    return this.http.post(`${this.API_URL}/api/calcular/resta/`,numeros,{responseType: 'text'});
  }
  
  get_mult(numeros:any){
    return this.http.post(`${this.API_URL}/api/calcular/multiplica/`,numeros,{responseType: 'text'});
  }

  get_div(numeros:any){
    return this.http.post(`${this.API_URL}/api/calcular/divide/`,numeros,{responseType: 'text'});
  }
  
  
}
