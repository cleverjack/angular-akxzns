import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddTodo } from './modals/add/add.component';

interface Todo {
  name: string;
  status: boolean;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  todos: Todo[] = [];

  constructor(public dialog: MatDialog) {

  }

  addTodo() {
    const dialogRef = this.dialog.open(AddTodo, {
      width: '250px',
      data: {name: '', status: false},
    });

    dialogRef.afterClosed().subscribe(todo => {
      console.log('The dialog was closed');
      this.todos.push(todo);
    });
  }

  deleteTodo() {}

  completeTodo() {}
}
