import React from 'react'
import './QuienesSomos.css';
import iconInsta from "./imagenes/instagram-logo-white-on-black.png"
import foto_charlie from './imagenes/foto_charlie_dos.jpg'
import foto_sebastian from './imagenes/foto_sebastian.jpg'

function quienesSomos() {
  return (
    <div className='quienes-somos'>
        <h1 className="h1_quienes-somos">Our Team</h1>

            <div class="slide-content">
                    <div className="card">
                        <div class="image-content">
                            <span class="overlay"></span>

                            <div className="card-image">
                                <img src={foto_charlie} alt="" class="card-img" />
                            </div>
                        </div>


                        <div class="card-content">
                            <h2 class="name">Carlos Eduardo Velasco Elenes</h2>
                            <p class="description">Actualmente soy estudiante universitario en el Tecnológico de Monterrey Campus Querétaro de la carrera de Ingeniería en Tecnologías Computacionales.
Soy una persona muy dedicada y persistente, especialmente en las áreas de la vida que me interesan, como la programación y el desarrollo de software.</p>
                            <p class="description">Siempre tengo una mente de principiante con todo, lo que me permite seguir aprendiendo cada momento de otras personas y del mundo porque creo que todos los días tienes la oportunidad de pensar abiertamente y ampliar tu perspectiva.</p>

                            <div className='redes'>
                                <a href="https://www.linkedin.com/in/carlos-velasco-502947220/" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/145/145807.png" className='imagen-redes' /></a>
                                <a href="https://instagram.com/charlesvelaa?igshid=YmMyMTA2M2Y=" target="_blank"><img src={iconInsta} className='imagen-redes2' /></a>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="image-content">
                            <span class="overlay"></span>

                            <div class="card-image">
                                <img src={foto_sebastian} alt="" class="card-img" />
                            </div>
                        </div>

                        <div class="card-content">
                            <h2 class="name">Sebastian Armando Flores Lemus</h2>
                            <p class="description">Soy un estudiante del Tecnológico de Monterrey Campus Querétaro de la carrera de Ingeniería en Tecnologías Computacionales. El área de la carrera que mas me interesa es sin duda el front end. He tenido la posibilidad de trabajar en multiples proyectos personales y con clientes para desarrollar páginas personalizadas</p><p class="description">Actualmente sigo aprendiendo nuevas tecnologías que me permiten mejorar la calidad de mis trabajos y poder añadir mas funcionalidades</p>

                            <div className='redes'>
                                <a href="https://www.linkedin.com/in/sebasti%C3%A1n-armando-flores-lemus-66530324b/" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/145/145807.png" className='imagen-redes' /></a>
                                <a href="https://instagram.com/seb.flores02?igshid=YmMyMTA2M2Y=" target="_blank"><img src={iconInsta} className='imagen-redes2' /></a>
                            </div>

                        </div>
                    </div>
            </div>

    </div>
  )
}

export default quienesSomos