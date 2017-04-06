"use strict";
var FuturLog = (function () {
    function FuturLog() {
    }
    FuturLog.prototype.construct = function (signifiers, date, entree) {
        if (signifiers === void 0) { signifiers = ''; }
        if (date === void 0) { date = ''; }
        if (entree === void 0) { entree = ''; }
        this.signifiers = signifiers;
        this.date = date;
        this.entree = entree;
    };
    return FuturLog;
}());
exports.FuturLog = FuturLog;
//# sourceMappingURL=futurlog.js.map