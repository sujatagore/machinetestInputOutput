import { Component, EventEmitter, Output, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ITodoItem } from "../../module/data.interface";


@Component({
    selector : 'app-todoForm',
    templateUrl : './todoform.component.html',
    styleUrls : ['./todoform.component.scss']
})

export class TodoFormComponent{

    @Output() emitTodo : EventEmitter<ITodoItem> = new EventEmitter<ITodoItem>()
    @ViewChild('todoItem') todoItemRef !: NgForm

    OnAddTodo(){
        if (this.todoItemRef.valid) {
            let newTodo = this.todoItemRef.value
            this.emitTodo.emit(newTodo)
            this.todoItemRef.reset()
            console.log(newTodo)
        }
    }
}