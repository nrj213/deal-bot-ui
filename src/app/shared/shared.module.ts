import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ToasterModule } from 'angular2-toaster';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { PermissionDirective } from './directives/permission.directive';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ToasterModule
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    SpinnerComponent,
    PermissionDirective
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    SpinnerComponent,
    PermissionDirective
  ]
})
export class SharedModule { }
