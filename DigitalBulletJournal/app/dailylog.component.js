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
var mock_entry_1 = require('./mock-entry');
var DailyLogComponent = (function () {
    function DailyLogComponent() {
        this.text_placeholder = "Texte de votre entrée";
        this.entries = mock_entry_1.ENTRIES;
    }
    DailyLogComponent = __decorate([
        core_1.Component({
            selector: 'my-dailylog',
            templateUrl: 'dailylog.component.html',
            styleUrls: ['dailylog.component.css'],
            moduleId: module.id
        }), 
        __metadata('design:paramtypes', [])
    ], DailyLogComponent);
    return DailyLogComponent;
}());
exports.DailyLogComponent = DailyLogComponent;
//# sourceMappingURL=dailylog.component.js.map