import React from 'react';
import Share from '../../../assets/svg/Share';

const AsideCard = () => {
	return (
		<aside>
			<div className="aside__images">
				<img src="/src/assets/imgs/imagen_cuadro-1.jfif" alt="Imagen-cuadro-1" />
				<img src="/src/assets/imgs/imagen_cuadro-2.jfif" alt="Imagen-cuadro-2" />
				<img src="/src/assets/imgs/imagen_cuadro-3.jfif" alt="Imagen-cuadro-3" />
				<img src="/src/assets/imgs/imagen_cuadro-4.jfif" alt="Imagen-cuadro-4" />
			</div>
			<div className="aside__header-info">
                <div className='aside__header--bio'>
                    <h2>Linus Torvalds</h2>
                    <p>Ingeniero de software</p>
                </div>
				<Share className='aside__icon'/>
			</div>
			<div className="aside__contenido">
				<p>
					Linus Benedict Torvalds es un ingeniero de software finlandés-estadounidense, ​ conocido por iniciar
					y mantener el desarrollo del kernel Linux, basándose en el sistema operativo libre Minix creado por
					Andrew S. Tanenbaum y en algunas herramientas, varias utilidades y los compiladores desarrollados
					por el proyecto GNU. Wikipedia Nacimiento: 28 de diciembre de 1969 (edad 52 años), Helsinki,
					Finlandia
				</p>
				<p>
                    <span>Nacimiento:</span> 28 de diciembre de 1969 (edad 52 años), Helsinki, Finlandia
				</p>
			</div>
		</aside>
	);
};

export default AsideCard;
