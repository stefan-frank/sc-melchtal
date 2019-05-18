import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, MatProgressSpinnerModule, MatRadioModule,
  MatSelectModule, MatSnackBarModule, MatSortModule, MatTableModule,
  MatTabsModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatTabsModule,
    MatSelectModule,
    MatIconModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatRadioModule,
    MatSnackBarModule,
    MatProgressSpinnerModule
  ],
  exports: [
    MatButtonModule,
    MatTabsModule,
    MatSelectModule,
    MatIconModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatRadioModule,
    MatSnackBarModule,
    MatProgressSpinnerModule
  ]
})
export class MaterialModule {

}
