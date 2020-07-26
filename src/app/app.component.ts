import { Component } from "@angular/core";
import { TodoItem } from "./todo-item";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "My to-do List App";
}
