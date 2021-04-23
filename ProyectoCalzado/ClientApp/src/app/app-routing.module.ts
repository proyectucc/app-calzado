import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateUserComponent } from './create-user/create.user.component';
import { FormUserComponent } from './form-user/form-user.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { InformesComponent } from './informes/informes.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { RegisEmpleadoComponent } from './regis-empleado/regis-empleado.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'informes', component: InformesComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'create', component: CreateUserComponent },
  { path: 'usuario', component: FormUserComponent},
  { path: 'rempleado', component: RegisEmpleadoComponent},
  { path: 'usuario', component: FormUserComponent},
  { path: 'header', component: HeaderComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
