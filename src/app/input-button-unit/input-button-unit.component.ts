import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  templateUrl: './input-button-unit.component.html',
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {

	@Output() submitItem: EventEmitter<string> = new EventEmitter();

	title = "Hello World!";

	constructor() {}

	ngOnInit() {}

	submitValue(newTitle: string) {
		if (newTitle) {
			this.submitItem.emit(newTitle);
			} else {
			alert('Value cannot be empty');
		}
	}
}
