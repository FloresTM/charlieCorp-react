import React from 'react'
import './Home.css'
import imagen_freno from './imagenes/brakes-drawings.png'
import imagen_freno_sombra from './imagenes/brakes-drawings_dos.png'
import imagen_cliente from './imagenes/the-little-things-working.png'
import profe_eberth from './imagenes/profe_eberth.jpg'
import profe_alejandro from './imagenes/profe_alejandro.jpg'
import profe_rodrigo from './imagenes/profe_rodrigo.jpg'
import profe_pedro from './imagenes/pedro_profe.jpg'
import foto_charlie from './imagenes/foto_charlie_dos.jpg'
import foto_sebastian from './imagenes/foto_sebastian.jpg'
import imagen_iot_uno from './imagenes/iot_imagen_uno.PNG'
import imagen_iot_2 from './imagenes/imagen_iot2.PNG'
import imagen_iot_3 from './imagenes/imagen_iot3.PNG'
import imagen_iot_4 from './imagenes/imagen_iot4.PNG'

function Home() {
  return (
    <div>
        <div className='cover'>
          <div className='cover_izquierda'>
            <img className='imagen_cover' src={imagen_freno} />
          </div>

          <div className='cover_derecha'>
            <div className='cover_derecha_derecha'>
              <a href='/login'><button className='log_in_cover'>Log-In</button></a>
              <h2 className='nombre_empresa_cover'>Charlie<span className='niva_light'>Corp</span></h2>
            </div>

            <div className='cover_derecha_izquierda'>
              <h1 className='titulo_proeycto_cover'>AUTOCooling</h1>
              <h3 className='lema_proyecto'>Cuida tus frenos, cuida tu vida</h3>
            </div>
          </div>
        </div>
        

        <div className='seccion_personas_involucradas'>
          <h2 className='seccion_titulo'>Personas Involucradas</h2>
          <div className='personas_involucradas_row'>

            <div className='personas_involucradas_individual'>
              <div className='seccion_foto'>
                <img className='personas_involucradas_icono' src={profe_alejandro} />
              </div>
                <div className='seccion_texto'>
                  <h4 className='nombre_profesor'>Dr. Alejandro Aragón Zavala</h4>
                  <p className='modulo_profesor'>Profesor del Módulo 1: Sistemas Digitales</p>
                </div>
            </div>

            <div className='personas_involucradas_individual'>
              <div className='seccion_foto'>
                <img className='personas_involucradas_icono' src={profe_eberth} />
              </div>
                <div className='seccion_texto'>
                  <h4 className='nombre_profesor'>Eberth Manjarrez Quintanilla</h4>
                  <p className='modulo_profesor'>Profesor del módulo 2: Bases de datos</p>
                </div>
            </div>

            <div className='personas_involucradas_individual'>
              <div className='seccion_foto'>
                <img className='personas_involucradas_icono' src={profe_rodrigo} />
              </div>
                <div className='seccion_texto'>
                  <h4 className='nombre_profesor'>Rodrigo Sánchez Luna</h4>
                  <p className='modulo_profesor'>Profesor del módulo 3: Interfaz de Usuario</p>
                </div>
            </div>

            <div className='personas_involucradas_individual'>
              <div className='seccion_foto'>
                <img className='personas_involucradas_icono' src={profe_pedro} />
              </div>
                <div className='seccion_texto'>
                  <h4 className='nombre_profesor'>Pedro Najera García</h4>
                  <p className='modulo_profesor'>Profesor de Reto</p>
                  <img src='' />
                </div>
            </div>

          </div>
        </div>

        {/*cambio seccion*/}

        <div className='seccion_equipo'>
          <h2 className='seccion_titulo_blanco'>Miembros del Equipo</h2>

          <div className='equipo_tarjetas_row'>
            <div className='equipo_tarjetas_individual'>
              <div className='equipo_tarjetas_seccion_foto'>
                <img className='personas_involucradas_icono_dos' src={foto_charlie} />
              </div>
              <div className='equipo_tarjetas_seccion_texto'>
                <h4 className='equipo_tarjetas_nombre'>Carlos Eduardo Velasco</h4>
                <p className='equipo_tarjetas_matricula'>A01708634</p>
                <p className='equipo_tarjetas_rol'>Circuito & Base de Datos</p>
              </div>
            </div>
            {/* Diferentes tarjetas */}
            <div className='equipo_tarjetas_individual'>
              <div className='equipo_tarjetas_seccion_foto'>
                <img className='personas_involucradas_icono_dos' src={foto_sebastian} />
              </div>
              <div className='equipo_tarjetas_seccion_texto'>
                <h4 className='equipo_tarjetas_nombre'>Sebastian Flores Lemus</h4>
                <p className='equipo_tarjetas_matricula'>A01709229</p>
                <p className='equipo_tarjetas_rol'>Fullstack Developer</p>
              </div>
            </div>
          </div>
          {/* Se acaba rol */}
          <button className='miembros_equipo_boton'>Conoce Mas</button>
          <p>.</p>
        </div>
        {/* Se acaba seccion */}

        <div className='sobre_proyecto_seccion'>
          <h2 className='seccion_titulo'>Sobre El Proyecto</h2>
          <img src='' />
          <div className='sobre_proyecto_row_contenido'>
            <div className='sobre_proyecto_imagenes_izquierda'>
              <img src='' />
              <img className='imagen_sobre_proyecto' src={imagen_freno_sombra} />
            </div>

            <div className='sobre_proyecto_derecha'>
              <p className='sobre_proyecto_texto'>Durante la lluvia de ideas inicial para determinar el enfoque de nuestro proyecto, muchas propuestas se trajeron a la mesa que brindaron diversas soluciones a diferentes problemas de la sociedad actual. Finalmente, nos decidimos por mejorar la seguridad de los conductores de vehículos, ya que descubrimos que uno de los motivos más grandes de los accidentes automovilísticos suceden debido a un fallo en los frenos de los vehículos.</p>
              <p className='sobre_proyecto_texto'>Con esto en mente, nuestro objetivo es brindar un sistema que mida la temperatura y humedad de los frenos de un vehículo, y que éste señalize cuando los rangos de temperatura se han excedido o rebajado, signficando una alerta para el usuario que tenga cuidado que los frenos no van a reaccionar de la misma manera.</p>
              <p className='sobre_proyecto_texto'>Esta solución busca mejorar la seguridad del conductor y de los pasajeros a la hora de estar abordo de un vehículo.</p>

            <button className='sobre_proyecto_boton'>Conoce Mas</button>
            </div>
          </div>
          {/* no se en donde va */}
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff07c" fill-opacity="1" d="M0,32L48,48C96,64,192,96,288,106.7C384,117,480,107,576,90.7C672,75,768,53,864,74.7C960,96,1056,160,1152,181.3C1248,203,1344,181,1392,170.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
          {/* se acaba seccion */}

        <div className='seccion_iot'>
          <h2 className='seccion_titulo espacio'>¿Que es IOT?</h2>
          <div className='iot_row_uno'>
            <img className='iot_iconos' src={imagen_iot_uno} />
            <img className='iot_monitor' src={imagen_iot_4} />
          </div>
          <div className='iot_row_dos'>
            <img className='iot_monitor' src={imagen_iot_3} />
            <img className='iot_iconos' src={imagen_iot_2} />
          </div>
        </div>

        {/* se acaba seccion */}
        <div className='seccion_material_necesitado'>
          <h2 className='seccion_titulo'>Material Necesitado</h2>

          <div className='material_necesitado_row'>
            <div className='material_necesitado_individual_imagen'>
              <img className='material_necesitado_imagen_uno' src='https://images.squarespace-cdn.com/content/v1/59b037304c0dbfb092fbe894/1573230009361-8KRM4G2CWI9FS4AQPL2J/nodemcu_front_side.JPG' />
            </div>
            <div className='material_necesitado_individual_texto'>
              <h4 className='material_necesitado_subtitulo'>Node MCU</h4>
              <p className='material_necesitado_texto'>Es una placa de desarrollo con firmware NodeMCU conformado por un modulo de WiFi. Es altamente conocido globalmente por su relativamente sencillo para conectar dispositivos utilizano el internet de las cosas. Desde su inicio desarrollo utilizando el ESP8266 SDK, soporta Conexciones como GPIO, PWM, IIC, 1-Wire y ADC sin necesidad adicional de un microcontrolador </p>
            </div>
          </div>

          <div className='material_necesitado_row'>
            <div className='material_necesitado_individual_texto'>
              <h4 className='material_necesitado_subtitulo'>Sensor DHT11</h4>
              <p className='material_necesitado_texto'>El sensor de temperatura y de humedad DHT11 es una unidad avanzada sensorial que da como salida una señal Calibrada digitalizada. Es altamente confiable y puede durar operando por largos periodos de tiempo. Mide temperaturas entre 0 y 50 grados celsius con un margen de 2 grados celsius de error.</p>
            </div>
            <div className='material_necesitado_individual_imagen'>
              <img className='material_necesitado_imagen_dos' src='https://i.ytimg.com/vi/bJFvmG5IlSA/maxresdefault.jpg' />
            </div>
          </div>

          {/* prueba */}

        </div>
        {/* se acaba seccion */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff07c" fill-opacity="1" d="M0,96L480,160L960,64L1440,160L1440,320L960,320L480,320L0,320Z"></path></svg>
        <div className='seccion_cliente'>
          <h2 className='seccion_titulo'>Cliente</h2>
          <div className='cliente_row'>
            <p className='seccion_cliente_texto'>El público dirigido es a todas las personas que cuentan con un vehículo, pero más que nada a conductores de automóviles. Esto se hizo en mente para coches debido a que normalmente las cuestiones ambientales tienen mucho que ver con el desempeño de los frenos. Ya sea que sea un día caluroso o esté lloviendo, la medición de la temperatura y humedad de los frenos es sumamente importante para la seguirdad del conductor.</p>

            <img className='seccion_imagen_cliente' src={imagen_cliente} />
          </div>
          <img src='' />
        </div>

    </div>
  )
}

export default Home