import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Router
import { RouterModule, Routes } from '@angular/router'
// forms
import { FormsModule } from '@angular/forms';
// httpClient
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
// Toastr
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; //toastr lo necesita
import { ToastrModule } from 'ngx-toastr';
// Guards
import { LoginGuard } from './guards/login.guard';
import { NoLoginGuard } from './guards/no-login.guard';
// Components
import { HomeComponent } from './components/home/home.component';
import { ListaEmpresasComponent } from './components/empresas/lista-empresas/lista-empresas.component';
import { ListaSucursalesComponent } from './components/sucursales/lista-sucursales/lista-sucursales.component';
import { NuevaSucursalComponent } from './components/sucursales/nueva-sucursal/nueva-sucursal.component';
import { ListaZonasComponent } from './components/zonas/lista-zonas/lista-zonas.component';
import { NuevaZonaComponent } from './components/zonas/nueva-zona/nueva-zona.component';
import { ListaClientesComponent } from './components/clientes/lista-clientes/lista-clientes.component';
import { NuevoClienteComponent } from './components/clientes/nuevo-cliente/nuevo-cliente.component';
import { ListaNegociosComponent } from './components/negocios/lista-negocios/lista-negocios.component';
import { NuevoNegocioComponent } from './components/negocios/nuevo-negocio/nuevo-negocio.component';
import { InvRealizadasComponent } from './components/investigaciones/inv-realizadas/inv-realizadas.component';
import { InvPendientesComponent } from './components/investigaciones/inv-pendientes/inv-pendientes.component';
import { NuevaEmpresaComponent } from './components/empresas/nueva-empresa/nueva-empresa.component';
import { ListasEmpleadosComponent } from './components/empleados/listas-empleados/listas-empleados.component';
import { NuevoEmpleadoComponent } from './components/empleados/nuevo-empleado/nuevo-empleado.component';
import { ListaPrestamosComponent } from './components/prestamos/lista-prestamos/lista-prestamos.component';
import { NuevoPrestamoComponent } from './components/prestamos/nuevo-prestamo/nuevo-prestamo.component';
import { ListaCobrosComponent } from './components/cobros/lista-cobros/lista-cobros.component';
import { NuevoCobroComponent } from './components/cobros/nuevo-cobro/nuevo-cobro.component';
import { AprobarPrestamoComponent } from './components/prestamos/aprobar-prestamo/aprobar-prestamo.component';
import { TipoCreditoComponent } from './components/prestamos/tipo-credito/tipo-credito.component';
import { PagosAtrazadosComponent } from './components/cobros/pagos-atrazados/pagos-atrazados.component';

const routes:Routes=[
  { path:'home', component:HomeComponent },
  { path:'lista-empresas', component:ListaEmpresasComponent },
  { path: 'nueva-empresa', component:NuevaEmpresaComponent},
  { path: 'lista-clientes', component:ListaClientesComponent},
  { path: 'nuevo-cliente', component:NuevoClienteComponent},
  { path: 'lista-cobros', component:ListaCobrosComponent},
  { path: 'nuevo-cobro', component:NuevoCobroComponent},
  { path: 'lista-empleados', component:ListasEmpleadosComponent},
  { path: 'nuevo-empleado', component:NuevoEmpleadoComponent},
  { path: 'inv-pendientes', component:InvPendientesComponent},
  { path: 'inv-realizadas', component:InvRealizadasComponent},
  { path: 'lista-negocios', component:ListaNegociosComponent},
  { path: 'nuevo-negocio', component:NuevoNegocioComponent},
  { path: 'lista-prestamos', component:ListaPrestamosComponent},
  { path: 'nuevo-prestamo', component:NuevoPrestamoComponent},
  { path: 'lista-sucursales', component:ListaSucursalesComponent},
  { path: 'nueva-sucursal', component:NuevaSucursalComponent},
  { path: 'lista-zonas', component:ListaZonasComponent},
  { path: 'nueva-zona', component:NuevaZonaComponent},
  { path: 'aprobar-prestamo', component: AprobarPrestamoComponent},
  { path: 'tipo-credito', component: TipoCreditoComponent},
  { path: 'pagos-atrazados', component: PagosAtrazadosComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ListaEmpresasComponent,
    HomeComponent,
    ListaSucursalesComponent,
    NuevaSucursalComponent,
    ListaZonasComponent,
    NuevaZonaComponent,
    ListaClientesComponent,
    NuevoClienteComponent,
    ListaNegociosComponent,
    NuevoNegocioComponent,
    InvRealizadasComponent,
    InvPendientesComponent,
    NuevaEmpresaComponent,
    ListasEmpleadosComponent,
    NuevoEmpleadoComponent,
    ListaPrestamosComponent,
    NuevoPrestamoComponent,
    ListaCobrosComponent,
    NuevoCobroComponent,
    AprobarPrestamoComponent,
    TipoCreditoComponent,
    PagosAtrazadosComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
