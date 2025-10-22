(() => {
    class Avenger {

        static staticVariable: string = "Hola mundo";

        get nameGetter() {
            return this.name;
        }

        

        public nameSetter(value: string): string {
            this.name = value;
            return this.name;
        }
        constructor(private name: string = "", public team: string = "", public realName?: string ) {

        }
    }
    const antman = new Avenger("Antman", "Avengers", "Scott Lang");
    // console.log(antman);
    antman.realName = "Scott Lang";

    // console.log(antman);
    
})();