import React from "react";
import "../css/Product.css";
import { gql } from "apollo-boost";
import {graphql} from 'react-apollo';
import ReactHtmlParser from 'react-html-parser';
import {connect} from 'react-redux';
import {addToCart} from '../../redux/Shopping/cart-actions';
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
        this.state = { 
          image: 0,
          toggleItem: true,
        };
    }
    displayImage = (value) => {
        this.setState({ image: value});
      };
    toggleItem = (selectedid, attribute) => {
      let items = attribute.items;
      if(attribute.type==="swatch"){
        for(let i=0; i<items.length; i++){
          if(items[i].id===selectedid){
            console.log(items[i].id);
            document.getElementById(selectedid+attribute.name).classList.add("swatchSelected");
          }
          else{
            document.getElementById(items[i].id+attribute.name).classList.remove("swatchSelected");
          }
        }
      }
      else{
        for(let i=0; i<items.length; i++){
          if(items[i].id===selectedid){
            document.getElementById(selectedid+attribute.name).classList.add("itemSelected");
            document.getElementById(selectedid+attribute.name).classList.remove("itemNotSelected");
          }
          else{
            document.getElementById(items[i].id+attribute.name).classList.remove("itemSelected");
          }
        }
      }
      
    }
    checkRequest = (product) => {
      let attribute = product.attributes;
      let flag=0;
      let sflag=0;
      let swatchExists = false;
      let selected = [{}];
      for(let i=0; i < attribute.length; i++){
        let items = attribute[i].items;
        for(let j=0; j<items.length; j++){
          if(attribute[i].type==="swatch"){
            swatchExists = true;
            if(document.getElementById(items[j].id+attribute[i].name).classList.contains("swatchSelected") ){
              sflag=1;
              selected.push({productID: product.id, attributename: attribute[i].name, value: items[j].displayValue});
              
            }
              
          }
          else{
            if(document.getElementById(items[j].id+attribute[i].name).classList.contains("itemSelected") )
             {
              flag=1;
              selected.push({productID: product.id ,attributename: attribute[i].name, value: items[j].displayValue});
              
             } 
          }
        }
        
        if((flag===1 && (swatchExists && sflag===1)) || (flag===1 && !swatchExists)){
          document.getElementById("alert").classList.remove("none");
          document.getElementById("alert").innerHTML = "Item added successfully!";
          document.getElementById("alert").classList.remove("alert");
          document.getElementById("alert").classList.add("alertgreen");
          this.handleAddItem(selected);
          
        }
        else{
          document.getElementById("alert").classList.remove("none");
        }
    }
    }
    handleAddItem = (product) => {
      const { dispatch } = this.props;                
      dispatch(
        addToCart(product)
      )
    }
    
    render(){
      console.log(this.props);
        const id = this.props.match.params.id;
        const data = this.props.data;
        console.log(data);
        if(data.loading){
            return (<p className="title">Loading ...</p>);
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
                                       {attr.items.map((item, index)=>(
                                         item.displayValue==="Blue" ? 
                                         <div key={index} className="colorContainer">
                                              <div id={item.id+attr.name}  onClick={()=>this.toggleItem(item.id,  attr)} className="item swatch blue"></div> 
                                         </div> :
                                         item.displayValue==="Green" ? 
                                         <div key={index} className="colorContainer">
                                              <div id={item.id+attr.name}  onClick={()=>this.toggleItem(item.id,  attr)} className="item swatch green"></div> 
                                         </div>:
                                         item.displayValue==="White" ? 
                                         <div key={index} className="colorContainer">
                                              <div id={item.id+attr.name}  onClick={()=>this.toggleItem(item.id,  attr)} className="item swatch white"></div> 
                                         </div>:
                                         item.displayValue==="Cyan" ? 
                                         <div key={index} className="colorContainer">
                                              <div id={item.id+attr.name}  onClick={()=>this.toggleItem(item.id,  attr)} className="item swatch cyan"></div> 
                                         </div>:
                                         item.displayValue==="Black" ? 
                                         <div key={index} className="colorContainer">
                                              <div id={item.id+attr.name} onClick={()=>this.toggleItem(item.id,  attr)} className="item swatch black"></div> 
                                         </div>:
                                         ''
                                       ))}
                                     </div> 
                                     
                                     : 
                                     <div>
                                          <div className="flex">
                                            {attr.items.map((item, index)=>(
                                                <div  className="item" id={item.id+attr.name} onClick={()=>this.toggleItem(item.id,  attr)} className="item" key={index}>
                                                  {item.displayValue}
                                                </div>
                                            ))}
                                          </div> 
                                     </div>
                                     
                                 }
                                  
                                  
                              </div>
                            ))}
                            <div className="attr">Price:</div>
                            <div className="price">{
                                          this.props.currency===0 ? '$'+product.prices[0].amount :
                                          this.props.currency===1 ? '£'+product.prices[1].amount :
                                          this.props.currency===2 ? 'AUD'+product.prices[2].amount :
                                          this.props.currency===3 ? '¥'+product.prices[3].amount :
                                          this.props.currency===4 ? '₽'+product.prices[4].amount : ''}</div>
                            
                            <div onClick={()=>this.checkRequest(product)} className="addbtn">
                                <a>ADD TO CART</a>
                            </div>
                            <div id="alert" className="alert none">Please select your preferences.</div>
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
export default connect(

)(graphql(getProducts)(Product));
