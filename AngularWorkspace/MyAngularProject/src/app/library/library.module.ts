import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test/test.component';
import { TestPipe } from './mypipes/test.pipe';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [/*declare components and pipes to use in library component */
    TestComponent, TestPipe
  ],
  imports: [
    CommonModule,MatButtonModule
  ],
  exports:[
    TestComponent,TestPipe
  ]
})
export class LibraryModule { }
