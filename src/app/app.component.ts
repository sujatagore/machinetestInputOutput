import { Component } from '@angular/core';
import { IStd, ITodoItem } from './shared/module/data.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'machinetestInputOutput';

  todoArray : Array<ITodoItem> = [
    // {
    //   todo : 'js'
    // }
  ]

  getTodo(todo : ITodoItem){
    this.todoArray.push(todo)
  }

  dataArr : Array<IStd> = [
    //   {
    //     "fname": "Jhon",
    //     "lname": "Doe",
    //     "email": "jD@gmail.com",
    //     "contact": "1456486213",
    //     "secQue": "favBook",
    //     "ans": "good book",
    //     "isAcc": true,
    //     "gender": "Male"
    // }
  ]

  getStd(s : IStd){
    this.dataArr.push(s)
  }
}
