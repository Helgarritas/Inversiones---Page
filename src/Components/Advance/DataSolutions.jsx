// import imageMs from '/src/assets/Solutions/Solution-Banner-background1.png';
// import imageMa from '/src/assets/Solutions/Solution-Banner-background2.png';
// import imageAm from '/src/assets/Solutions/Solution-Banner-background3.png';
// import imageVm from '/src/assets/Solutions/Solurion-banner-background4.png';

import imageMs from '/src/assets/Solutions/movil.png';
import imageMa from '/src/assets/Solutions/movil2.png';
import imageAm from '/src/assets/Solutions/movil3.png';
import imageVm from '/src/assets/Solutions/movil4.png';


const DataSolutions = {
    "mineriaSubterranea":{
        banner:{
            background: imageMs,
            title: <h1 className='translate__animation'>Minería <br />Subterranea</h1>,
            description: 'Ofrecemos extracción de minerales valiosos con las más avanzadas técnicas de ingeniería. Nuestro equipo profesional posee amplia experiencia en la construcción y mantenimiento de túneles y galerías, asegurando minimizar el impacto ambiental, adaptándonos a las necesidades específicas de cada cliente.'
        },
        process: [
            {
                number: '1.',
                title: 'Planificación Estratégica',
                description: 'Desarrollamos un plan detallado para la ejecución eficiente del proyecto,'
            },
            {
                number: '2.',
                title: 'Preparación de Campo',
                description: 'Preparación del sitio de trabajo según las normativas de seguridad ambiental.'
            },
            {
                number: '3.',
                title: 'Extracción de Minerales',
                description: 'Implementación de técnicas avanzadas para la extracción eficiente.'
            },
            {
                number: '4.',
                title: 'Transporte de Material',
                description: 'Gestión de transporte  y manejo de material extraído de manera eficaz.'
            },                
            {
                number: '5.',
                title: 'Monitoreo continuo.',
                description: 'Rehabilitación de entorno natural por cierre de operaciones.'
            },                
            {
                number: '6.',
                title: 'Mantenimiento y Reparación.',
                description: 'Control de calidad en todas las etapas para cumplimiento de las regulaciones.'
            },                
        ],
        counter:[
            {
                number: ['1000','+'],
                description: 'Proyectos realizados',
            },
            {
                number: ['20','+'],
                description: 'Proyectos operativos',
            },
            {
                number: ['1000','kl'],
                description: 'Galería perfofarada',
            },
            {
                number: ['1000','+'],
                description: 'Colaboradores activos',
            },
        ],
    },
    "mineriaSuperficial":{
        banner:{
            background: imageMa,
            title: <h1 className='translate__animation'>Minería <br />Superficial</h1>,
            description: 'En Inversiones somos expertos en la ejecución de proyectos de minería superficial. Nuestro equipo altamente cualificado utiliza tecnología de vanguardia para la extracción eficiente y segura de minerales en yacimientos a cielo abierto y un cumplimiento estricto de las normativas internacionales.'
        },
        process: [
            {
                number: '1.',
                title: 'Evaluación del Sitio',
                description: 'Evaluación del sitio para determinar la viabilidad y potencial del proyecto.'
            },
            {
                number: '2.',
                title: 'Diseño y Planificación',
                description: 'Desarrollo de diseño y planificación para la extracción eficiente.'
            },
            {
                number: '3.',
                title: 'Extracción de Capas',
                description: 'Extracción mediante implementación de técnicas especializadas y modernas.'
            },
            {
                number: '4.',
                title: 'Gestión de Residuos',
                description: 'Gestión responsable y sostenible de residuos generados en el proyecto.'
            },                
            {
                number: '5.',
                title: 'Rehabilitación del Sitio',
                description: 'Rehabilitación de entorno natural por cierre de operaciones.'
            },                
            {
                number: '.',
                title: 'Control de Calidad',
                description: 'Control de calidad en todas las etapas para cumplimiento de las regulaciones.'
            },                
        ],
        counter:[
            {
                number: ['1000','+'],
                description: 'Proyectos realizados',
            },
            {
                number: ['1000','+'],
                description: 'Proyectos Operativos',
            },
            {
                number: ['1000','+'],
                description: 'Toneladas Removidas',
            },
            {
                number: '70',
                description: 'Colaboradores Activos',
            },
        ],
    },
    "alquilerDeMaquinaria":{
        banner:{
            background: imageAm,
            title: <h1 className='translate__animation'>Alquiler de <br />Maquinaria Pesada</h1>,
            description: 'En Inversiones proporcionamos una amplia gama de maquinaria pesada para alquiler, ideal para proyectos de construcción, minería y otras industrias. Todos mantenidos en óptimas condiciones para garantizar un rendimiento confiable asegurando que el proyecto se ejecute sin contratiempos.'
        },
        process: [
            {
                number: '1.',
                title: 'Asesoramiento Personalizado',
                description: 'Orientación especializada para una selección de maquinaria adecuada.'
            },
            {
                number: '2.',
                title: 'Demostración de Equipos:',
                description: 'Demostración detallada para garantizar su completa satisfacción.'
            },
            {
                number: '3.',
                title: 'Negociación Transparente',
                description: 'Garantizando que obtengas el mejor valor por tu inversión.'
            },
            {
                number: '4.',
                title: 'Entrega y Instalación ',
                description: 'Servicio de entrega y instalación en el lugar de trabajo, listo para uso.'
            },                
            {
                number: '5.',
                title: 'Capacitación de Uso',
                description: 'Capacitación detallada sobre el funcionamiento y mantenimiento .'
            },                
            {
                number: '6.',
                title: 'Servicio Postventa Confiable',
                description: 'Servicio postventa confiable , para dudas y consultas adicionales.'
            },                
        ],
        counter:[
            {
                number: ['100','+'],
                description: 'Equipos disponibles',
            },
            {
                number: ['50','+'],
                description: 'Clientes Satisfechos',
            },
            {
                number: ['24','hr'],
                description: 'Soporte técnico',
            },
            {
                number: ['20','+'],
                description: 'Convenios internacionales',
            },
        ],
    },
    "ventaDeMaquinaria":{
        banner:{
            background: imageVm,
            title: <h1 className='translate__animation'>Venta de  <br />Equipo Minero</h1>,
            description: 'Nos especializamos en la venta de maquinaria pesada de alta calidad, adecuada para diversas aplicaciones industriales y de construcción. En Inversiones, ofrecemos una selección de equipos de las mejores marcas, garantizando durabilidad y eficiencia. '
        },
        process: [
            {
                number: '1.',
                title: 'Asesoramiento Personalizado',
                description: 'Orientación especializada para una selección de maquinaria adecuada.'
            },
            {
                number: '2.',
                title: 'Demostración de Equipos:',
                description: 'Demostración detallada para garantizar su completa satisfacción.'
            },
            {
                number: '3.',
                title: 'Negociación Transparente',
                description: 'Garantizando que obtengas el mejor valor por tu inversión.'
            },
            {
                number: '4.',
                title: 'Entrega y Instalación ',
                description: 'Servicio de entrega y instalación en el lugar de trabajo, listo para uso.'
            },                
            {
                number: '5.',
                title: 'Capacitación de Uso',
                description: 'Capacitación detallada sobre el funcionamiento y mantenimiento .'
            },                
            {
                number: '6.',
                title: 'Servicio Postventa Confiable',
                description: 'Servicio postventa confiable , para dudas y consultas adicionales.'
            },                
        ],
        counter:[
            {
                number: ['100','+'],
                description: 'Equipos disponibles',
            },
            {
                number: ['50','+'],
                description: 'Clientes Satisfechos',
            },
            {
                number: ['24','hr'],
                description: 'Soporte técnico',
            },
            {
                number: ['20','+'],
                description: 'Convenios internacionales',
            },
        ],
    },
}
export default DataSolutions;