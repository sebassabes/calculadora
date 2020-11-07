import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ServicioService } from '../servicio/servicio.service';


export interface Numero {
  p1?:string,
  p2?:string
}

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})


export class CalculadoraComponent implements OnInit {
  
  constructor(private servicio:ServicioService) { }
  numero:Numero={
  p1:null,
  p2:null
  }

  ngOnInit(): void {
  }
   
  get_sumar(){
    Swal.fire({
      icon:"info",
      allowOutsideClick:false,
      
    })
    Swal.showLoading();
    this.servicio.get_suma(this.numero).subscribe(
      resp=>{
        Swal.fire({
          icon: "success",
          title:resp,
          
        });
      }
    );   
  }

  get_restar(){
    Swal.fire({
      icon:"info",
      allowOutsideClick:false,
      
    })
    Swal.showLoading();
      this.servicio.get_resta(this.numero).subscribe(
        resp=>{
          Swal.fire({
            icon: "success",
            title:resp,
            
          });
        }
      );
  }

  get_mult(){
    Swal.fire({
      icon:"info",
      allowOutsideClick:false,
      
    })
    Swal.showLoading();
    this.servicio.get_mult(this.numero).subscribe(
      resp=>{
        Swal.fire({
          icon: "success",
          title:resp,
        });
      }
    );
  }

  get_div(){
    Swal.fire({
      icon:"info",
      allowOutsideClick:false,
      
    })
    Swal.showLoading();
    this.servicio.get_div(this.numero).subscribe(
      resp=>{
        Swal.fire({
          icon: "success",
          title: resp,
        });
      }
    );
  }
}
