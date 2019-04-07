import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { SearchComponent } from './pages/search/search.component';
import { TrackedComponent } from './pages/tracked/tracked.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { Role } from './models/role.model';
import { HomeComponent } from './pages/home/home.component';
import { ErrorComponent } from './pages/auth/error/error.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'error',
    component: ErrorComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'about',
    component: AboutComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Basic, Role.Moderate, Role.Admin] }
  },
  {
    path: 'search',
    component: SearchComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Moderate, Role.Admin] }
  },
  {
    path: 'tracked-items',
    component: TrackedComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  },
  {
    path: '**',
    redirectTo: '/about',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
