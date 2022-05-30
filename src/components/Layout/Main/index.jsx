import React from 'react';
import AsideCard from '../../UI/AsideCard';
import Card from '../../UI/Card';
import ListItem from '../../UI/ListItem';

const Main = () => {
	return (
		<main>
            <div className='main'>
                <p className='main__searches'>Cerca de 8,620,000 resultados (0.44 segundos)</p>
                <Card
                    link={'https://es.wikipedia.org › wiki › Linus_Torvalds'}
                    title={'Linus Torvalds - Wikipedia, la enciclopedia libre'}
                    description={`
                    Linus Torvalds · Universidad de Helsinki (1992-1996) · Transmeta (1997-2003) · Open Source Development Labs (2003-2007) · Fundación Linux (desde 2007) Ver y ...
                    Conocido por: crear el núcleo Linux, Git‎
                    Nacionalidad: finés estadounidense​
                    Nombre de nacimiento: Torvalds Benedict Linus
                    Obras notables: núcleo Linux; ‎git
                    `}
                    tags={['Vida privada','controversias','Reconocimiento']}
                    img={'/src/assets/imgs/Imagen_1.jpg'}
                />
                <div style={{marginLeft:'20px'}}>
                    <Card
                        link={'https://en.wikipedia.org › wiki › Li...'}
                        title={'Linus Torvalds - Wikipedia'}
                        description={`
                        Linus Torvalds ; Finnish (by birth) American (naturalized) · University of Helsinki (M.S.) · Software engineer · Linux Foundation.
                        Employer: Linux Foundation
                        Known for: Linux, ‎Git‎, ‎Subsurface‎
                        Nationality: Finnish (by birth); American (natur...
                        Alma mater: University of Helsinki (M.S.)‎
                        `}
                        img={'/src/assets/imgs/imagen_2.jpeg'}
                    />
                </div>
                <ListItem title={'Preguntas relacionadas'} 
                items={
                    [
                    '¿Cuál fue el aporte de Linus Torvalds?',
                    '¿Qué es un Linus Torvalds?',
                    '¿Que creo exactamente Linus Torvalds en 1991 en relación a Linux?',
                    '¿Qué sistema operativo invento Linus Torvalds?'
                    ]
                    } />
            </div>
            <div className='main__aside'>
                <AsideCard />
            </div>
		</main>
	);
};

export default Main;
