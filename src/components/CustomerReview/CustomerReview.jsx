import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Area } from '@ant-design/plots';
import { myData } from './Data';
import './CustomerReview.css'
const CustomerReview = () => {
  
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