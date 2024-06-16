import React,{useEffect} from 'react'
import ApexCharts from 'apexcharts';
function TonalityMap() {
    useEffect(() => {
        const tonalityChartElement = document.querySelector('.tonality-chart');
    
        const tonalityOptions = {
          series: [5, 10, 15, 20, 30],
          chart: {
            height: 350,
            type: 'donut',
          },
          dataLabels: {
            enabled: true,
          },
          legend: {
            show: true,
            position: 'bottom',
            fontSize: '14',
          },
          labels: ['Youtube', 'Ganna.com', 'Spotify', 'Translator', 'Stackoverflow'],
        };
    
        const tonalityChartRender = new ApexCharts(tonalityChartElement, tonalityOptions);
        tonalityChartRender.render();
    
        // Cleanup function to destroy the chart when the component unmounts
        return () => {
          tonalityChartRender.destroy();
        };
      }, []);
  return (
   <>
   <div className="tonality-wrap">
                          <div className="tonality-chart"></div>
                        </div>
   </>
  )
}

export default TonalityMap