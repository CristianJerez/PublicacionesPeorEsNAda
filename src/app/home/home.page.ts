import { Component, OnInit } from '@angular/core';
import { Aviso } from '../modelo/avisos';
import { AvisosService } from '../servicio/avisos.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AvisosComponent } from '../componente/avisos/avisos.component';
import { addIcons } from 'ionicons';
import { addOutline } from 'ionicons/icons'
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [CommonModule,FormsModule, IonicModule, AvisosComponent, RouterModule],
})
export class HomePage implements OnInit{

  avisos:Aviso[]=[]

  constructor(
    private avisosService:AvisosService
    
  ) {addIcons({addOutline})}

  async ngOnInit() {
    this.avisos = await this.avisosService.mostrarAvisos()
  }

}
