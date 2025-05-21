import React, { useState } from 'react';
import InfoEmprendimiento from './components/InfoEmprendimiento';
import Grafico from './components/Grafico.js';
import Carousel from './components/Carousel';
import './styles/App.css';
import { v4 as uuidv4 } from 'uuid';

const graficosData = [
  {
    id: uuidv4(),
    titulo: "Capacidad de emprendimiento Femenino",
    descripcion: "Niveles de emprendimiento de la mujer en el mundo...",
    informacionAdicional: (
      <ul>
        <li>Muestra comparativas entre diferentes regiones.</li>
        <li>Basado en datos del último trimestre de 2024.</li>
        <li>Indica un crecimiento del 5% respecto al año anterior.</li>
      </ul>
    ),
    urlGif: "http://localhost:8000/grafico_barras",
    mostrar: false
  },
  {
    id: uuidv4(),
    titulo: "Distribución por sectores",
    descripcion: "Participación femenina en diferentes sectores económicos...",
    informacionAdicional: (
      <p>
        Los sectores con mayor participación son tecnología (25%), servicios (30%) y comercio (20%).
      </p>
    ),
    urlGif: "http://localhost:8000/grafico_torta",
    mostrar: false
  },
  {
    id: uuidv4(),
    titulo: "Evolución histórica",
    descripcion: "Evolución del emprendimiento femenino a lo largo del tiempo...",
    informacionAdicional: (
      <p>
        Este gráfico muestra la tendencia desde 2010 hasta la actualidad, con un aumento significativo a partir de 2020.
      </p>
    ),
    urlGif: "http://localhost:8000/grafico_area",
    mostrar: false
  }
];

const carouselItems = [
  {
    type: 'news-expandable',
    image: './images/Zenware.jpeg',
    title: 'Zenware',
    shortContent: 'Esta empresa, apoyada por la Cámara de Comercio de Bogotá, lleva tres años en el mercado prestando soluciones tecnológicas. Con el uso de métodos como ‘lean’ y ‘design thinking’, ofrece una plataforma basada en automatización',
    fullContent: 'Esta empresa, apoyada por la Cámara de Comercio de Bogotá, lleva tres años en el mercado prestando soluciones tecnológicas. Con el uso de métodos como ‘lean’ y ‘design thinking’, ofrece una plataforma basada en automatización de procesos operativos y aprendizaje basado en inteligencia artificial, enfocado a los procesos contables y análisis financieros. Su creadora es Natalia Mera.',
  },
  {
    type: 'news',
    title: 'Noticia Destacada: Avances en Tecnología',
    content: 'Un nuevo informe revela un crecimiento exponencial en startups lideradas por mujeres en el sector tecnológico. ¡Inspírate!',
    link: '#dashboard'
  },
  {
    type: 'news-expandable',
    image: './images/TechMakers.jpeg',
    title: 'world tech makers',
    shortContent: 'Este emprendimiento, fundado por Ilana Milkes, es una plataforma que genera espacios educativos virtuales y presenciales para la formación de niños, jóvenes y adultos en temas de tecnología.',
    fullContent: 'Este emprendimiento, fundado por Ilana Milkes, es una plataforma que genera espacios educativos virtuales y presenciales para la formación de niños, jóvenes y adultos en temas de tecnología. Esta startup ha recibido inversión de Draper VC, fondo de Silicon Valley y ganó el MassChallenge del MIT en 2015. La plataforma es un emprendimiento digital embajador de ProColombia para atraer inversión.',
  },
  {
    type: 'news-expandable',
    image: './images/images.jpeg',
    title: 'Cultiagua',
    shortContent: 'Este proyecto fue el ganador de Capital Semilla y Parque E en 2016. Es un hidrorretenedor que reduce el consumo de agua hasta 80% y la frecuencia de riego en 50%.',
    fullContent: 'Este proyecto fue el ganador de Capital Semilla, de la Alcaldía de Medellín, y de Parque E, incubadora de emprendimientos, en 2016. Es un hidrorretenedor para proteger cultivos, que genera reservas de agua, y logra reducir consumo hasta 80% y frecuencia de riego en 50%. En 2019, se realizaron 290 transacciones con pequeños y medianos agricultores, y su creadora es Mónica Espitia Ceballos.',
  },
];

function App() {
  const [mostrarGraficos, setMostrarGraficos] = useState({});
  const [datosTabulares, setDatosTabulares] = useState([]);
  const [mostrarDatos, setMostrarDatos] = useState(false); 

  const toggleGrafico = (id) => {
    setMostrarGraficos(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const cargarDatos = () => {
    if (datosTabulares.length === 0) {
      setDatosTabulares([
        { año: 2020, sector: 'Tecnología', cantidad: 150 },
        { año: 2021, sector: 'Servicios', cantidad: 200 },
        { año: 2022, sector: 'Comercio', cantidad: 250 },
        { año: 2023, sector: 'Manufactura', cantidad: 180 },
      ]);
      setMostrarDatos(true);
    } else {
      setMostrarDatos(!mostrarDatos);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Red Comunitaria de Emprendimiento e Innovación</h1>
      </header>

      <section id="carousel-section">
        <Carousel items={carouselItems} />
      </section>

      <main>
        <section id="informacion">
          <InfoEmprendimiento />
        </section>

        <section id="dashboard">
          <h2>Emprendimiento e Innovación</h2>
          <button id="buttoncharge" onClick={cargarDatos}>
            {mostrarDatos ? 'Ocultar Datos' : datosTabulares.length > 0 ? 'Mostrar Datos' : 'Cargar Datos Históricos'}
          </button>

          {mostrarDatos && datosTabulares.length > 0 && (
            <div className="datos-cargados-container">
              <h4>Datos cargados:</h4>
              <ul>
                {datosTabulares.map((dato, index) => (
                  <li key={index}>
                    Año: {dato.año}, Sector: {dato.sector}, Cantidad: {dato.cantidad}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <h1>Gráficos de Interés</h1>
          {graficosData.map(grafico => (
            <div key={grafico.id} className="grafico-contenedor">
              <h3>{grafico.titulo}</h3>
              <div className="grafico-informacion">
                <p className="grafico-descripcion">{grafico.descripcion}</p>
                {grafico.informacionAdicional}
              </div>
              <div className="grafico-visualizacion">
                {mostrarGraficos[grafico.id] && (
                  <Grafico
                    titulo={grafico.titulo}
                    descripcion={grafico.descripcion}
                    urlGif={grafico.urlGif}
                  />
                )}
              </div>
              <button onClick={() => toggleGrafico(grafico.id)}>
                {mostrarGraficos[grafico.id] ? 'Ocultar Gráfico' : 'Mostrar Gráfico'}
              </button>
            </div>
          ))}
        </section>
      </main>

      <footer>
        <p>© 2025 Red Comunitaria de Emprendimiento</p>
        <p>©Santiago Murcia Rodriguez & Carlos Manuel Botero</p>
      </footer>
    </div>
  );
}

export default App;
