import React,{useEffect} from 'react'
import ApexCharts from 'apexcharts';
function EmotionMap() {
    useEffect(() => {
        const emotionChartElement = document.querySelector('.emotion-chart');
    
        const emotionOptions = {
          series: [10, 55, 13, 43, 22],
          chart: {
            height: 350,
            type: 'donut',
          },
          colors: ['#1ab7ea', '#0084ff', '#39539E', '#0077B5'],
          dataLabels: {
            enabled: true,
          },
          legend: {
            show: true,
            position: 'bottom',
            fontSize: '14',
          },
          labels: ['Youtube', 'Google', 'Wikipedia', 'Translator', 'Stackoverflow'],
        };
    
        const emotionChartRender = new ApexCharts(emotionChartElement, emotionOptions);
        emotionChartRender.render();
    
        // Cleanup function to destroy the chart when the component unmounts
        return () => {
          emotionChartRender.destroy();
        };
      }, []);
  return (
    <>
     <div className="emotion-wrap">
                          <div className="emotion-chart"></div>
                        </div>
    </>
  )
}

export default EmotionMap