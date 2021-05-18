import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

//array che va a dire come agire alle varie rotte
const routes: Routes = [
  {
    path: 'homepage',
    component: HomeComponent
  },
  {
    path: '',  //redirect alla homepage in caso di path vuoto
    redirectTo: '/homepage',
    pathMatch: 'full'  //il path deve essere completamente uguale al path dichiarato in path
  },
  {
    path: '**', //Wildcard route
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
