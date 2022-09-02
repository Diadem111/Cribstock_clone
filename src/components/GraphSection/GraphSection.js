import React, {PureComponent, useState} from 'react';
import "./GraphSection.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import Carousel from 'react-bootstrap/Carousel';
import { Carousel } from 'react-responsive-carousel';

// import Carousel from 'better-react-carousel'
// import Carousel from 'better-react-carousel'

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
  ResponsiveContainer,
} from 'recharts';
import {format, parseISO, subDays} from "date-fns";
import { IoMdPricetags } from 'react-icons/io';
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
    date:subDays(new Date(), num).toISOString().substring(0,10),
    price: 1 + Math.random()
  })
}



export default function GraphSection () {

  const GramTool = () => {
    const  CustomTooltip = ({active, payload , label} ) =>  {
      console.log({label})
      console.log("ggg")
      // console.log(<p>{payload[0].value.toFixed(2)}</p>)
       if (active) {
       return ( 
       <div className='tooltip'>
                {/* <p >{label}</p> */}
           <h4>{format(parseISO(label), "eeee, d MMM, yyyy")}</h4>
             <p>{payload[0].value.toFixed(2)}</p>
         </div>
        
       );
         }
       return null;
     }
   
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
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart
            data={data}
            margin={{ top: 20, right: 30, left: 0, bottom: 0 }}

            >
              <defs>
                <linearGradient id='color' x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0.0}/>

                </linearGradient>
              </defs>
              <Area dataKey="price" type="monotone"
            stroke="#8884d8"
            fill="url(#colorValue)"/>

              <XAxis  dataKey="date" axisLine={false} 
              tickLine={false} 
              tickFormatter={(string) => {
                const date = parseISO(string);
                if (date.getDate() % 1 === 0) {
                  return format(date, "MMM , d");
                }
                return ""
              }}
              />

            <YAxis dataKey="price" 
          axisLine={false} 
          tickLine={false} 
          tickCount={8}
            tickFormatter={number => `#${number.toFixed(2)}`}
            />

              <Tooltip      
                     wrapperStyle={{ backgroundColor: "red" }}
            labelStyle={{ color: "green" }}
            itemStyle={{ color: "cyan" }}
            formatter={function(price, name,label) {
              return `${price}`;
            }}
            labelFormatter={function(price) {
              return ` ${price}`;
            }}
              />

              <CartesianGrid  opacity={0.1} strokeDashArray="3 3" vertical={false}/>
          </AreaChart>
        </ResponsiveContainer>
          </div>
      </content>

    </content>
      </>
    )
  }
  
  function NextPage  () {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
    return (
      <>
      <div className='container q'>
     
      </div>
      </>
    )
  }
    return (
        <>
        <GramTool/>
        <NextPage/>
        </>
        

   
    )
    
}




