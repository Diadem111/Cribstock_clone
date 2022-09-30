import React, {useState} from "react";
import Modal from "../components/Modal/Modal";


export default function Testing () {
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
      return (
        <>
        <div className="">
        {productSlideImg.map((item,index)=> (
              <div key={index} className="wrapper-images">
                <img className='gr test ' src={item.Img} alt={item.ImgName} onClick={()=>
                HandleClickSlide (item,index) }/>
             </div>                  
              ))}

{showOverlay &&  <  Modal
        showOverlay={showOverlay} 
       handleRotation={handleRotation}
       setShowOverlay= {setShowOverlay}
       handleRotationLeft = {handleRotationLeft}
       />
        }
        </div>
        </>
      )
}