"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var FuturLogComponent = (function () {
    function FuturLogComponent() {
        this.avenirs = [
            { signifiers: '/app/signifiers/etoile.jpg',
                date: '02/04/2017',
                entree: 'projet jee à rendre' },
            { signifiers: '/app/signifiers/oeil.png',
                date: '25/04/2017',
                entree: 'Rapport projet'
            },
            { signifiers: '/app/signifiers/point.png',
                date: '07/07/2017',
                entree: ' Preparation soutenance projet'
            }
        ];
    }
    FuturLogComponent = __decorate([
        core_1.Component({
            selector: 'my-futurlog',
            templateUrl: 'futurlog.component.html',
            styleUrls: ['futurlog.component.css'],
            moduleId: module.id
        }), 
        __metadata('design:paramtypes', [])
    ], FuturLogComponent);
    return FuturLogComponent;
}());
exports.FuturLogComponent = FuturLogComponent;
//# sourceMappingURL=futurlog.component.js.map