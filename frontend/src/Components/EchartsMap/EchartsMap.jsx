import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const geoCoordMap = {
  'Lima': [-77.02824, -12.04318],
  'Ayacucho': [-74.21793, -13.15878],
  'Ica': [-75.72774, -14.06777],
};

const data = [
  { name: 'Lima', value: 100 },
  { name: 'Ayacucho', value: 80 },
  { name: 'Ica', value: 60 },
];

const convertData = (data) => {
  const res = [];
  for (let i = 0; i < data.length; i++) {
    const geoCoord = geoCoordMap[data[i].name];
    if (geoCoord) {
      res.push({
        name: data[i].name,
        value: geoCoord.concat(data[i].value),
      });
    }
  }
  return res;
};

const EchartsMap = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const loadScript = (url) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = url;
        script.async = true;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
      });
    };

    const initChart = async () => {
      await loadScript('https://api.map.baidu.com/api?v=3.0&ak=YOUR_APP_KEY');
      await loadScript('https://cdnjs.cloudflare.com/ajax/libs/echarts/4.8.0/extension/bmap.min.js');

      const chartDom = chartRef.current;
      const myChart = echarts.init(chartDom);

      const option = {
        backgroundColor: 'transparent',
        title: {
          text: 'Mapa de Ubicaciones Personalizadas',
          left: 'center',
        },
        tooltip: {
          trigger: 'item',
        },
        bmap: {
          center: [104.114129, 37.550339],
          zoom: 5,
          roam: true,
          mapStyle: {
            styleJson: [
              {
                featureType: 'water',
                elementType: 'all',
                stylers: {
                  color: '#d1d1d1'
                }
              },
              {
                featureType: 'land',
                elementType: 'all',
                stylers: {
                  color: '#f3f3f3'
                }
              },
              {
                featureType: 'railway',
                elementType: 'all',
                stylers: {
                  visibility: 'off'
                }
              },
              {
                featureType: 'highway',
                elementType: 'all',
                stylers: {
                  color: '#fdfdfd'
                }
              },
              {
                featureType: 'highway',
                elementType: 'labels',
                stylers: {
                  visibility: 'off'
                }
              },
              {
                featureType: 'arterial',
                elementType: 'geometry',
                stylers: {
                  color: '#fefefe'
                }
              },
              {
                featureType: 'arterial',
                elementType: 'geometry.fill',
                stylers: {
                  color: '#fefefe'
                }
              },
              {
                featureType: 'poi',
                elementType: 'all',
                stylers: {
                  visibility: 'off'
                }
              },
              {
                featureType: 'green',
                elementType: 'all',
                stylers: {
                  visibility: 'off'
                }
              },
              {
                featureType: 'subway',
                elementType: 'all',
                stylers: {
                  visibility: 'off'
                }
              },
              {
                featureType: 'manmade',
                elementType: 'all',
                stylers: {
                  color: '#d1d1d1'
                }
              },
              {
                featureType: 'local',
                elementType: 'all',
                stylers: {
                  color: '#d1d1d1'
                }
              },
              {
                featureType: 'arterial',
                elementType: 'labels',
                stylers: {
                  visibility: 'off'
                }
              },
              {
                featureType: 'boundary',
                elementType: 'all',
                stylers: {
                  color: '#fefefe'
                }
              },
              {
                featureType: 'building',
                elementType: 'all',
                stylers: {
                  color: '#d1d1d1'
                }
              },
              {
                featureType: 'label',
                elementType: 'labels.text.fill',
                stylers: {
                  color: '#999999'
                }
              }
            ]
          }
        },
        series: [
          {
            name: 'Ubicaciones',
            type: 'scatter',
            coordinateSystem: 'bmap',
            data: convertData(data),
            symbolSize: function (val) {
              return val[2] / 10;
            },
            label: {
              formatter: '{b}',
              position: 'right',
              show: true,
            },
            itemStyle: {
              color: '#ddb926',
            },
            emphasis: {
              label: {
                show: true,
              },
            },
          },
          {
            name: 'Top 5',
            type: 'effectScatter',
            coordinateSystem: 'bmap',
            data: convertData(
              data.sort(function (a, b) {
                return b.value - a.value;
              }).slice(0, 6)
            ),
            symbolSize: function (val) {
              return val[2] / 10;
            },
            showEffectOn: 'render',
            rippleEffect: {
              brushType: 'stroke'
            },
            label: {
              formatter: '{b}',
              position: 'right',
              show: true,
            },
            itemStyle: {
              shadowBlur: 10,
              shadowColor: '#333'
            },
            emphasis: {
              scale: true
            },
            zlevel: 1
          }
        ]
      };

      myChart.setOption(option);
    };

    initChart().catch((error) => {
      console.error('Failed to load Baidu Map script:', error);
    });
  }, []);

  return <div ref={chartRef} id="main" style={{ width: '100%', height: '500px' }}></div>;
};

export default EchartsMap;
