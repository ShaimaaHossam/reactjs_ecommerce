import React from "react";
import "../css/Product.css";
import { gql } from "apollo-boost";
import {graphql} from 'react-apollo';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
const getProducts = gql`
  query GetProducts {
    category {
      name
      products {
        id
        name
        inStock
        gallery
        description
        category
        attributes {
          id
          name
          type
          items {
            displayValue
            value
            id
          }
        }
        prices {
          currency
          amount
        }
      }
    }
  }
`;

class Product extends React.Component{
    constructor(props){
        super(props);
        this.state = { image: 0 };
    }
    displayImage = (value) => {
        this.setState({ image: value});
      };
    render(){
        const id = this.props.match.params.id;
        const data = this.props.data;
        console.log(data);
        if(data.loading){
            return (<p>Loading ...</p>);
        } 
        else return(
                data.category.products.map((product, index)=>(
                    product.id === id ? 
                    <div  key={index} className="prodContainer">
                        <div className="imageDisplay">
                          {product.gallery.length > 1 ? <div className="verticalDisplay">
                                {product.gallery.map((image, index)=>(
                                    <img onClick={()=>this.displayImage(index)} className="little" width="70" height="70" key={index} src={image}/>
                                ))}
                            </div> : ''}
                            
                            <img width="400" height="450" src={product.gallery[this.state.image]} />
                        </div>
                        
                        <div className="productDetails">
                            <div className="name">{product.name}</div>
                            <div className="subname">{product.category}</div>
                            {product.attributes.map((attr,index)=>(
                              <div key={index}>
                                  <div className="attr">{attr.name}:</div>
                                  {attr.type==="swatch" ? 
                                     <div className="flex">
                                       {attr.items.map((item,index)=>(
                                         item.displayValue==="Blue" ? 
                                         <div className="item swatch blue"></div> :
                                         item.displayValue==="Green" ? 
                                         <div className="item swatch green"></div> :
                                         item.displayValue==="White" ? 
                                         <div className="item swatch white"></div> :
                                         item.displayValue==="Cyan" ? 
                                         <div className="item swatch cyan"></div> :
                                         item.displayValue==="Black" ? 
                                         <div className="item swatch black"></div> :
                                         ''
                                       ))}
                                     </div> 
                                     
                                     : 
                                     <div className="flex">
                                     {attr.items.map((item, index)=>(
                                         <div className="item" key={index}>
                                           {item.displayValue}
                                         </div>
                                     ))}
                                 </div>}
                                  
                                  
                              </div>
                            ))}
                            <div className="attr">Price:</div>
                            <div className="price">{
                                          this.props.currency===0 ? '$'+product.prices[0].amount :
                                          this.props.currency===1 ? '£'+product.prices[1].amount :
                                          this.props.currency===2 ? 'AUD'+product.prices[2].amount :
                                          this.props.currency===3 ? '¥'+product.prices[3].amount :
                                          this.props.currency===4 ? '₽'+product.prices[4].amount : ''}</div>
                            <div className="addbtn">
                                <a>ADD TO CART</a>
                            </div>
                            <div className="attr description">Description:</div>
                            <div className="descriptionContainer">
                            {ReactHtmlParser(product.description)}
                            </div>
                            
                            
                        </div>

                    </div>
                    
                    
                    
                    : ''
                ))
        );
        
    }
}

export default graphql(getProducts)(Product);
