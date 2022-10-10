import React, {PureComponent, useState,useEffect,Component} from 'react';
import "./GraphSection.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {useHistory,useLocation} from "react-router";
import LeftArrow from "../../../src/assets/arrow-left.svg";
import RightArrow from "../../../src/assets/arrow-right-short.svg";
import {AiOutlineArrowLeft} from "react-icons/ai";
import {AiOutlineArrowRight} from "react-icons/ai";
import { Link, useParams } from 'react-router-dom';
import ReactDOM from "react-dom";
import Skeleton from 'react-loading-skeleton';
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
import Modal from "../Modal/Modal";
import { PriceSection } from '../PriceSection/PriceSection';


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
   



export default function GraphSection () {
  const [showOverlay, setShowOverlay] = useState(false);
  const [product,setProduct] = useState({});
  const [loading, setLoading] = useState(false);
   let myArray = {};
  const location = useLocation();
  const id = location.pathname.split('/')[2];
  const url = `http://localhost:4000/user/find/`+id;

   const params = useParams();
   useEffect(() => {
            getProduct();
   }, []);
       
   async function getProduct(){
    setLoading(true);
    try {
      await axios.get(url).then((res)=>{
        // console.log(res.data);
        if(res.data){
           myArray = res.data;
          console.log(myArray);
           setProduct(res.data);
           console.log(product);
        }
      })
      setLoading(false);
        }catch (error) {
          console.log(error.message);
        }
   }

   const keys = Object.keys(product);
   let num = product[keys[3]];
   const naa = parseFloat(num?.replace(/,/g, ""));
  //  alert (ddqq)
      //  let aa = product.price;
      //  console.log(aa);
      const months = 6;
   for (let num = 5; num >=0; num--) {
    data?.push({
      date:subDays(new Date(), num).toISOString().substring(0,10),
      price:naa,
    })
  }
    // for loading skeleton
    const Loading = () => {
      return (
        <>
        <div className="col-md-6">
        <Skeleton height={400}/>
        </div>
        <div className="col-md-6" style={{lineHeight:2}}>
        <Skeleton height={50} width={300}/>
         <Skeleton height={75} /><Skeleton height={25} width={150}/>
         <Skeleton height={50} />
         <Skeleton height={150} />
         <Skeleton height={50} width="100" style={{marginLeft:6}} />
        </div>
        </>
      )
    }
    //  skeleton ends here  


    // chart start here
  const GramTool = () => {
    const  CustomTooltip = ({active, payload , label} ) =>  {
      console.log({label})
      // console.log("ggg")
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
      <div className=" ms-lg-5 ms-0 ps-0   ww ">
        <div>
          <h2 className='fw-bolder mt-5 ms-lg-0 ms-3 ps-lg-0 ps-3'>{product?.name}</h2>
            <span className='d-flex flex-row ms-lg-0 ms-3 ps-lg-0 ps-3'>
              <GoLocation className=''/>
              
              <p className="ms-lg-0">{product?.location?.substring(0,60)}...    </p>
               
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
            stroke="blue" fill="none"
            />

              <XAxis  dataKey="date" axisLine={false} 
              tickLine={false} 
              // tickCount={7}
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
          tickCount={5}
            tickFormatter={number => `#${number.toFixed(0)}`}
            />

              <Tooltip      
                 wrapperStyle={{ backgroundColor: "red" }}
            labelStyle={{ color: "black" }}
            itemStyle={{ color: "blue" }}
            formatter={function(price, name,label) {
              return `${price}`;
            }}
            labelFormatter={function(price) {
              return ` ${price}`;
            }}
              />

              <CartesianGrid  opacity={0.5} strokeDashArray="10 5"  vertical={true}/>
          </AreaChart>
        </ResponsiveContainer>
          </div>
      </content>

    </content>
      </>
    )
  }
  // chart ends here

  
  // slider start here
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

  
    const HandleClickSlide = (img,index) => {
      console.log(img);
      setCurrentIndex(index);
      setShowOverlay(img);
        
      
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
      // const Nation = () => {
      //   {product?.cloudinary_id_img?.map((person,index) => {
      //     console.log(person.secure_url);
      //     return (
      //       <div key={index} className="wrapper-images">
      //         <img className='gr test ' src={person.secure_url} alt="img" onClick={()=>
      //         HandleClickSlide (person.secure_url,index) }/>
      //      </div>
      //     )
      //   })}
      // }
      return (
        <div className='q ms-lg-5 ms-3  '>
           <section className="">
            <div className='popup-img'>
             <button>close</button>
            <img src="/house1.jpg" alt="image"/>
           </div>
        </section>
          
          <Slider {...settings}>             
          {product?.cloudinary_id_img?.map((img,index) => {
            return (
              <div key={index} className="wrapper-images">
              <img className='gr test ' src={img.secure_url} alt="img" onClick={()=>
              HandleClickSlide (img.secure_url,index) }/>
           </div>
            )
           })}  
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
  //  slider ends here
    return (
        <div className='container py-5'>
          <div className='row py-4'>
            {loading ? <Loading/> :
            <div>
             <GramTool/>
             <NextPage/>
             <PriceSection  data={product}/>
            </div>
               }
          </div>
        </div>
        

   
    )
    
}




