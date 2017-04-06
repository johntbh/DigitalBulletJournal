import { Component } from '@angular/core';

@Component({
    selector: 'my-dailylog',
    templateUrl: 'dailylog.component.html',
    styleUrls: ['dailylog.component.css'],
    moduleId: module.id
})
export class DailyLogComponent {

	listeEntree = ['Eat Breakfeast Daily', 'Feed MAmadou, the cow', 'Sit Down', 'Eat lunch', 'Call mom', 
				'Tweet about feeding my cow, pugsly', 'Join a hangout in google+', 'Prepare Dinner', 
				'Eat Dinner', 'Get ready for bed', 'Go to bed'];


	ajoutEntree(nouvelleEntree:string){
		console.log(nouvelleEntree);
		this.listeEntree.push(nouvelleEntree);
	}

	supprimmerEntree(entree:string){
		this.listeEntree.splice(this.listeEntree.indexOf(entree), 1);
	}

}
