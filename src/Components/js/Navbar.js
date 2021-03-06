import React from "react";
import "../css/Navbar.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { toggleCurrency: false,  toggleCart: false };

    this.viewCurrency = this.viewCurrency.bind(this);
    this.viewCart = this.viewCart.bind(this);
  }
  viewCurrency() {
    if(this.state.toggleCart){
        this.props.switchBackground("bgwhite");
        this.setState({toggleCart: false})
    }
    this.setState((prevState) => ({
      toggleCurrency: !prevState.toggleCurrency,
    }));
  }
  viewCart() {
    if(this.state.toggleCurrency){
        this.setState({toggleCurrency: false})
    }
    this.setState((prevState) => ({
        toggleCart: !prevState.toggleCart,
    }));
    if(!this.state.toggleCart){
        this.props.switchBackground("bggray");
    }
    else{
        this.props.switchBackground("bgwhite");
    }
  }
  render() {
    console.log("from nav");
    console.log(this.props);
    return (
      <div className="Navbar">
        <div className="outer">
          <div className="flex nav-left">
            <Link to="/" className="link">
              WOMEN
            </Link>
            <Link to="/" className="link">
              MEN
            </Link>
            <Link to="/" className="link">
              KIDS
            </Link>
          </div>
          <div>
            <img
              alt="storfront"
              className="navlink"
              width="40px"
              height="40px"
              src="https://headless-security.org/gfx/logo.png"
            />
          </div>
          <div className="flex right">
            <div onClick={this.viewCurrency} className="flex navlink space">
              <p>
                {this.props.currency === 0
                  ? "$"
                  : this.props.currency === 1
                  ? "£"
                  : this.props.currency === 2
                  ? "AUD"
                  : this.props.currency === 3
                  ? "¥"
                  : this.props.currency === 4
                  ? "₽"
                  : ""}
              </p>
              {this.state.toggleCurrency ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt2"
                  height="10"
                  width="10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 15l7-7 7 7"
                  />
                </svg>
              ) : (
                <svg
                  className="mt2"
                  height="10"
                  width="10"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              )}
            </div>
            <div onClick={this.viewCart} className="cartIcon">
              <svg
                className="shopping navlink"
                height="20px"
                viewBox="0 -31 512.00026 512"
                width="20px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m164.960938 300.003906h.023437c.019531 0 .039063-.003906.058594-.003906h271.957031c6.695312 0 12.582031-4.441406 14.421875-10.878906l60-210c1.292969-4.527344.386719-9.394532-2.445313-13.152344-2.835937-3.757812-7.269531-5.96875-11.976562-5.96875h-366.632812l-10.722657-48.253906c-1.527343-6.863282-7.613281-11.746094-14.644531-11.746094h-90c-8.285156 0-15 6.714844-15 15s6.714844 15 15 15h77.96875c1.898438 8.550781 51.3125 230.917969 54.15625 243.710938-15.941406 6.929687-27.125 22.824218-27.125 41.289062 0 24.8125 20.1875 45 45 45h272c8.285156 0 15-6.714844 15-15s-6.714844-15-15-15h-272c-8.269531 0-15-6.730469-15-15 0-8.257812 6.707031-14.976562 14.960938-14.996094zm312.152343-210.003906-51.429687 180h-248.652344l-40-180zm0 0" />
                <path d="m150 405c0 24.8125 20.1875 45 45 45s45-20.1875 45-45-20.1875-45-45-45-45 20.1875-45 45zm45-15c8.269531 0 15 6.730469 15 15s-6.730469 15-15 15-15-6.730469-15-15 6.730469-15 15-15zm0 0" />
                <path d="m362 405c0 24.8125 20.1875 45 45 45s45-20.1875 45-45-20.1875-45-45-45-45 20.1875-45 45zm45-15c8.269531 0 15 6.730469 15 15s-6.730469 15-15 15-15-6.730469-15-15 6.730469-15 15-15zm0 0" />
              </svg>
              {this.state.inc > 0 ? (
                <div className="quantity">{this.state.inc}</div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className="dropdown">
          {this.state.toggleCurrency ? (
            <div className="flex-col currency">
              <a
                onClick={() => this.props.updateCurrency(0)}
                className="curren"
              >
                $ USD
              </a>
              <a
                onClick={() => this.props.updateCurrency(1)}
                className="curren"
              >
                £ GBP
              </a>
              <a
                onClick={() => this.props.updateCurrency(2)}
                className="curren"
              >
                $ AUD
              </a>
              <a
                onClick={() => this.props.updateCurrency(3)}
                className="curren"
              >
                ¥ JPY
              </a>
              <a
                onClick={() => this.props.updateCurrency(4)}
                className="curren"
              >
                ₽ RUB
              </a>
            </div>
          ) : (
            ""
          )}
        </div>
        
            {this.state.toggleCart ? 
            <div class="cartOverlay">
            <span class="overlayHead"><b>My Bag,</b>0 items</span>
            <div class="totalPrice flex">
                <span><b>Total:</b></span>
                <span><b>$0</b></span>
            </div>
            <div class="flex">
                <a class="bagBtn">VIEW BAG</a>
                <a class="checkOutBtn">CHECK OUT</a>
            </div> </div>: ''
            }
            
        
      </div>
    );
  }
}
export default connect()(Navbar);
