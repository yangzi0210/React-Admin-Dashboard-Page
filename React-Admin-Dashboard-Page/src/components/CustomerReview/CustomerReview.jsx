// import React from "react";
// import Chart from "react-apexcharts";


// const CustomerReview = () => {
//   const data = {
//     series: [
//       {
//         name: "Review",
//         data: [10, 50, 30, 90, 40, 120, 100],
//       },
//     ],
//     options: {
//       chart: {
//         type: "area",
//         height: "auto",
//       },

//       fill: {
//         colors: ["#fff"],
//         type: "gradient",
//       },
//       dataLabels: {
//         enabled: false,
//       },
//       stroke: {
//         curve: "smooth",
//         colors: ["#ff929f"],
//       },
//       tooltip: {
//         x: {
//           format: "dd/MM/yy HH:mm",
//         },
//       },
//       grid: {
//         show: false,
//       },
//       xaxis: {
//         type: "datetime",
//         categories: [
//           "2023-03-19T00:00:00.000Z",
//           "2023-03-19T01:30:00.000Z",
//           "2023-03-19T02:30:00.000Z",
//           "2023-03-19T03:30:00.000Z",
//           "2023-03-19T04:30:00.000Z",
//           "2023-03-19T05:30:00.000Z",
//           "2023-03-19T06:30:00.000Z",
//         ],
//       },
//       yaxis: {
//         show: false
//       },
//       toolbar:{
//         show: false
//       }
//     },
//   };
//   return <div className="CustomerReview">
//         <Chart options={data.options} series={data.series} type="area" />
//   </div>;
// };

// export default CustomerReview;
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Area } from '@ant-design/plots';
import { myData } from './Data';
import './CustomerReview.css'
const CustomerReview = () => {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   asyncFetch();
  // }, []);

  // const asyncFetch = () => {
  //   fetch('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json')
  //     .then((response) => response.json())
  //     .then((json) => setData(json))
  //     .catch((error) => {
  //       console.log('fetch data failed', error);
  //     });
  // };
  
  const data = myData;
  const config = {
    data,
    xField: 'Date',
    yField: 'scales',
    xAxis: {
      range: [0, 1],
      tickCount: 5,
    },
    line:{color:'white'},
    autoFit: true,
    areaStyle: () => {
      return {
        fill: 'l(270) 0:#ffffff 0.5:#f79ff2 1:#f758ef',
      };
    },
  };

  return (<div className='box'>
  <Area {...config} />
  </div>
  )
};

export default CustomerReview;