import { Layout } from 'antd';
import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';


function DashboardComponent() {
  const [series, setSeries] = useState([70]);
  
  const options = {
    chart: {
      height: 350,
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: '70%',
        }
      },
    },
    labels: ['Cricket'],
  };

  return (
    <>
      <Layout/>
      <div id="chart">
      <ReactApexChart options={options} series={series} type="radialBar" height={350} />
    </div>
    </>
  );
}

export default DashboardComponent;
