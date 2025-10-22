(() => {
    class Avenger {
        constructor( public name: string, public team: string, public realName?: string ) {
            // console.log('Avanger creado: ', name);
        }
        private getFullName() {
            return `${ this.name } (${ this.realName })`;
        }
    }
    
    class Mutant extends Avenger {
        constructor( name: string, team: string, realName: string, public power: string ) {
            super( name, team, realName );
            // console.log('Mutante creado: ', name);
        }
    }
    class Xmen extends Mutant {
        salvarMundo() {
            return 'Mundo salvado!';
        }
    }
    const Ironman = new Avenger( 'Ironman', 'Avengers', 'Tony Stark' );
    const wolverine = new Xmen( 'Logan', 'X-Men', 'James Howlett', 'Regeneración' );
    const cyclops = new Mutant( 'Cíclope', 'X-Men', 'Scott Summers', 'Rayos Ópticos' );
    // console.log( wolverine, cyclops, Ironman );
})();