import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import {RouterModule} from '@angular/router';

import { AppComponent }  from './app.component';
import { BookDetailComponent } from './book-detail.component';
import { BookComponent} from './book.component';
import { BookService} from './book.service';

@NgModule({
  imports: [ //impost array
    BrowserModule,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    RouterModule.forRoot([
      {
        path:'books',
        component: BookComponent
      }
    ])
  ],
  declarations: [
    AppComponent,
    BookDetailComponent,
    BookComponent
  ],
  providers: [ BookService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
