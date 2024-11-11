import React from "react";
import ReactDOM from "react-dom/client";
import  menu  from './menu';
import ShopStatus from './shopStatus';
import './style.css';
import PizzaList from './pizzaList.js'

function App() {
    return(
        <div>

            <div class="shopName">
                <h1>JIM'S PIZZA CO.</h1>
            </div>
            <div class="title">
                <h3>OUR MENU</h3>
            </div>
            <div class="content">
                <p>Authentic Italian cuisine, all from out stone oven</p>
            </div>
            <div class="pizza-grid-container">
                <PizzaList />
            </div>
            <div class="shopStatus">
                <ShopStatus />
            </div>
            <div class="OrderBTN">
                <div class="totalPrice">
                    <totalPrice/>
                </div>
                <button type="submit">Proceed To Payment</button>
            </div>

        </div>
    );
}

const root = ReactDOM. createRoot(document. getElementById("root"));
root.render(<App />);

//COMPONENTS
function totalPrice(){
    let quantity = document.querySelector(".quantity");
    let price = menu.price
    totalPrice = price * quantity
}


