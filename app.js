"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(function () {
    var Avenger = (function () {
        function Avenger(name, team, realName) {
            if (name === void 0) { name = ""; }
            if (team === void 0) { team = ""; }
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        Object.defineProperty(Avenger.prototype, "nameGetter", {
            get: function () {
                return this.name;
            },
            enumerable: false,
            configurable: true
        });
        Avenger.prototype.nameSetter = function (value) {
            this.name = value;
            return this.name;
        };
        Avenger.staticVariable = "Hola mundo";
        return Avenger;
    }());
    var antman = new Avenger("Antman", "Avengers", "Scott Lang");
    console.log(antman);
    antman.realName = "Scott Lang";
    console.log(antman);
})();
(function () {
    var Avenger = (function () {
        function Avenger(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
            console.log('Avanger creado: ', name);
        }
        Avenger.prototype.getFullName = function () {
            return "".concat(this.name, " (").concat(this.realName, ")");
        };
        return Avenger;
    }());
    var Mutant = (function (_super) {
        __extends(Mutant, _super);
        function Mutant(name, team, realName, power) {
            var _this = _super.call(this, name, team, realName) || this;
            _this.power = power;
            console.log('Mutante creado: ', name);
            return _this;
        }
        return Mutant;
    }(Avenger));
    var wolverine = new Mutant('Logan', 'X-Men', 'James Howlett', 'Regeneración');
    console.log(wolverine);
})();
//# sourceMappingURL=app.js.map