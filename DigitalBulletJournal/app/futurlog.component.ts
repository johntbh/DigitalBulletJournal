import { Component } from '@angular/core';

@Component({
    selector: 'my-futurlog',
    templateUrl: 'futurlog.component.html',
    styleUrls: ['futurlog.component.css'],
    moduleId: module.id
    
   })
export class FuturLogComponent{

  avenirs = [ 
   { signifiers:'/app/signifiers/etoile.jpg',
   date: '02/04/2017',
   entree: 'projet jee à rendre' },

  { signifiers: '/app/signifiers/oeil.png',
  date: '25/04/2017',
  entree: 'Rapport projet'
   },

    { signifiers:'/app/signifiers/point.png',
  date: '07/07/2017',
  entree: ' Preparation soutenance projet'
   }

   ];
   

 // Ajouter(futurlogValue){
    
         
//   }

   }

