import React, { Component } from 'react';

class MenuDisplay extends Component {

    orderId = [];

    placeOrder = (id) => {
        this.orderId.push(id)
        this.props.finalOrder(this.orderId)
    }

    removeOrder = (id) => {
        if (this.orderId.indexOf(id) > -1) {
            this.orderId.splice(this.orderId.indexOf(id), 1)
        }
        this.props.finalOrder(this.orderId)
    }

    renderCart = (orders) => {
        if (orders) {
            return orders.map((item, index) => {
                return (
                    <b key={index}>{item}&nbsp;</b>
                )
            })
        }
    }

    renderMenu = ({ menudata }) => {
        if (menudata) {
            return menudata.map((item) => {
                return (
                    <div key={item.menu_id} className="menuDisplay">
                        <div className="imageContainer">
                            <span>{item.menu_id}</span>
                            <img src={item.menu_image} alt="img" />
                        </div>
                        <div className="desMeal">
                            <p> {item.menu_name} - ₹{item.menu_price}</p>
                            <button className="btn btn-light icon-font2"
                                onClick={() => { this.placeOrder(item.menu_id) }}>
                                <i className="bi bi-plus"></i>
                            </button> &nbsp;
                            <button className="btn btn-light icon-font2"
                                onClick={() => { this.removeOrder(item.menu_id) }}>
                                <span className="bi bi-dash"></span>
                            </button>
                        </div>
                        {/* <div >
                            <b>{item.menu_id}</b>
                            <img src={item.menu_image} alt="img" />&nbsp;
                            {item.menu_name} - ₹{item.menu_price}
                        </div>
                        <div>
                            <button className="btn btn-light icon-font2"
                                onClick={() => { this.placeOrder(item.menu_id) }}>
                                <i className="bi bi-plus"></i>
                            </button> &nbsp;
                            <button className="btn btn-light icon-font2"
                                onClick={() => { this.removeOrder(item.menu_id) }}>
                                <span className="bi bi-dash"></span>
                            </button>
                        </div> */}
                    </div>

                )
            })
        }
    }

    render() {
        return (
            <div>
                <div className="col-md-12 bg-success">
                    <h1>Item Added</h1>
                    Item Number {this.renderCart(this.orderId)} Added
                </div>
                <div className="col-md-12 bg-info">
                    {this.renderMenu(this.props)}
                </div>
            </div>

        )
    }
}

export default MenuDisplay;