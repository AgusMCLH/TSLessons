(() => {

    class apocalipsis {
        static instancia: apocalipsis;

        private constructor( public nombre:string ) {
            // console.log('Apocalipsis creado: ', nombre);
        }

        static llamarInstancia(nombre?:string ): apocalipsis {
            if ( !apocalipsis.instancia ) {
                apocalipsis.instancia = new apocalipsis( nombre || 'En Sabah Nur' );
            }
            return apocalipsis.instancia;
        }

    }


    const apocalipsisX = apocalipsis.llamarInstancia( 'Apocalipsis' );
    const apocalipsisY = apocalipsis.llamarInstancia('Otro nombre');
    console.log(apocalipsisX);
    console.log(apocalipsisY);
    
})();

//Sirve para sigleton... mas que nada...