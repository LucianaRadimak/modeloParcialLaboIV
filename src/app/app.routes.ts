import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: '/peliculas', pathMatch: "full" },
    { path: 'peliculas', loadComponent: () => import('./pages/peliculas/peliculas.component').then((c) => c.PeliculasComponent)},
    { path: 'altaActor', loadComponent: () => import('./pages/alta-actor/alta-actor.component').then((c) => c.AltaActorComponent)}
];
