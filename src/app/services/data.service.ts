import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user.model';
import { Role } from '../models/role.model';

@Injectable()
export class DataService {

  private spinnerFlagSource: BehaviorSubject<boolean> = new BehaviorSubject(false);
  spinnerFlag: Observable<boolean> = this.spinnerFlagSource.asObservable();

  loggedInUser: User = JSON.parse(sessionStorage.getItem('currentUser'));

  private currentUserSubject: BehaviorSubject<User> = new BehaviorSubject(this.loggedInUser);
  currentUser: Observable<User> = this.currentUserSubject.asObservable();

  constructor() { }

  changeSpinnerFlag(flag: boolean) {
    this.spinnerFlagSource.next(flag);
  }

  get currentUserValue() {
    return this.currentUserSubject.value;
  }

  set currentUserValue(value: User) {
    this.currentUserSubject.next(value);
  }

}