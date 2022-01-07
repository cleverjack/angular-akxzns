import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { AddTodo } from './modals/add/add.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MatListModule,
    MatDialogModule,
    MatButtonModule,
  ],
  declarations: [AppComponent, HelloComponent, AddTodo],
  bootstrap: [AppComponent],
  entryComponents: [AddTodo],
})
export class AppModule {}
