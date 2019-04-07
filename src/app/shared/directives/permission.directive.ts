import { Directive, Input, TemplateRef, ViewContainerRef, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { DataService } from 'src/app/services/data.service';

@Directive({
  selector: '[hasPermission]'
})
export class PermissionDirective implements OnInit {

  currentUser: User;
  roles: string[];

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private dataService: DataService
  ) { }

  ngOnInit() {  }

  @Input() set hasPermission(roles: string[]) {
    this.roles = roles;
    this.currentUser = this.dataService.currentUserValue;
    
    this.checkPermission();
  }

  checkPermission() {
    let hasPermission: boolean = false;
    
    if(this.roles && this.currentUser && this.currentUser.role) {
      for(let role of this.roles) {
        if(this.currentUser.role.indexOf(role) !== -1){
          hasPermission = true;   
          break;
        }
      }
    }

    if(hasPermission) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
