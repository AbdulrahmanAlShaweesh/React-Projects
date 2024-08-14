
 import './MostPopular.css'; 
import {Card} from '../../../Components/index.js'; 
import productsData from '../../../data.js';

const MostPopular = () => {
  return (
      <>
          <div className="desction-wrappter">
                  <div className="section-title">
                      <h4>most popular</h4>
                      <span> right now</span>
                  </div>
                  <div className="most-popular-items">
                        
                        {
                          productsData.map((items, index) => {
                              return (
                                    <Card key={index} image={items.image} title={items.title} 
                                    category={items.category} rating={items.rating} downloaded={items.downloaded}
                              />)
                          })
                        }
                         
                  </div>
          </div>
      </>
  )
}

export default MostPopular