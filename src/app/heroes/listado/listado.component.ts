import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  
  heroes: string[] = ['Eve', 'Paco', 'Gladi', 'Yoli'];
  heroeBorrado: string = '';
  
  borrarHeroe() {
    console.log('Borrando...');
    this.heroeBorrado = this.heroes.shift() || '';
  }

  
}
