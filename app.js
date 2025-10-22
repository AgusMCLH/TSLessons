"use strict";
(function () {
    var Avenger = (function () {
        function Avenger(name, team, realName) {
            if (name === void 0) { name = ""; }
            if (team === void 0) { team = ""; }
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        Avenger.prototype.nameSetter = function (value) {
            this.name = value;
        };
        return Avenger;
    }());
    var antman = new Avenger("Antman", "Avengers", "Scott Lang");
    console.log(antman);
    antman.realName = "Scott Lang";
    console.log(antman);
})();
//# sourceMappingURL=app.js.map