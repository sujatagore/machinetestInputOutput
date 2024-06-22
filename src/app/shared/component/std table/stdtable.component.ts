import { Component, Input } from "@angular/core";
import { IStd } from "../../module/data.interface";

@Component({
    selector : 'app-stdTable',
    templateUrl : './stdtable.component.html',
    styleUrls : ['./stdtable.component.scss']
})

export class StdTableComponent{
    @Input() stdArr : Array<IStd> = [
        // {
        //     "fname": "ddsdsf",
        //     "lname": "sdfsd",
        //     "email": "jD@gmail.com",
        //     "contact": "1456486213",
        //     "gender": "Male"
        // }
     ]
}