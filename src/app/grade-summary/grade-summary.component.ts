/**
 * Title: grade-summary.component.ts
 * Author: Jeremy Lates
 * Date: 04-27-2024
 * Description: grade-summary component
 * Notes:
 * Code Adapted from https://github.com/buwebdev/web-425/blob/master/week-6/gpa-calculator-app2/src/app/grade-summary/grade-summary.component.ts
 */

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grade-summary',
  templateUrl: './grade-summary.component.html',
  styleUrls: ['./grade-summary.component.css'],
})
export class GradeSummaryComponent implements OnInit {
  @Input() grade: string;
  @Input() course: string;

  constructor() {}

  ngOnInit(): void {}
}
