import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const BaseballChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = echarts.init(chartRef.current);

    // Generate some fake data
    const minV = 60;
    const maxV = 105;
    const data = [];
    for (let i = 0; i <= 75; i++) {
      const pitchVelocity = Math.floor(Math.random() * (maxV - minV + 1) + minV);
      const strikeoutRate = Math.min(99, pitchVelocity / 1.5 + Math.floor(Math.random() * (9 - 1 + 1) + 1));
      data.push({ pitchVelocity, strikeoutRate });
    }

    // Calculate linear regression
    const xData = data.map((game) => game.pitchVelocity);
    const yData = data.map((game) => game.strikeoutRate);
    const xMean = xData.reduce((acc, val) => acc + val, 0) / xData.length;
    const yMean = yData.reduce((acc, val) => acc + val, 0) / yData.length;
    const numerator = xData.reduce((acc, val, i) => acc + (val - xMean) * (yData[i] - yMean), 0);
    const denominator = xData.reduce((acc, val) => acc + (val - xMean) ** 2, 0);
    const slope = numerator / denominator;
    const yIntercept = yMean - slope * xMean;

    const options = {
      grid: {
        containLabel: true,
      },
      xAxis: {
        name: 'Pitch Velocity (mph)',
        min: minV,
        max: maxV,
        nameLocation: 'middle',
        nameGap: 40,
      },
      yAxis: {
        name: 'Strikeout Rate',
        min: 0,
        nameLocation: 'middle',
        nameGap: 40,
        axisLabel: {
          formatter: '{value}%',
        },
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
        },
        formatter: function (params) {
          if (params && params.length && params[0].value) {
            const { dataIndex, value } = params[0];
            return `${value[0]} mph, ${value[1].toFixed(1)}% strikeout rate`;
          }
          return '';
        },
      },
      series: [
        {
          name: 'Strikeout Rate',
          data: data.map((game) => [game.pitchVelocity, game.strikeoutRate]),
          type: 'scatter',
          emphasis: {
            label: {
              show: false,
              position: 'top',
            },
          },
        },
        {
          name: 'Linear Regression',
          data: [
            [minV, slope * minV + yIntercept],
            [maxV, slope * maxV + yIntercept],
          ],
          type: 'line',
          lineStyle: {
            width: 2,
            type: 'dashed',
          },
        },
      ],
    };

    window.addEventListener('resize', () => chart && chart.resize());

    chart.setOption(options);

    return () => {
      chart.dispose();
    };
  }, []);

  return <div ref={chartRef} style={{ width: '100%', height: '100%', minHeight: '300px' }} />;
};

export default BaseballChart;
