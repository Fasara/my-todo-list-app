import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../todo-item';
import { TodoListService } from '../todo-list.service';
import {interval, Observable} from 'rxjs';

@Component({
  selector: 'app-list-manager',
  templateUrl: './list-manager.component.html',
  styleUrls: ['./list-manager.component.css']
})
export class ListManagerComponent implements OnInit {
	
	todoList: Observable<TodoItem[]>; 

  constructor(private todoListService:TodoListService) {}

  ngOnInit() {
    this.todoList = this.todoListService.getTodoList();
  }

  addItem(title: string){
    this.todoListService.addItem({ title });
  }

  removeItem(item){
    this.todoListService.deleteItem(item);
  }

  updateItem(item, changes) {
    this.todoListService.updateItem(item, changes);
  }
}

