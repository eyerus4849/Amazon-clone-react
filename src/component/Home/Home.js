import React,{useState} from 'react'
import './home.css'
import Product from './Product'
// import NavigateNextIcon from '@material-ui/icons/NavigateNext';
// import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Carousel} from 'react-bootstrap'
function Home() {
  // let images=["https://images-na.ssl-images-amazon.com/images/G/01/xcm/brand_truths/4_29_Update/C_TBDB_SMB_GW_hero_desktop_3000x1200_2x._CB670680788_.jpg","https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2021/Other/RB-3968_SVOD_MultiTitle_GW_Test/AMZN_RB-3968_SVOD_MultiTitle_GW_Control_EN_GWBleedingHero_V2_3000x1200._CB668890782_.jpg","https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2021/img/Events/BTS/Homepage/2021_BTS_DesktopHero_3000x1200_Phase1_2x._CB669825959_.jpg","https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/Nzg3NzIxZDct/Nzg3NzIxZDct-OWNiZTMxYTAt-w3000._CB664037480_.jpg","https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/ZWUxZjhhODUt/ZWUxZjhhODUt-MGZhOGZmZjQt-w3000._CB663484184_.jpg"]
  
//   const[count,Setcount]=useState(1)
//   const[image,Setimage]=useState(images[0])
//   const change_imge_next=()=>{
//     Setcount(count=>count+1)
//     if(count==5){
//       Setcount(1)
//       Setimage(images[0])
//     }
//    else if(count<5){
//       Setimage(images[count])
//     } 
// }
//   const change_imge_back=()=>{
//     Setcount((count)=>count-1)
//     if(count==1){
//       Setcount(4)
//       Setimage(images[4])
//     }
//     if(count>1){
//       Setimage(images[count-2])
//     }
//   }
  
    return (
        <div className="home">
           
            <div className="home__container">
    {/* <div className="home__image" style={{
        backgroundSize: "cover",
        backgroundImage: `url(${image})`,
        height:"400px",
        backgroundRepeat:"no-repeat"
      }}>
        
        <div className="navigate">
        <div className="img_bttn_back" onClick={change_imge_back}>< NavigateBeforeIcon style={{ fontSize: 60 }} /></div>
        <div className="img_bttn" onClick={change_imge_next}>< NavigateNextIcon style={{ fontSize: 60 }} /></div>
        </div>
        </div> */}
        <Carousel fade={true} pause={false} indicators={false} className="home__image">
      <Carousel.Item interval={4000}>
        <img
          className="d-block w-100 "
          src="https://images-na.ssl-images-amazon.com/images/G/01/xcm/brand_truths/4_29_Update/C_TBDB_SMB_GW_hero_desktop_3000x1200_2x._CB670680788_.jpg"
          alt="First slide"
        />
       
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img
          className="d-block w-100 "
          src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2021/Other/RB-3968_SVOD_MultiTitle_GW_Test/AMZN_RB-3968_SVOD_MultiTitle_GW_Control_EN_GWBleedingHero_V2_3000x1200._CB668890782_.jpg"
          alt="2 slide"
        />
        
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img
          className="d-block w-100"
         src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/Y2UwYWM0MDQt/Y2UwYWM0MDQt-OTZkN2NjYTIt-w1500._CB668789270_.jpg"
          alt="3 slide"
        />
       
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img
          className="d-block w-100"
         src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/ZWUxZjhhODUt/ZWUxZjhhODUt-MGZhOGZmZjQt-w3000._CB663484184_.jpg"
          alt="3 slide"
        />
       
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img
          className="d-block w-100"
         src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/Movie/CIND_2021_GWBleedingHero_1500x600_PRE_Final_en-US_PVD7333_Cinderella._CB664771797_.jpg"
          alt="3 slide"
        />
       
      </Carousel.Item>
    </Carousel>
           <div className="home__row">
       <Product
        id="49538094"
        title="SUNBURY 5-Piece Outdoor Sectional Brown Wicker Sofa, PE Rattan Patio Furniture Set w Blue Cushion, Tempered Glass Table, Weatherproof Cover for Backyard"
        price={749.80}
        rating={5}
        image="https://m.media-amazon.com/images/I/71hLEmVb8lL._AC_UL800_FMwebp_QL65_.jpg"
       />
       <Product
        id="12321341"
        title="Rolex Sky Dweller Champagne Dial GMT 18kt Yellow Gold Mens Watch 326938CAO"
        price={59995}
        rating={5}
        image="https://m.media-amazon.com/images/I/611tvg2GZYL._AC_UL800_FMwebp_QL65_.jpg"
       />
        </div>
        <div className="home__row">
        <Product
            id="4903850"
            title="New Apple Watch Series 6 (GPS, 40mm) - Gold Aluminum Case with Pink Sand Sport Band"
            price={454.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/71vhu3pSQcL._AC_SL1500_.jpg"
          />

          <Product
            id="99903850"
            title="Microsoft Xbox Series S 512GB Game All-Digital Console + 1 Xbox Wireless1 Controller"
            price={355.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/61Q2hRo4BCL._SL1200_.jpg"
          />
          <Product
            id="3254354345"
            title="2021 Wireless Earbuds, Tribit Qualcomm QCC3040 Bluetooth 5.2, 4 Mics CVC 8.0 "
            price={69.99}
            rating={2}
            image="https://m.media-amazon.com/images/I/61IRjjz7S7L._AC_UY545_FMwebp_QL65_.jpg"
          />
        </div>
        <div className="home__row">
       <Product
        id="90829332"
        title="Total Gym XLS Men/Women Universal Total Body Training Home Gym Workout Machine with Squat Stand, Leg Pull, 2 Ankle Cuffs, and Exercise Chart"
        price={1199.98}
        rating={4}
        image="https://m.media-amazon.com/images/I/51n+nZKYnSL._AC_UL800_FMwebp_QL65_.jpg"
       />
       
        </div>
        <div className="home__row">
          <Product
            id="903850"
            title="Echo (4th Gen) | With premium sound, smart home hub, and Alexa | Charcoal"
            price={99.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/71JB6hM6Z6L._AC_UY545_FMwebp_QL65_.jpg"
          />
          <Product
            id="8903851"
            title="Canon EOS Rebel T7 DSLR Camera Bundle with Canon EF-S 18-55mm f/3.5-5.6 is II Lens + 2pc SanDisk 32GB Memory Cards + Accessory Kit"
            price={599.00}
            rating={4}
            image="https://m.media-amazon.com/images/I/71owuc65uYL._AC_UY545_FMwebp_QL65_.jpg"
          />
          <Product
            id="23445930"
            title="Movo iVlogger- iPhone/Android Compatible Vlogging Kit Phone Video Kit Accessories "
            price={79.95}
            rating={5}
            image="https://m.media-amazon.com/images/I/61ItXbGY8JL._AC_SL1500_.jpg"
          />
        </div>
        <div className="home__row">
       <Product
        id="763512"
        title="SAMSUNG 34-Inch Odyssey G5 Ultra-Wide Gaming Monitor with 1000R Curved Screen, 165Hz, 1ms, FreeSync Premium, WQHD (LC34G55TWWNXZA, 2020 Model), Black"
        price={588.99}
        rating={4}
        image="https://m.media-amazon.com/images/I/61XDeaOrrKL._AC_UY545_FMwebp_QL65_.jpg"
       />
       
        </div>
        <div className="home__row">
       <Product
        id="51189124"
        title="FEZIBO Dual Motor Height Adjustable Electric Standing Desk with Keyboard Tray, 55 x 24 Inch Sit Stand Table with Splice Board, Black Frame/Black and Rustic Brown Top"
        price={339.99}
        rating={4}
        image="https://m.media-amazon.com/images/I/71b5IKBxZ9S._AC_SL1500_.jpg"
       />
       <Product
        id="13321511"
        title="BERLMAN Mid Back Mesh Office Chair Adjustable Height Desk Chair Swivel Chair Computer Chair with Armrest Lumbar Support (White)"
        price={89.99}
        rating={5}
        image="https://m.media-amazon.com/images/I/71owWDr763L._AC_UL800_FMwebp_QL65_.jpg"
       />
        </div>
        <div className="home__row">
       <Product
        id="41785"
        title="FEZIBO Dual Motor Height Adjustable Electric Standing Desk with Keyboard Tray, 55 x 24 Inch Sit Stand Table with Splice Board, Black Frame/Black and Rustic Brown Top"
        price={339.99}
        rating={4}
        image="https://m.media-amazon.com/images/I/71b5IKBxZ9S._AC_SL1500_.jpg"
       />
       <Product
        id="8547963"
        title="Patio Wicker Furniture Set 6 Pieces Outdoor PE Rattan Conversation Couch Sectional Chair Sofa Set with Turquoise Cushion"
        price={899.99}
        rating={5}
        image="https://m.media-amazon.com/images/I/81uDGDoj60S._AC_UL800_FMwebp_QL65_.jpg"
       />
        </div>
            </div>
            
        </div>
    )
}

export default Home
