import React from 'react'
import "./SiguientesPasos.css"

function SiguientesPasos() {
  return (
    <div className='seccion_siguientes_pasos'>
        <h2 className='titulo_seccion_siguientes_pasos'>Siguientes Pasos</h2>

        <div className='subseccion_siguientes_pasos'>
            <div className='informacion_subseccion blank'>
                <h3 className='informacion_subseccion_numeros'>00</h3>
                <h3 className='informacion_subseccion_dato'>Hacer el sitio responsivo</h3>
            </div>
            <div className='separador'></div>
            <div className='informacion_subseccion'>
                <h3 className='informacion_subseccion_numeros'>01</h3>
                <h3 className='informacion_subseccion_dato'>Crear una Aplicación Web</h3>
            </div>
            <div className='separador'></div>
            <div className='informacion_subseccion'>
                <h3 className='informacion_subseccion_numeros'>02</h3>
                <h3 className='informacion_subseccion_dato'>Agregar sensor de humo</h3>
            </div>
            <div className='separador'></div>
            <div className='informacion_subseccion'>
                <h3 className='informacion_subseccion_numeros'>03</h3>
                <h3 className='informacion_subseccion_dato'>Crear alertas en la página web</h3>
            </div>
            <div className='separador'></div>
            <div className='informacion_subseccion'>
                <h3 className='informacion_subseccion_numeros'>04</h3>
                <h3 className='informacion_subseccion_dato'>Lectura de valores con un boton</h3>
            </div>
        </div>
    </div>
  )
}

export default SiguientesPasos