import { Component, Input, OnInit } from '@angular/core';
import { Aviso } from 'src/app/modelo/avisos';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AvisosService } from 'src/app/servicio/avisos.service';
import { format } from 'date-fns';

@Component({
  selector: 'app-lista-avisos',
  templateUrl: './lista-avisos.component.html',
  styleUrls: ['./lista-avisos.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class ListaAvisosComponent implements OnInit {

  fechaActual:string
  @Input() aviso: Aviso[] = []

  constructor(
    private avisosService: AvisosService
  ) {
  this.fechaActual = format(new Date(), 'dd/MM/yyyy');
  }

  ngOnInit() { }

  async ionViewWillEnter() {
    this.aviso = await this.avisosService.mostrarAvisos()
  }

  borrarAviso(ID: number) {
    this.avisosService.borrarAviso(ID)
    this.ionViewWillEnter()
    // this.mensajeList()
  }

}
