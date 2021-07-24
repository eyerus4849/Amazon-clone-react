import React from 'react'
import './home.css'
import Product from './Product'

function Home() {
    return (
        <div>
            <div className="home__container">
            <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/xcm/brand_truths/4_29_Update/C_TBDB_SMB_GW_hero_desktop_3000x1200_2x._CB670680788_.jpg"
          alt=""
        />
        <div className="home__row">
       <Product
        id="49538094"
        title="Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U, Vega 3 Graphics, 4GB DDR4, 128GB SSD, Backlit Keyboard, Windows 10 in S Mode, A515-43-R19L, Silver"
        price={406.99}
        rating={4}
        image="https://m.media-amazon.com/images/I/41vMYgD92xL._AC_SY322_.jpg"
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
            title="Microsoft Xbox Series S 512GB Game All-Digital Console + 1 Xbox Wireless1 Controller, White - 1440p Gaming Resolution, 4K Streaming Media Playback, WiFi"
            price={355.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/61Q2hRo4BCL._SL1200_.jpg"
          />
          <Product
            id="3254354345"
            title="2021 Wireless Earbuds, Tribit Qualcomm QCC3040 Bluetooth 5.2, 4 Mics CVC 8.0 Call Noise Reduction 50H Playtime Clear Calls Volume Control True Wireless Bluetooth Earbuds Earphones, FlyBuds C1 Black"
            price={69.99}
            rating={4}
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
            title="Movo iVlogger- iPhone/Android Compatible Vlogging Kit Phone Video Kit Accessories: Phone Tripod, Phone Mount, LED Light and Cellphone Shotgun Microphone for Phone Video Recording for YouTube, Vlog"
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
            </div>
        </div>
    )
}

export default Home
