import React from 'react'
import './NuestroProyecto.css'
import icono_salud from './imagenes/icono_salud.png'
import icono_produccion from './imagenes/icono_produccion.png'
import icono_inovacion from './imagenes/icono_inovacion.png'

function NuestroProyecto() {
  return (
    <div className='our_project_seccion'>

    <h1 className='our-project-titulo'>Nuestro Projecto</h1>

    <div className='our-project-box'>
        <div className='our-project-seccion-individual'>
            <img src="https://observatorio.tec.mx/wp-content/uploads/2020/08/DiseC3B1arunlaboratoriovirtualparaelanC3A1lisisdecircuitoselectrC3B3nicos.jpg" className='our-project-imagen' />
        </div>
        <div className='separacion_texto'>
            <p className='our-project-texto'>Se sabe que un alto porcentaje de humedad en el líquido de los frenos tiene que ser un tema de preocupación, ya que reduce la presión dentro del sistema y perjudica su rendimiento. Asimismo, con altas temperaturas, los frenos son propensos a sufrir sobrecalentamiento debido al rozamiento contra el disco de frenado. Debido a esto, el riesgo de sufrir un accidente al manejar es mayor cuando estas variables fuera del control del conductor incrementan.</p>
            <p className='our-project-texto'>Se calcula que llegando a los 600-700 grados Celsius existe un sobrecalentamiento en los frenos, por lo tanto, nuestro producto está diseñado con la seguridad del cliente en mente y proporcionar una señal que indique cuando se hayan alcanzado dichas temperaturas o un porcentaje de humedad alto.</p>
        </div>
    </div>

    <div className='seccion_vision_objetivo'>
        <div className='vision_objetivo'>
            <div className='seccion_vision'>
                <h2 className='seccion_objetivo_h2'>Vision</h2>
                <p className='seccion_objetivo_texto'>CharlieCorp tiene como visión expandir este proyecto para proveer nuevos mecanismos de una mejor seguridad para el cliente. Un sistema de alarma es considerado como una adición próxima de nuestro producto. Con esto, deseamos alcanzar que el usuario pueda tener aún más información sobre su seguridad al volante.</p>
            </div>
            <div className="vertical"></div>
            <div className='seccion_objetivo'>
                <h2 className='seccion_objetivo_h2'>Misión</h2>
                <p className='seccion_objetivo_texto'>Lo que nos inspiró para crear esta empresa fue la necesidad de que los conductores de automóviles no cuentan con la suficiente información sobre su sistema de frenado, ya que este tiende a variar dependiendo de las condiciones del ambiente. Con “AutoCoooling”, lo que buscamos es cubrir esa necesidad, ya que contamos con una señal que nos da información sobre la temperatura apropiada o inapropiada del sistema de frenado.</p>
            </div>
        </div>
    </div>

    <div className='seccion_objetivos_ods'>
        <h2 className='seccion_titulo'>Objetivos De Desarrollo sostenible</h2>
        <img className='imagen_objetivos' src='https://blog.creci.co/wp-content/uploads/2022/03/ODS-Rueda-con-Nombres.png' />
   
        <div className='objetivos_row'>
            <div className='objetivos_individual'>
                <h3 className='objetivos_individual_titulo'>3. Salud y Bienestar</h3>
                <img className='objetivos_individual_icono espacio_icono' src={icono_salud} />
                <p className='objetivos_individual_texto'>Nuestro objetivo principal siempre será brindarle información al cliente para que esté más consciente de su nivel de seguridad dentro de un vehículo, haciendo una prioridad su bienestar.</p>
            </div>
            <div className='objetivos_individual_dos'>
                <h3 className='objetivos_individual_titulo'>9. Industria Innovacion e Infraestructura</h3>
                <img className='objetivos_individual_icono' src={icono_inovacion} />
                <p className='objetivos_individual_texto'>Promoción de la innovación en la búsqueda de nuevos mecanismos que garanticen cada vez más la seguridad del conductor. Estos mecanismos tienen que dar outputs claros y concisos sobre el mensaje que se quiere transmitir.</p>
            </div>
            <div className='objetivos_individual_tres'>
                <h3 className='objetivos_individual_titulo'>12. Produccion y consumo responsables</h3>
                <img className='objetivos_individual_icono' src={icono_produccion} />
                <p className='objetivos_individual_texto'>El NodeMCU ESP8266 es el componente principal de nuestro sistema, el cual es conocido por ser de un bajo costo, con una placa de un tamaño pequeño que consume poca energía, y se asegura que la energía de ésta es rápida con un alto nivel de procesamiento.</p>
            </div>
        </div>
    </div>

</div>
  )
}

export default NuestroProyecto