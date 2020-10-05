import React from 'react'
import './Home.css'
import Product from '../product/Product'

function Home() {
    return (
        <div className="home">
           <div className="home_container">
               <img className="home_image" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_es_US_1x._CB432534552_.jpg" alt=""/>
             <div className="home_row">
             <Product id="123" title="the lean start" price={29.99}
             image="https://images-na.ssl-images-amazon.com/images/G/01/xba/BTF_US_All_Sep2019_1x._CB440956261_SY260_.jpg"
             rating={5}/>
             <Product id="124" title="the lean start" price={29.99}
             image="https://images-na.ssl-images-amazon.com/images/G/01/xba/BTF_US_All_Sep2019_1x._CB440956261_SY260_.jpg"
             rating={5}/>
             </div>
             <div className="home_row">
             <Product id="125" title="the lean start" price={29.99}
             image="https://images-na.ssl-images-amazon.com/images/G/01/xba/BTF_US_All_Sep2019_1x._CB440956261_SY260_.jpg"
             rating={5}/>
             <Product id="126" title="the lean start" price={29.99}
             image="https://images-na.ssl-images-amazon.com/images/G/01/xba/BTF_US_All_Sep2019_1x._CB440956261_SY260_.jpg"
             rating={5}/>
             <Product id="127" title="the lean start" price={29.99}
             image="https://images-na.ssl-images-amazon.com/images/G/01/xba/BTF_US_All_Sep2019_1x._CB440956261_SY260_.jpg"
             rating={5}/>
             </div>
             <div className="home_row">
             <Product id="128" title="the lean start" price={29.99}
             image="https://images-na.ssl-images-amazon.com/images/G/01/xba/BTF_US_All_Sep2019_1x._CB440956261_SY260_.jpg"
             rating={5}/>
             </div>
           </div>
        </div>
    )
}

export default Home
