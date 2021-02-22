import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Routes
import { PrincipalComponent } from './principal/principal.component'

const routes: Routes = [
  { path: 'principal', component: PrincipalComponent },
  { path: '**', redirectTo: 'principal' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
