import { Component, OnInit, HostBinding } from '@angular/core';
import { from, Observable } from 'rxjs';
// Importar modelo 
import {FormAdulto} from 'src/app/models/FormAdulto';
import {Fotos} from 'src/app/models/fotos';
// importar servicio API 
import {FormAdultoService} from '../../services/form-adulto.service';
// ActiveRoute permite verificar el parametro que se esta recibiendo en la consulta, para editar
import{ ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-form-adulto',
  templateUrl: './form-adulto.component.html',
  styleUrls: ['./form-adulto.component.css']
})
export class FormAdultoComponent implements OnInit {

  // Guarda el div principal en un row 
  @HostBinding('class') classes='row';
  // Importo el modelo 
  // formAdulto:any=[];
 

  // formAdulto$:Observable<FormAdulto[]>
  formAdulto:FormAdulto={
    id_adulto_mayor:0,
    nombre:'',
    apellidos:'',
    cedula:0,
    // fecha_nacimiento: 1900,
    // Fecha_expedicion?:,
    Motivo:'',
    celular:0,
    nom_cajera:'',
    punto_venta:'',
    ced_cajera:0,
    id_foto1:0
  };

  fotos:Fotos={
    id_foto:0,
    foto_ced_adverso:'',
    foto_ced_inverso:'',
    foto_cliente:''
  }

  // formulario de validacion de datos si un juego esta creado para editar 
  // si el edit esta en falso, se puede guardar, si esta en true se edita. ya esta creado
  edit: boolean=false;
  
  constructor(private formAdultoService: FormAdultoService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(){
    // recupera el id del juego a actualizar 
    const params = this.activatedRoute.snapshot.params;
    console.log(params)
    if (params.id){
      this.formAdultoService.getArticulo(params.id)
      .subscribe(
        res=>{
          console.log(res);
          this.formAdulto=res;
          this.edit=true;
        },
        err=>console.error(err)
      )
    }
  }

  saveNewArticulo(){
    // console.log(this.game);
    // Elimina los datos de creacion en el formulario porque la base de datos los crea automaticamente 
    delete this.formAdulto.id_adulto_mayor;
    this.formAdultoService.saveArticulo(this.formAdulto)
    .subscribe(
      res=>{
        console.log(res);
        console.log(this.formAdulto);
        // Cuando guarde un juego envia a la vista games
        this.router.navigate(['/form']);
      },
      err=>console.error(err)
    );
  }
}


