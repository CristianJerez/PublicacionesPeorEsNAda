import { Component, Input, OnInit } from '@angular/core';
import { Aviso } from 'src/app/modelo/avisos';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-lista-avisos',
  templateUrl: './lista-avisos.component.html',
  styleUrls: ['./lista-avisos.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class ListaAvisosComponent  implements OnInit {

  @Input() aviso:Aviso[] = []

  constructor() { }

  ngOnInit() {}

}
