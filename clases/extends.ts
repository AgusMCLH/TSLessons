(() => {
    class Avenger {
        constructor( public name: string, public team: string, public realName?: string ) {
            console.log('Avanger creado: ', name);
        }
        private getFullName() {
            return `${ this.name } (${ this.realName })`;
        }
    }

    class Mutant extends Avenger {
        constructor( name: string, team: string, realName: string, public power: string ) {
            super( name, team, realName );
            console.log('Mutante creado: ', name);
        }
    }
    const wolverine = new Mutant( 'Logan', 'X-Men', 'James Howlett', 'Regeneración' );
    console.log( wolverine );
})();