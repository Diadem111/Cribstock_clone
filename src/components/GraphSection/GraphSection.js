import React, {PureComponent, useState,useEffect,Component} from 'react';
import "./GraphSection.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import LeftArrow from "../../../src/assets/arrow-left.svg";
import RightArrow from "../../../src/assets/arrow-right-short.svg";
import {AiOutlineArrowLeft} from "react-icons/ai";
import {AiOutlineArrowRight} from "react-icons/ai";
import { Link, useParams } from 'react-router-dom';


// import {ChartComponent , SeriesCollectionDirective , SeriesDirective , Inject , HiloSeries,Tooltip, DateTime , Zoom , Logarithmic , Crosshair } from "@syncfusion/ej2-react-charts";
import { FinancialChartData, FinancialPrimaryXAxis, FinancialPrimaryYAxis } from "../../Data/Data";
import axios from "axios";

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
import {AiOutlineExclamationCircle} from "react-icons/ai";
import Modal from "../Modal/Modal";


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
  const [showOverlay, setShowOverlay] = useState(false);
  const url = "http://localhost:4000/user/getdoc/";

   const params = useParams();
   useEffect(() => {
   
     
   }, []);
       async  function getData() {
       }
   


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
 <content className=" ">
      <div className=" ms-lg-5 ms-0 ps-0 mt-lg-5 pt-lg-5 mt-3  ww ">
        <div>
          <h2 className='fw-bolder mt-5 ms-lg-0 ms-3 ps-lg-0 ps-3'>SHPNG</h2>
            <span className='d-flex flex-row ms-lg-0 ms-3 ps-lg-0 ps-3'>
              <GoLocation className=''/>
              
              <p className="ms-lg-0">22 monastery road, Sangotedo, Lagos, Nigeria
                </p>
               
            </span>
        </div>
      </div>
      <content className=" ms-lg-5 ms-0 ps-lg-5 ps-0 text-center dd11">
        <div className='dww ms-lg-4 ms-0 area1'>
        <ResponsiveContainer width="100%" height={300} >
          <AreaChart
            data={data}
            margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
            classNames="danger "
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
          // axisLine={false} 
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

  
  const NextPage = () => {
    const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
      <img src="/right.png" alt="prevArrow" {...props} />
    );
  
    const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
      <img src="/left.png" alt="nextArrow" {...props} />
    );
    const productSlideImg = [
      {Img : "/house1.jpg" , ImgName : "img1"},
      {Img : "/house2.jpg" , ImgName : "img2"},
      {Img : "/house3.jpg" , ImgName : "img3"},
      {Img : "/house1.jpg" , ImgName : "img4"},
      {Img : "/house2.jpg" , ImgName : "img5"},
      {Img : "/house3.jpg" , ImgName : "img6"},
      {Img : "/house1.jpg" , ImgName : "img7"},
      {Img : "/house2.jpg" , ImgName : "img8"},


      

    ]
    const [showOverlay, setShowOverlay] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(null);

  
    const HandleClickSlide = (item,index) => {
      console.log(item);
      setCurrentIndex(index);
      setShowOverlay(item.Img);
        
      
    };
    const handleRotation = () => {
      const totalLength = productSlideImg.length;
      if (currentIndex + 1 >= totalLength) {
        setCurrentIndex(0);
        const newUrl = productSlideImg[0].Img;
        setShowOverlay(newUrl);
        return;

      }
      const newIndex = currentIndex + 1 ;
      const newUrl = productSlideImg.filter((item) => {
        return productSlideImg.indexOf(item ) === newIndex;

      });

      const newItem = newUrl[0].Img;
      setShowOverlay(newItem);
      setCurrentIndex(newIndex);
    }
    const handleRotationLeft = () => {
      const totalLength = productSlideImg.length;
      if (currentIndex === 0) {
        setCurrentIndex(totalLength - 1);
        const newUrl = productSlideImg[totalLength -1].Img;
        setShowOverlay(newUrl);
        return;
    }
    const newIndex = currentIndex - 1 ;
    const newUrl = productSlideImg.filter((item) => {
      return productSlideImg.indexOf(item ) === newIndex;

    });
    const newItem = newUrl[0].Img;
      setShowOverlay(newItem);
      setCurrentIndex(newIndex);


    
  }
      var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        prevArrow: <SlickArrowLeft />,
        nextArrow: <SlickArrowRight />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          }
        ]
      }
      return (
        <div className='q ms-lg-5 ms-3  '>
           <section className="">
            <div className='popup-img'>
             <button>close</button>
            <img src="/house1.jpg" alt="image"/>
           </div>
        </section>
          
          <Slider {...settings}>
             {productSlideImg.map((item,index)=> (
              <div key={index} className="wrapper-images">
                <img className='gr test ' src={item.Img} alt={item.ImgName} onClick={()=>
                HandleClickSlide (item,index) }/>
             </div>                  
              ))}  
          </Slider>
         
        {/* {productSlideImg.forEach (item => {
            
        })}
       */}
     {showOverlay &&  <  Modal
        showOverlay={showOverlay} 
       handleRotation={handleRotation}
       setShowOverlay= {setShowOverlay}
       handleRotationLeft = {handleRotationLeft}
       />
        }
         
                </div>
      );
    

     
  }
  const PriceSection = () => {
    return (
            <>
            <section className="mt-lg-5 mt-5 pt-lg-0 pt-5 ms-2">
              <div className="row mt-lg-5 mt-5 pt-lg-0 pt-5 ms-2">
                <div className="col-lg-3 col-4">
                  <div className="">
                    <span className="d-flex flex-row">
                      <p className="fw-bold"> Price</p>
                      <p>
                        <AiOutlineExclamationCircle className='ms-3 '/>
                      </p>
                    </span>
                    <p className="fw-bolder">#10,868.88</p>
                  </div>
                </div>
                {/* end of first */}
                <div className="col-lg-3 col-4">
                  <div className="">
                    <span className="d-flex flex-row">
                      <p className="fw-bold">Market cap</p>
                      <p>
                        <AiOutlineExclamationCircle className='ms-3 '/>
                      </p>
                    </span>
                    <p className="fw-bolder">#70,868.88</p>
                  </div>
                </div>
                {/* end */}
                <div className="col-lg-3 col-4">
                  <div className="">
                    <span className="d-flex flex-row">
                      <p className="fw-bold"> 30d</p>
                      <p>
                        <AiOutlineExclamationCircle className='ms-3 '/>
                      </p>
                    </span>
                    <p className="text-success fw-bolder">1.05%</p>
                  </div>
                </div>
                {/* end */}
                <div className="col-4 col-lg-3">
                  <div className="">
                    <span className="d-flex flex-row">
                      <p className="fw-bold"> 1y</p>
                      <p>
                        <AiOutlineExclamationCircle className='ms-3 '/>
                      </p>
                    </span>
                    <p className="text-success fw-bolder">8.64%</p>
                  </div>
                </div>
                {/* end */}
              </div>
              {/* second row */}
              <div className="row mt-3 ms-2">
                <div className="col-lg-3 col-4">
                  <div className="">
                    <span className="d-flex flex-row">
                      <p className="fw-bold"> Volume</p>
                      <p>
                        <AiOutlineExclamationCircle className='ms-3 '/>
                      </p>
                    </span>
                    <p className="fw-bolder">#0.00</p>
                    <p>0</p>
                  </div>
                </div>
                {/* end of first */}
                <div className="col-lg-3 col-4">
                  <div className="">
                    <span className="d-flex flex-row">
                      <p className="fw-bold">Available supply</p>
                      <p>
                        <AiOutlineExclamationCircle className='ms-3 '/>
                      </p>
                    </span>
                    <p className="fw-bolder">4766</p>
                  </div>
                </div>
                {/* end */}
                <div className="col-lg-3 col-4">
                  <div className="">
                    <span className="d-flex flex-row">
                      <p className="fw-bold"> Circulating supply</p>
                      <p>
                        <AiOutlineExclamationCircle className='ms-3 '/>
                      </p>
                    </span>
                    <p className="text-success fw-bolder">7000</p>
                  </div>
                </div>
                {/* end */}
                <div className="col-4 col-lg-3">
                  <div className="">
                    <span className="d-flex flex-row">
                      <p className="fw-bold"> Average volume</p>
                      <p>
                        <AiOutlineExclamationCircle className='ms-3 '/>
                      </p>
                    </span>
                    <p className="text-danger fw-bolder">0</p>
                  </div>
                </div>
                {/* end */}
                <div className="row">
                  <h4 className="fw-bolder mt-3 ms-3">Location</h4>
                  <p className="text-muted ms-3">
                  The project is located at unit 8 block A,
                   plot 27/28 Iberekodo avenue, bridge gate estate, Agungi, Lekki, Lagos
                  </p>
                </div>
                {/* end */}
                <section>
                  <h4 className="fw-bolder ms-3 mt-2">Description</h4>
                  <ul className="mt-4">
                    <li className='text-muted'>Interior/furnishing in progress and should be ready by 20th August</li>
                    <li  className='text-muted mt-2'>A smart one bedroom penthouse + sitting room with automated home features</li>
                    <li  className='text-muted mt-2'>Bedroom area , a modern wardrobe ,open plan kitchen</li>
                    <li  className='text-muted mt-2'>High quality beddings & furniture</li>
                    <li  className='text-muted mt-2'>Fully finished kitchen area with a cooker, microwave, heat extractor, washing machine and smoke detectors</li>
                    <li  className='text-muted mt-2'>Fingerprint or card door access, doorbell & cameras</li>
                    <li  className='text-muted mt-2'>A car parking space</li>
                    <li  className='text-muted mt-2'>Good electricity and water supply</li>
                    <li  className='text-muted mt-2'>A personalized lounge area</li>
                    <li  className='text-muted mt-2'>Intended for short-let or Airbnb</li>
                    <li  className='text-muted mt-2'>Total worth includes; Base price, documentation, furnishing & interior remodeling , insurance, brokerage fees</li>
                  </ul>
                </section>
              </div>
            </section>
            </>
            )
  }
    return (
        <div className=''>
        <GramTool/>
        <NextPage/>
        <PriceSection/>
        </div>
        

   
    )
    
}




