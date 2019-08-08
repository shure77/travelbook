import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';


const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'create', component: CreateComponent, data: {title: 'Create Page'} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
