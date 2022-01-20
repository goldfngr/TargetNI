import React, { Component } from 'react';
import CardItem from './CardItem';
import './Cards.css';


function Cards() {

 let $desc = 'Target Network Integration';

    return (
        <div className="cards">
            <h3><span>Target Network Integration known as TNI</span> is focused in providing services to both large and small technology partners.</h3>

            <p>Our portfolio of services range from LAN, WLAN, WAN, Data Center rebuild to Audio Visual installations.  We work closely with our partners to develop the correct solutions for the customer and provide the support to deliver a “Target” solution.  We are highly focused on delivering a “customer quality” experience.</p>

            <p>TNI is focused in providing services to Education, Government, Retail, Hotel and Hospitality Chains along with large corporate accounts.</p>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items"> 
                        <CardItem
                        src='./images/img-9.jpg'
                        text= 'Target Network Integration'
                        label='Servers'
                        path='/services'
                        />
                        <CardItem
                        src='./images/img-2.jpg'
                        text= 'Target Network Integration'
                        label='Networking'
                        path='/services'
                        />
                    </ul>
                    <ul className="cards__items"> 
                        <CardItem
                        src='./images/img-3.jpg'
                        text='Target Network Integration'
                        label='Routers'
                        path='/services'
                        />
                        <CardItem
                        src='images/img-4.jpg'
                        text='Target Network Integration'
                        label='Security'
                        path='/services'
                        />
                        <CardItem
                        src='images/img-8.jpg'
                        text='Target Network Integration'
                        label='WiFI'
                        path='/services'
                        />
                    </ul>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  
                </p>
            </div>
        </div>
    )
}


export default Cards
