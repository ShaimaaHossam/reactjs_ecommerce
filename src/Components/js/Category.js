import React from 'react';
import '../css/Category.css';
class Category extends React.Component{
    categories = [
        {
            title: 'Category name', 
            products: [
                {
                    title: 'Apollo Running Shorts',
                    count: 12,
                    price: 20,
                    link: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2xvdGhlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
                },
                {
                    title: 'Apollo Running Shorts',
                    count: 2,
                    price: 50,
                    link: 'https://images.unsplash.com/photo-1467043237213-65f2da53396f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2xvdGhlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
                },
                {
                    title: 'Apollo Running Shorts',
                    count: 0,
                    price: 100,
                    link: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hvcnRzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
                },
                {
                    title: 'Apollo Running Shorts',
                    count: 4,
                    price: 30,
                    link: 'https://images.unsplash.com/photo-1602810316498-ab67cf68c8e1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
                },
                {
                    title: 'Apollo Running Shorts',
                    count: 12,
                    price: 20,
                    link: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2xvdGhlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
                },
                {
                    title: 'Apollo Running Shorts',
                    count: 2,
                    price: 50,
                    link: 'https://images.unsplash.com/photo-1467043237213-65f2da53396f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2xvdGhlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
                },
            ]
        },  
    ];
    render(){
        return(
            <div className="container">
                {this.categories.map(category => (
                    <div className="category">
                        <p className="title">{category.title}</p>
                        <section className="cards-container">
                                {category.products.map(product => (
                                    <article className="card">
                                        <img width="250" height="250" src={product.link}/>
                                        <svg className="mt rounded-button" height="20" width="20" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" fill="#ffffff" clip-rule="evenodd"><path d="M13.5 21c-.276 0-.5-.224-.5-.5s.224-.5.5-.5.5.224.5.5-.224.5-.5.5m0-2c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5m-6 2c-.276 0-.5-.224-.5-.5s.224-.5.5-.5.5.224.5.5-.224.5-.5.5m0-2c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5m16.5-16h-2.964l-3.642 15h-13.321l-4.073-13.003h19.522l.728-2.997h3.75v1zm-22.581 2.997l3.393  11.003h11.794l2.674-11.003h-17.861z"/></svg>
                                        <p className="details">{product.title}</p>
                                        <p className="details">${product.price}</p>
                                    </article>
                                ))}                         
                        </section>
                    </div>
                ))}
                
            </div>
        );   
    }
}
export default Category;