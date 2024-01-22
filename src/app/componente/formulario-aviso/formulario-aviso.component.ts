import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-formulario-aviso',
  templateUrl: './formulario-aviso.component.html',
  styleUrls: ['./formulario-aviso.component.scss'],
  standalone: true,
  imports:[CommonModule, FormsModule,IonicModule]
})
export class FormularioAvisoComponent  implements OnInit {

  avisoStr:string = ""
  @Output() onCreate = new EventEmitter<string>()

  constructor() { }

  ngOnInit() {}

  onClick(){
    this.onCreate.emit(this.avisoStr)
  }

}
