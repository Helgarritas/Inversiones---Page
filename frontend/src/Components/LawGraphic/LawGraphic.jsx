import React, { useState, useEffect } from 'react';
import ReactECharts from 'echarts-for-react';

const LawGraphic = () => {
  const [color, setColor] = useState("0,0,0");
  const [boolean, setBoolean] = useState(false);

  useEffect(() => {
    const handleDarkModeChange = () => {
      const darkmode = document.documentElement.getAttribute('class');
      if (darkmode === '' || darkmode === null) {
        setColor('0,0,0');
        setBoolean(true)
      } else {
        setColor('255,255,255');
        setBoolean(false)
      }
    };

    // Inicializar el estado
    handleDarkModeChange();

    // Añadir un listener para monitorear cambios en la clase del html
    const observer = new MutationObserver(handleDarkModeChange);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    // Cleanup el observer cuando el componente se desmonta
    return () => observer.disconnect();
  }, [setBoolean]);

  const option = {
    legend: {
      data: ['Oro', 'Cobre', 'Zinc'],
      backgroundColor: 'transparent', // Color de fondo oscuro
      textStyle: {
        color: `rgba(${color},1)` // Color de texto de la leyenda
      },
      itemWidth: 15, // Ancho de los cuadrados
      itemHeight: 15, // Alto de los cuadrados
      itemGap: 20 // Separación entre ítems
    },
    tooltip: {
      trigger: 'item',
      backgroundColor: `${boolean ? `rgba(0,0,0,.55)`:`rgba(255,255,255,.55)` }`, // Fondo del tooltip
      borderColor: `rgba(${color},0.1)`, // Borde del tooltip
      borderWidth: 1,
      textStyle: {
        color: `${boolean ? `rgba(255,255,255,.75)`:`rgba(0,0,0,.75)` }` // Color de texto del tooltip
      },
      formatter: function (params) {
        return params.marker + ' Oz Ag/TM: ' + params.value;
      }
    },
    dataset: {
      source: [
        ['product', 'Oro', 'Cobre', 'Zinc'],
        ['2016', 1.7, 0.8, 1.5],
        ['2021', 1.6, 1.4, 1.3],
        ['2022', 1.4, 1.2, 1.1],
        ['2023', 1.0, 0.9, 0.7]
      ]
    },
    xAxis: {
      type: 'category',
      axisLine: {
        lineStyle: {
          color: `rgba(${color},0.75)` // Color de las etiquetas del eje X
        }
      },
      axisLabel: {
        textStyle: {
          color: `rgba(${color},0.75)` // Color de las etiquetas del eje X
        }
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: `rgba(${color},0.2)` // Color de las líneas de fondo
        }
      }
    },
    yAxis: {
      min: 0,
      max: 2,
      interval: 0.2,
      axisLine: {
        lineStyle: {
          color: `rgba(${color},0.75)` // Color de las etiquetas del eje Y
        }
      },
      axisLabel: {
        textStyle: {
          color: `rgba(${color},0.75)` // Color de las etiquetas del eje Y
        }
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: `rgba(${color},0.2)` // Color de las líneas de fondo
        }
      }
    },
    series: [
      {
        type: 'bar',
        itemStyle: { color: '#FF6109' }, // Color de la barra
        barWidth: '12%',
        name: 'Oro'
      },
      {
        type: 'bar',
        itemStyle: { color: '#9AA9B8' }, // Color de la barra
        barWidth: '12%',
        name: 'Cobre'
      },
      {
        type: 'bar',
        itemStyle: { color: '#FFFFFF' }, // Color de la barra
        barWidth: '12%',
        name: 'Zinc'
      }
    ]
  };

  return (
    <ReactECharts option={option} className='mt-5' style={{ height: '450px', width: '100%' }} />
  );
}

export default LawGraphic;

