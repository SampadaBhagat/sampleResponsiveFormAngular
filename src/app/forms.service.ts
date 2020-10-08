import { Injectable } from '@angular/core';
import { UserModel } from './models/app.model';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FormsService {

  constructor() { }

  submitUserData(userData: UserModel): Observable<boolean> {
    return of(true).pipe(delay(3000));
  }

}
