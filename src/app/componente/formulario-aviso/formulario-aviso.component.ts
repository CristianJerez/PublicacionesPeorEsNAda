import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Aviso } from 'src/app/modelo/avisos';

@Component({
  selector: 'app-formulario-aviso',
  templateUrl: './formulario-aviso.component.html',
  styleUrls: ['./formulario-aviso.component.scss'],
  standalone: true,
  imports:[CommonModule, FormsModule,IonicModule]
})
export class FormularioAvisoComponent  implements OnInit {

  tituloStr:string = ""
  fotoStr:string = ""
  descripcionStr:string = ""
  @Output() onCreate = new EventEmitter<Aviso>()

  constructor() { }

  ngOnInit() {}

  onClick(){
    var aviso:Aviso = ({ID: 1, titulo:this.tituloStr, foto:this.fotoStr, 
      descripcion:this.descripcionStr, fechaAviso: "" })
    this.onCreate.emit(aviso)
  }

}
