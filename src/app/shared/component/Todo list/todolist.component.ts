import { Component, Input } from "@angular/core";
import { ITodoItem } from "../../module/data.interface";

@Component({
    selector : 'app-todoList',
    templateUrl : './todolist.component.html',
    styleUrls : ['./todolist.component.scss']
})

export class TodoListComponent{
    @Input() todoarr : Array<ITodoItem> = []
}