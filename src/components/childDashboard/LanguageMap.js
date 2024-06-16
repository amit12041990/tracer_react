import React,{useEffect} from 'react'
import ApexCharts from 'apexcharts';
function LanguageMap() {
    useEffect(() => {
        const progressOptions = {
          chart: {
            height: 280,
            type: 'radialBar',
          },
          series: [67],
          colors: ['#0d6efd'],
          plotOptions: {
            radialBar: {
              hollow: {
                margin: 0,
                size: '70%',
                background: '#ffffff',
              },
              track: {
                dropShadow: {
                  enabled: true,
                  top: 2,
                  left: 0,
                  blur: 4,
                  opacity: 0.15,
                },
              },
              dataLabels: {
                name: {
                  offsetY: 0,
                  color: '#000',
                  fontSize: '10px',
                },
                value: {
                  color: '#000',
                  fontSize: '30px',
                  show: true,
                  offsetY: -8,
                },
              },
            },
          },
          fill: {
            type: 'gradient',
            gradient: {
              shade: 'dark',
              type: 'vertical',
              gradientToColors: ['#0d6efd'],
              stops: [0, 100],
            },
          },
          stroke: {
            lineCap: 'round',
          },
          labels: [''],
        };
    
        const chart = new ApexCharts(document.querySelector('.language-chart'), progressOptions);
        chart.render();
    
        // Cleanup function to destroy the chart when the component unmounts
        return () => {
          chart.destroy();
        };
      }, []);
  return (
    <>
    <div className="col-md-6 mb-4">
                  <div className="dash-card">
                    <div className="dash-card-header">
                      <a href="" className="btn btn-full">Interest Map Tag Cloud <i className="bi bi-chevron-right"></i></a>
                    </div>
                    <div className="dash-card-body">
                      <div className="lang-accuracy-wrap">
                        <div className="lang-accuracy-top">
                          <div className="lang-accuracy-title">
                            <h5>Language Accuracy</h5>
                          </div>
                          <div className="lang-accuracy-top-chart">
                            <div className="language-chart" data-percent="73"></div>
                          </div>
                        </div>
                        <div className="lang-accuracy-bot">
                          <ul className="lang-accuracy-list">
                            <li><i className="bi bi-check2"></i><span>99%</span> Grammatically Correct Sentence</li>
                            <li><i className="bi bi-check2"></i><span>100%</span> Accuracy on spelling</li>
                            <li><i className="bi bi-check2"></i><span>9%</span> fluent with <span>96%</span> Right impression</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
    </>
  )
}

export default LanguageMap