import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title :string = 'Cntador App';
  numero:number=10;
  base  :number=5;

  sumar(){
    this.numero+=1;
  }
  restar(){
    this.numero-=1;
  }
  acumulador( valor:number ){
    this.numero+=valor;
  }
}
