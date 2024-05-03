/**
 * Title: gpa.component.ts
 * Author: Jeremy Lates
 * Date: 04-27-2024
 * Description: gpa component
 * Notes:
 * Code Adapted from https://github.com/buwebdev/web-425/blob/master/week-6/gpa-calculator-app2/src/app/gpa/gpa.component.ts
 */

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gpa',
  templateUrl: './gpa.component.html',
  styleUrls: ['./gpa.component.css'],
})
export class GpaComponent implements OnInit {
  @Input() gpaTotal: number;

  constructor() {}

  ngOnInit(): void {}
}
