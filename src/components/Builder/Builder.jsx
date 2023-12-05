import React from 'react';
import classes from './Builder.module.css';
import Items from './Items/Items';
import Modal from './Modal/Modal';
import TotalPrice from './TotalProce/TotalPrice';

const Builder = ({ items, price, add, remove, scoops }) => {
    return (
        <div>
            <div className={classes.builder}>
                <h3>Sumita's ICE CREAM Shop</h3>
                <Items items={items} add={add} remove={remove} scoops={scoops} />
                <TotalPrice price={price} />
                <button type="button" className={[classes.order, 'rounded'].join(' ')}>
                    Buy Now
                </button>
            </div>
            <Modal>Hello Modal</Modal>
        </div>
    );
};

export default Builder;
