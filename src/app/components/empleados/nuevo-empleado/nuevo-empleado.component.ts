import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../../models/empleado';
import { EmpleadosService } from '../../../services/empleados.service';
import { NgForm } from '@angular/forms';
import { SucursalesService } from '../../../services/sucursales.service';
import { EmpresasService } from '../../../services/empresas.service';
import { Empresa } from '../../../models/empresa';
import { Sucursal } from '../../../models/sucursal';
import { ToastrModule, ToastrService } from '../../../../../node_modules/ngx-toastr';

@Component({
    selector: 'app-nuevo-empleado',
    templateUrl: './nuevo-empleado.component.html',
    styleUrls: ['./nuevo-empleado.component.css'],
    providers:[EmpleadosService,EmpresasService,SucursalesService]
})
export class NuevoEmpleadoComponent implements OnInit {
    public titulo:string;
    public nuevoEmpleado:any;
    // Para llenar select
    public empresas:Empresa;
    public sucursales:Sucursal;

    constructor(
        private _empleadoService:EmpleadosService,
        private _empresaService:EmpresasService,
        private _sucursalesService:SucursalesService,
        private toastr : ToastrService
    ){
        this.titulo='Se Arranco el componente EmpleadoNuevoComponent';
        this.nuevoEmpleado=new Empleado(0,0,'','','','','','','','','','','','','','');
        this.nuevoEmpleado.usuario='';
        this.nuevoEmpleado.password='';
    }
    
    ngOnInit(){
        console.log(this.titulo);
        this.ObtenerSucursales();
    }

    public addEmpleado(){
        console.log(this.nuevoEmpleado)
        this.toastr.info('Añadiendo empleado');
        console.log(this.nuevoEmpleado);
        this._empleadoService.addEmpleado(this.nuevoEmpleado).subscribe(
            res=>{
                if(res['result']){
                    this.toastr.success('Nuevo empleado agregado','Exito');
                    console.log(this.nuevoEmpleado);
                }else{
                    alert(`Error!!!, Fallo al intentar agregar un empleado...`);
                    console.log(this.nuevoEmpleado);
                    console.log(res);
                }
            });
    };


    public limpiarForm(form:NgForm){
        form.reset();
        this.nuevoEmpleado=new Empleado(0,0,'','','','','','','','','','','','','','');
        this.nuevoEmpleado.usuario='';
        this.nuevoEmpleado.password='';
    }

    
    public ObtenerSucursales(){
    this._sucursalesService.getSucursales().subscribe(
        result=>{
            if(result['result']){
                this.sucursales=result['result'];
                console.log(this.sucursales);
            }
        });
    }
    
    //Validar (xxx)yyy-zzzz telefonos
    public validarTel(){
    var tel = this.nuevoEmpleado.telefonos;
        var tamaño = tel.length;
        if(tamaño == 3){
            var parent = "("+tel+")";
            this.nuevoEmpleado.telefonos = parent;
        }
        if(tamaño==8){
            var guion = tel + "-";
            this.nuevoEmpleado.telefonos = guion;
        }
    }
          
}

