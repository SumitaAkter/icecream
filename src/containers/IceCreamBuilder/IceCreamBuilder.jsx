import React, { Component } from 'react';
import Builder from '../../components/Builder/Builder';
import IceCream from '../../components/IceCream/IceCream';
import classes from './IceCreamBuilder.module.css';

export default class IceCreamBuilder extends Component {
    state = {
        items: {Chocolate:100, Vanilla:200, Strawberry:300, Orange: 300, Lemon: 500, Mango:300},
        scoops: [],
        totalPrice: 0,
    };


    addScoop = (scoop) => {
        const { scoops, items } = this.state;
        const workingScoops = [...scoops];
        workingScoops.push(scoop);
        this.setState((prevState) => {
            return {
                scoops: workingScoops,
                totalPrice: prevState.totalPrice + items[scoop],
            };
        });
    };

    removeScoop = (scoop) => {
        const { scoops, items } = this.state;
        const workingScoops = [...scoops];

        const scoopIndex = workingScoops.findIndex((sc) => sc === scoop);
        //const countArr = countBy(scoops)
        const countObj = {}
        for (let i = 0; i < scoops.length; i++) {
            let scoop = scoops[i]
            //countObj[scoop] ? ( countObj[scoop] += 1) : ( countObj[scoop] = 1)
            if (countObj[scoop]) {
                countObj[scoop] += 1;
            }
            else { 
                countObj[scoop] = 1; 
            }
        }


        if (countObj[scoop] > 0) {
            workingScoops.splice(scoopIndex, 1);
            this.setState((prevState) => {
                return {
                    scoops: workingScoops,
                    totalPrice: prevState.totalPrice - items[scoop],
                };
            });
        }
    };

    render() {
        const { items, totalPrice, scoops } = this.state;
        return (
            <div className={['container', classes.container].join(' ')}>
                <IceCream scoops={scoops} />
                <Builder
                    items={items}
                    price={totalPrice}
                    add={this.addScoop}
                    remove={this.removeScoop}
                    scoops={scoops}
                />
            </div>
        );
    }
}
