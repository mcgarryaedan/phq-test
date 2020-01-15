import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
/**
 * Base included import/exports.
 */

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, FontAwesomeModule],
  exports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, FontAwesomeModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BaseModule { }
