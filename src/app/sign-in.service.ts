/**
 * Title: sign-in.service.ts
 * Author: Jeremy Lates
 * Date: 05-02-2024
 * Description: App module
 * Notes:
 * Code Adapted from https://github.com/buwebdev/web-425/blob/master/week-7/gpa-calculator-app3/src/app/sign-in.service.ts
 */

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SignInService {
  studentIds: Array<number>;

  constructor() {
    this.studentIds = [1007, 1008, 1009, 1010, 1011, 1012];
  }

  validate(studentId: number) {
    return this.studentIds.some((id) => id === studentId);
  }
}
