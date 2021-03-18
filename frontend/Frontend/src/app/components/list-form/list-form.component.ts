import { Component, HostBinding, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import {FormAdultoService} from '../../services/form-adulto.service';
import {FotosService} from '../../services/fotos.service';
// ActiveRoute permite verificar el parametro que se esta recibiendo en la consulta, para editar
import{ ActivatedRoute, Router} from '@angular/router';
import { FormAdulto } from 'src/app/models/FormAdulto';
import { Fotos } from 'src/app/models/fotos';

@Component({
  selector: 'app-list-form',
  templateUrl: './list-form.component.html',
  styleUrls: ['./list-form.component.css']
})
export class ListFormComponent implements OnInit {

  @HostBinding('class') classes="row";
  fotos:any=[];
  formAdulto:any=[];
  // pdvs:any=[];
  // estados:any=[];

  fotos$:Observable<Fotos[]>
  formAdulto$:Observable<FormAdulto[]>
  // pdvs$:Observable<PDV[]>
  // estados$:Observable<Estado[]>
  
  constructor(private formAdultoService:FormAdultoService, private fotosService:FotosService, private router: Router) { }
  // constructor(private articulosService:ArticulosService, private router: Router) { }

  ngOnInit(): void {
    this.getArticulos();
    this.getFotos();
  }

  getFotos(){
    this.fotosService.getFotos().subscribe(
      res=>{
        this.fotos=res,
        // this.pdvs=res,
        // this.estados=res,
        console.log(this.fotos);
        res=>console.log(res)
      },
        err=>console.error(err)
    );
  }

  getArticulos(){
    this.formAdultoService.getArticulos().subscribe(
      res=>{
        this.formAdulto=res,
        // this.pdvs=res,
        // this.estados=res,
        console.log(this.formAdulto);
        res=>console.log(res)
      },
        err=>console.error(err)
    );
  }

  deleteArticulo(){
    // console.log(id);
    this.formAdultoService.deleteArticulo(this.formAdulto.id_articulo, this.formAdulto)
    .subscribe(
      res=>{
        console.log(res);
        this.getArticulos();
        this.router.navigate(['/form']);
      },
      err=>console.log(err)
    )
  }

}

