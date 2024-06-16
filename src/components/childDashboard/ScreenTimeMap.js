import React,{useEffect} from 'react'
import ApexCharts from 'apexcharts';
export default function ScreenTimeMap() {
  useEffect(() => {
    const screenOptions = {
      series: [
        {
          name: "Screen Time",
          data: [31, 40, 28, 51, 42, 109, 100],
        },
      ],
      chart: {
        height: 350,
        type: "area",
      },
      legend: {
        show: true,
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    };

    const screenTimeChart = new ApexCharts(document.querySelector('.screen-time-chart'), screenOptions);
    screenTimeChart.render();

    // Cleanup function to destroy the chart when the component unmounts
    return () => {
      screenTimeChart.destroy();
    };
  }, []);
  return (
  <>
  <div className="col-md-6 mb-4">
                  <div className="dash-card">
                    <div className="dash-card-header">
                      <a href="" className="btn btn-full">Screen time <i className="bi bi-chevron-right"></i></a>
                    </div>
                    <div className="dash-card-body">
                      <div className="screen-time-chart-wrap">
                        <div className="screen-time-chart"></div>
                      </div>
                    </div>
                    <div className="dash-card-footer">
                      <p>Total Screen time - <span>105</span> Hours <span>23</span> Minutes <span>14</span> Seconds</p>
                    </div>
                  </div>
                </div>
  </>
  )
}
