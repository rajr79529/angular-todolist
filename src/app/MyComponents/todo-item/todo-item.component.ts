import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent {
  // this is input-decorator, used to accept props from parent
  @Input() todo: Todo;
  //creating event emitter todoDelete
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();

  //function to handle button click
  handleOnClick(todo: Todo) {
    this.todoDelete.emit(todo);
    // console.log('Button Clicked');
  }
  handleCheckboxClick(todo: Todo) {
    this.todoCheckbox.emit(todo);
  }
}
