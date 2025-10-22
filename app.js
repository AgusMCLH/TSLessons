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
    antman.realName = "Scott Lang";
})();
(function () {
    var Mutant = (function () {
        function Mutant(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        return Mutant;
    }());
    var Xmen = (function (_super) {
        __extends(Xmen, _super);
        function Xmen() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Xmen.prototype.salvarMundo = function () {
            return 'Mundo salvado!';
        };
        return Xmen;
    }(Mutant));
    var Villain = (function (_super) {
        __extends(Villain, _super);
        function Villain() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Villain.prototype.conquistarMundo = function () {
            return 'Mundo conquistado!';
        };
        return Villain;
    }(Mutant));
    var wolverine = new Xmen('Logan', 'X-Men', 'James Howlett');
    var magneto = new Villain('Magnus', 'Brotherhood', 'Erik Lehnsherr');
    var getRealName = function (mutant) {
    };
    getRealName(wolverine);
    getRealName(magneto);
})();
(function () {
    var apocalipsis = (function () {
        function apocalipsis(nombre) {
            this.nombre = nombre;
        }
        apocalipsis.llamarInstancia = function (nombre) {
            if (!apocalipsis.instancia) {
                apocalipsis.instancia = new apocalipsis(nombre || 'En Sabah Nur');
            }
            return apocalipsis.instancia;
        };
        return apocalipsis;
    }());
    var apocalipsisX = apocalipsis.llamarInstancia('Apocalipsis');
    var apocalipsisY = apocalipsis.llamarInstancia('Otro nombre');
    console.log(apocalipsisX);
    console.log(apocalipsisY);
})();
(function () {
    var Avenger = (function () {
        function Avenger(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
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
            return _this;
        }
        return Mutant;
    }(Avenger));
    var Xmen = (function (_super) {
        __extends(Xmen, _super);
        function Xmen() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Xmen.prototype.salvarMundo = function () {
            return 'Mundo salvado!';
        };
        return Xmen;
    }(Mutant));
    var Ironman = new Avenger('Ironman', 'Avengers', 'Tony Stark');
    var wolverine = new Xmen('Logan', 'X-Men', 'James Howlett', 'Regeneración');
    var cyclops = new Mutant('Cíclope', 'X-Men', 'Scott Summers', 'Rayos Ópticos');
})();
//# sourceMappingURL=app.js.map