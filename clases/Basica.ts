(() => {
    class Avenger {
        private name: string;
        public team: string;
        public realName: string;
        public nameSetter(value: string) {
            this.name = value;
        }
        constructor(name: string = "", team: string = "", realName?: string ) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
    }
    const antman = new Avenger("Antman", "Avengers", "Scott Lang");
    console.log(antman);
    antman.realName = "Scott Lang";

    console.log(antman);
    
})();