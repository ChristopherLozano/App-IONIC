import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] =[
    {
      icon: 'baseball-outline',
      name: 'Action Sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'alarm-outline',
      name: 'Alert',
      redirectTo: '/alert'
    },
  ];

  ngOnInit() {
  }

  items = [];  
  numTimesLeft = 5;  
  constructor() {  
    this.addMoreItems();  
  }  
  loadData(event) {  
    setTimeout(() => {  
      console.log('Done');  
      this.addMoreItems();  
      this.numTimesLeft -= 1;  
      event.target.complete();  
    }, 500);  
  }  
  addMoreItems() {  
    for (let i = 0; i < 20; i++) {  
      this.items.push(i);  
    }  
  }  

}

interface Componente {
  icon: string,
  name: string,
  redirectTo: string
}
