import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent{

  heroes:string[]=['Spiderman','Ironman','Wolverine','Flash','thor']
  borrados:string[]=[]

  borrarHeroe(indice:number){
    const heroesBorrado=this.heroes.splice(indice,1)
    this.borrados.push(...heroesBorrado)
  }
  
}
