import React from 'react'
import './Home.css';
import Product from './Product.js';
import GradientOld from './images/gradientOld.jpg';


function Home() {
    return (
        <div className="home">
            <img className="home__image"src={GradientOld} alt=""/>
        
        <div className="home__row">
        <Product  
        id="1533"
        title="JagerMeister"
        price={12.55}
        rating={4}
        image="https://i.pinimg.com/564x/df/90/14/df901496f581499c18e42c04c7725f0f.jpg"  />
        

        <Product  
        id="1522"
        title="Jack Daniels Tennessee 1Ltr"
        price={1800.71}
        rating={4}
        image="https://i.pinimg.com/236x/3a/d3/e4/3ad3e4d0c4b4653a5003e9eb1119b42d.jpg"  />
        </div>


        <div className="home__row"> 
        <Product  
        id="133"
        title="Chivas Regal Blended Scotch Whisky 750ml"
        price={3200.00}
        rating={5}
        image="https://i.pinimg.com/564x/39/2d/b6/392db664861e287875ab9f5a4557c087.jpg"  />


        <Product  
        id="152223"
        title="Johnnie Walker Red Label Whisky 1Ltr"
        price={1433.00}
        rating={4}
        image="https://i.pinimg.com/564x/7b/9a/7c/7b9a7c87071cb3e440d902fa51b1e1f0.jpg"  />


        <Product  
        id="100"
        title="Absolute Vodka 780ml"
        price={1569.50}
        rating={5}
        image="https://i.pinimg.com/564x/af/3b/9a/af3b9a0b2d981e728b91713d1426735e.jpg"  />
        
        </div>

        
        <div className="home__row"> 
        <Product  
        id="1999"
        title="Bacardi 4 bottle pack bundle"
        price={5555.00}
        rating={5}
        image="https://s.marketwatch.com/public/resources/images/MW-GH720_bacard_ZBR_20180420111425.jpg"  />
        </div>


        </div>
    );
}

export default Home
