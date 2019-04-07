import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private userService: UserService,
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  returnUrl: string;

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/home';

    this.userService.login().subscribe((response) => {
      setTimeout(() => {
        sessionStorage.setItem('currentUser', JSON.stringify(response));
        this.dataService.currentUserValue = response;
        this.router.navigate([this.returnUrl]);
      }, 3000);
    }, (error) => {
      this.dataService.currentUserValue = undefined;
      this.router.navigate([this.returnUrl]);
    });
  }

}
