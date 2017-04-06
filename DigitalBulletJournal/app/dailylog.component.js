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
var core_1 = require("@angular/core");
var entry_1 = require("./entry");
var entry_service_1 = require("./entry.service");
var mock_entry_1 = require("./mock-entry");
var DailyLogComponent = (function () {
    function DailyLogComponent(EntryService) {
        this.EntryService = EntryService;
        this.text_placeholder = "Texte de votre entrée";
    }
    DailyLogComponent.prototype.ngOnInit = function () {
        console.log(mock_entry_1.ENTRIES);
        this.getEntries();
    };
    DailyLogComponent.prototype.getEntries = function () {
        var _this = this;
        this.EntryService.getEntries().then(function (entries) { return _this.entries = entries; });
    };
    // TODO: Ajouter au serveur MongoDB
    DailyLogComponent.prototype.addEntry = function (text) {
        var _this = this;
        var entry = new entry_1.Entry();
        entry.text = text;
        this.EntryService.addEntry(entry).then(function (entry) {
            console.log(entry);
            _this.entries.push(entry);
        });
    };
    // TODO: Supprimer du serveur MongoDB
    DailyLogComponent.prototype.removeEntry = function (entry) {
        var _this = this;
        this.EntryService.deleteEntry(entry).then(function () {
            var index = _this.entries.indexOf(entry);
            _this.entries.splice(index, 1);
        });
    };
    return DailyLogComponent;
}());
DailyLogComponent = __decorate([
    core_1.Component({
        selector: 'my-dailylog',
        templateUrl: 'dailylog.component.html',
        styleUrls: ['dailylog.component.css'],
        moduleId: module.id,
        providers: [entry_service_1.EntryService]
    }),
    __metadata("design:paramtypes", [entry_service_1.EntryService])
], DailyLogComponent);
exports.DailyLogComponent = DailyLogComponent;
//# sourceMappingURL=dailylog.component.js.map