import { Component, EventEmitter, Output, ViewChild } from "@angular/core";
import { IGender, IStd } from "../../module/data.interface";
import { NgForm } from "@angular/forms";


@Component({
    selector : 'app-stdForm',
    templateUrl : './stdform.component.html',
    styleUrls : ['./stdform.component.scss']
})

export class StdFormComponent{

    @Output() emitstdForm : EventEmitter<IStd> = new EventEmitter<IStd>()

    gender : Array<IGender> = [
        {
            gen : 'Male',
            id : 1
        },
        {
            gen : 'Female',
            id : 2
        }
    ]

    @ViewChild('addInfo') addInfoRef !: NgForm
    onAddInfo(){
        console.log(this.addInfoRef.value)

        if (this.addInfoRef.valid) {
            let newStd = this.addInfoRef.value
            this.emitstdForm.emit(newStd)
            this.addInfoRef.reset()
        }
    }
}