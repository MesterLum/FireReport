import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { MapaComponent } from './components/mapa/mapa.component';
const APP_ROUTES:Routes =[
    {path: 'perfil', component: MapaComponent },
    {path: '**', component: HomeComponent }
    
];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}