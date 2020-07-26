import { Injectable } from '@angular/core';
import { TodoItem } from './todo-item';
import { StorageService } from './storage.service';
import { HttpClient } from '@angular/common/http';

const todoListStorageKey = 'Todo_List';

 const defaultTodoList = [
    {title: 'install NodeJS'},
    {title: 'install Angular CLI'},
    {title: 'create new app'},
    {title: 'serve app'},
    {title: 'develop app'},
    {title: 'deploy app'}
  ];

   @Injectable({ 
    providedIn: 'root'
  })

  export class TodoListService {

   private todoList: TodoItem[];

    constructor(private storageService: StorageService,
                private http: HttpClient) { 
                this.todoList =
                storageService.getData(todoListStorageKey) || defaultTodoList;
    }

  saveList() {
    this.storageService.setData(todoListStorageKey, this.todoList);
  }
  
  getTodoList() {
    return this.todoList;
  }
  
  addItem(item: TodoItem) { 
    this.http.post('http://localhost:3000/items', item)
    .subscribe();
  }

  retrieveListFromDataBase() {
    this.http.get<TodoItem[]>('http://localhost:3000/items').subscribe(
      response => console.log(response)
    );
  }

  updateItem(item: TodoItem, changes) {
    const index = this.todoList.indexOf(item);
    this.todoList[index] = {...item, ...changes};
    this.saveList();
  }

  deleteItem(item: TodoItem) {
    const index = this.todoList.indexOf(item);
    this.todoList.splice(index, 1);
    this.saveList();
  }
}

