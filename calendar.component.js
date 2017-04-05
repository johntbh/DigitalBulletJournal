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
var moment = require('moment/moment');
var dialog_component_1 = require('./dialog.component');
var picker_service_1 = require('./picker.service');
var DatePanelComponent = (function () {
    function DatePanelComponent(service) {
        this.service = service;
        this.onCancelDialog = new core_1.EventEmitter();
        this.onConfirm = new core_1.EventEmitter();
        this.yearList = [];
    }
    DatePanelComponent.prototype.ngOnInit = function () {
        this.locale = this.service.dtLocale;
        this.theme = this.service.dtTheme;
        this.dialogType = this.service.dtDialogType;
        this.mode = this.service.dtMode;
        // set moment locale (default is en)
        moment.locale(this.locale);
        // set week days name array
        this.dayNames = moment.weekdaysShort(true);
        // set month name array
        this.monthList = moment.monthsShort();
        this.now = moment();
        this.moment = this.service.moment;
        this.generateCalendar();
    };
    DatePanelComponent.prototype.prevMonth = function () {
        this.moment = this.moment.clone().subtract(1, 'M');
        this.generateCalendar();
    };
    DatePanelComponent.prototype.nextMonth = function () {
        this.moment = this.moment.clone().add(1, 'M');
        this.generateCalendar();
    };
    DatePanelComponent.prototype.selectMonth = function (month) {
        this.moment = this.moment.clone().month(month);
        this.generateCalendar();
        this.toggleDialogType(dialog_component_1.DialogType.Month);
        return;
    };
    DatePanelComponent.prototype.selectYear = function (year) {
        this.moment = this.moment.clone().year(year);
        this.generateCalendar();
        this.toggleDialogType(dialog_component_1.DialogType.Year);
        return;
    };
    DatePanelComponent.prototype.toggleDialogType = function (type) {
        if (this.dialogType === type) {
            this.dialogType = dialog_component_1.DialogType.Date;
            return;
        }
        this.dialogType = type;
        if (type === dialog_component_1.DialogType.Year) {
            this.generateYearList();
        }
        return;
    };
    DatePanelComponent.prototype.generateYearList = function (param) {
        var start;
        if (param === 'prev') {
            start = this.yearList[0] - 9;
        }
        else if (param === 'next') {
            start = this.yearList[8] + 1;
        }
        else {
            start = +this.moment.clone().subtract(4, 'y').format('YYYY');
        }
        for (var i = 0; i < 9; i++) {
            this.yearList[i] = start + i;
        }
        return;
    };
    DatePanelComponent.prototype.select = function (moment) {
        if (this.selectedMoment &&
            this.selectedMoment.clone().startOf('date') === moment) {
            return;
        }
        if (moment.year() !== this.moment.year() ||
            moment.month() !== this.moment.month()) {
            this.moment = moment.clone();
            this.generateCalendar();
        }
        this.service.setDate(moment);
    };
    DatePanelComponent.prototype.selectToday = function () {
        var moment = this.moment.clone()
            .year(this.now.year())
            .month(this.now.month())
            .dayOfYear(this.now.dayOfYear());
        this.service.setDate(moment);
    };
    DatePanelComponent.prototype.cancelDialog = function () {
        this.onCancelDialog.emit(true);
        return;
    };
    DatePanelComponent.prototype.confirm = function () {
        this.onConfirm.emit(true);
        return;
    };
    DatePanelComponent.prototype.generateCalendar = function () {
        this.calendarDays = [];
        var start = 0 - (this.moment.clone().startOf('month').day() + (7 - moment.localeData().firstDayOfWeek())) % 7;
        var end = 41 + start; // iterator ending point
        for (var i = start; i <= end; i += 1) {
            var day = this.moment.clone().startOf('month').add(i, 'days');
            this.calendarDays.push(day);
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DatePanelComponent.prototype, "selectedMoment", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], DatePanelComponent.prototype, "onCancelDialog", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], DatePanelComponent.prototype, "onConfirm", void 0);
    DatePanelComponent = __decorate([
        core_1.Component({
            selector: 'dialog-date-panel',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            templateUrl: './date-panel.component.html',
            styleUrls: ['./date-panel.component.scss'],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof picker_service_1.PickerService !== 'undefined' && picker_service_1.PickerService) === 'function' && _a) || Object])
    ], DatePanelComponent);
    return DatePanelComponent;
    var _a;
}());
exports.DatePanelComponent = DatePanelComponent;
//# sourceMappingURL=calendar.component.js.map