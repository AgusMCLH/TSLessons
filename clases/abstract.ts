(() => {
    abstract class Mutant {
        constructor( public name: string, public team: string, public realName?: string ) {
            // console.log('Mutante creado: ', name);
        }
    }
    class Xmen extends Mutant {
        salvarMundo() {
            return 'Mundo salvado!';
        }
    }  
    class Villain extends Mutant {
        conquistarMundo() {
            return 'Mundo conquistado!';
        }
    }
    const wolverine = new Xmen( 'Logan', 'X-Men', 'James Howlett' );
    const magneto = new Villain( 'Magnus', 'Brotherhood', 'Erik Lehnsherr' );
    const getRealName = ( mutant: Mutant ) => {
        // console.log( mutant.realName );
    }
    getRealName( wolverine );
    getRealName( magneto );
    // console.log( wolverine.salvarMundo() );
    // console.log( magneto.conquistarMundo() );
})();

// Las funciones Abstractas solo sirven como "molde" para las clases que herederas o para usarlas como tipo en una funcion.