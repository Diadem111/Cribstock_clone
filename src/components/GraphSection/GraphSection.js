import React, {PureComponent} from 'react';
// import {ChartComponent , SeriesCollectionDirective , SeriesDirective , Inject , HiloSeries,Tooltip, DateTime , Zoom , Logarithmic , Crosshair } from "@syncfusion/ej2-react-charts";
import { FinancialChartData, FinancialPrimaryXAxis, FinancialPrimaryYAxis } from "../../Data/Data";

import "./GraphSection.css";
import {GoLocation} from "react-icons/go";
import {
  AreaChart,
   Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Brush,
  AreaChart,
  Area,
  ResponsiveContainer,
} from 'recharts';
import {format, parseISO, subDays} from "date-fns";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   Brush,
//   AreaChart,
//   Area,
//   ResponsiveContainer,
// } from 'recharts';


const data = [
  // {
  //   name: 'Page A',
  //   uv: 4000,
  //   pv: 2400,
  //   amt: 2400,
  // },
  // {
  //   name: 'Page B',
  //   uv: 3000,
  //   pv: 1398,
  //   amt: 2210,
  // },
  // {
  //   name: 'Page C',
  //   uv: 2000,
  //   pv: 9800,
  //   amt: 2290,
  // },
  // {
  //   name: 'Page D',
  //   uv: 2780,
  //   pv: 3908,
  //   amt: 2000,
  // },
  // {
  //   name: 'Page E',
  //   uv: 1890,
  //   pv: 4800,
  //   amt: 2181,
  // },
  // {
  //   name: 'Page F',
  //   uv: 2390,
  //   pv: 3800,
  //   amt: 2500,
  // },
  // {
  //   name: 'Page G',
  //   uv: 3490,
  //   pv: 4300,
  //   amt: 2100,
  // },
];

for (let num = 30 ; num >=0; num--) {
  data.push({
    date:subDays(),
    value: 1 + Math.random()
  })
}

const date1 = new Date('2017, 1, 1');

function filterValue(value) {
  if (value.x >= date1) {
    return value.x, value.high, value.low;
  }
}
const returnValue = FinancialChartData.filter(filterValue);

export default function GraphSection () {
    return (
        <>

        <content className=" ms-3  parentContainer1">
      <div className=" bg-danger">
        <div>
          <h2 className='fw-bolder'>SHPNG</h2>
            <span className='d-flex flex-row'>
              <GoLocation/>
              <p>22 monastery road, Sangotedo, Lagos, Nigeria
                </p>
            </span>
        </div>
      </div>
      <content className="bg-success mt-2 text-center dd11">
        <div className='dww'>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart
            width={500}
            height={200}
            data={data}
            // dataSource={returnValue}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" 
   />
            <YAxis       />
            <Tooltip />
            <Line type="monotone" dataKey="pv" stroke="#82ca9d" fill="#82ca9d" />
            <Brush />
          </LineChart>
        </ResponsiveContainer>

        {/* <ChartComponent
          id="charts"
          primaryXAxis={FinancialPrimaryXAxis}
          primaryYAxis={FinancialPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true, shared: true }}
          crosshair={{ enable: true, lineType: 'Vertical', line: { width: 0 } }}
         
        >
          <Inject services={[HiloSeries, Tooltip, DateTime, Logarithmic, Crosshair, Zoom]} />
          <SeriesCollectionDirective>
            <SeriesDirective
              // dataSource={returnValue}
              xName="x"
              yName="low"
              name="Apple Inc"
              type="Hilo"
              low="low"
              high="high"
            />
          </SeriesCollectionDirective>
        </ChartComponent> */}
        </div>
      </content>

    </content>

        </>

   
    )
}