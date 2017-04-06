"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var DailyLogComponent = (function () {
    function DailyLogComponent() {
        this.listeEntree = ['Eat Breakfeast Daily', 'Feed MAmadou, the cow', 'Sit Down', 'Eat lunch', 'Call mom',
            'Tweet about feeding my cow, pugsly', 'Join a hangout in google+', 'Prepare Dinner',
            'Eat Dinner', 'Get ready for bed', 'Go to bed'];
    }
    DailyLogComponent.prototype.ajoutEntree = function (nouvelleEntree) {
        console.log(nouvelleEntree);
        this.listeEntree.push(nouvelleEntree);
    };
    DailyLogComponent.prototype.supprimmerEntree = function (entree) {
        this.listeEntree.splice(this.listeEntree.indexOf(entree), 1);
    };
    return DailyLogComponent;
}());
DailyLogComponent = __decorate([
    core_1.Component({
        selector: 'my-dailylog',
        templateUrl: 'dailylog.component.html',
        styleUrls: ['dailylog.component.css'],
        moduleId: module.id
    })
], DailyLogComponent);
exports.DailyLogComponent = DailyLogComponent;
//# sourceMappingURL=dailylog.component.js.map