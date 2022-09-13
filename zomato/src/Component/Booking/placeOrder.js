import React, { Component } from 'react';
import './placeOrder.css';


const url = "https://restaurantmysite.herokuapp.com/menuItem";
const purl = "https://restaurantmysite.herokuapp.com/placeOrder";

class PlaceOrder extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: Math.floor(Math.random() * 100000),
            hotel_name: this.props.match.params.restName,
            name: sessionStorage.getItem('name') ? sessionStorage.getItem('name') : '',
            email: sessionStorage.getItem('email') ? sessionStorage.getItem('email') : '',
            cost: 0,
            phone: sessionStorage.getItem('phone') ? sessionStorage.getItem('phone') : '',
            address: 'Hno 28',
            menuItem: '',
            orderId: "",
            count: ""
        }
    }

    checkout = () => {
        let obj = this.state;
        obj.menuItem = sessionStorage.getItem('menu');
        fetch(purl, {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
    }
    renderItem = (data) => {
        if (data) {
            return data.map((item, i) => {
                return (
                    <div className="orderItems" key={item.menu_id}>
                        <span className="tagId">{item.menu_id}</span>
                        <img src={item.menu_image} alt={item.menu_name} />
                        <i className="bi bi-plus btn btn-light icon-font"
                            onClick={() => { this.addItem(item.menu_id) }}>
                        </i> {this.state.count[i]}
                        <i className="bi bi-dash btn btn-light icon-font"
                            onClick={() => { this.removeItem(item.menu_id) }}>
                        </i>
                        <h4>{item.menu_name}</h4>
                        <h5>Rs. {item.menu_price}  x {this.state.count[i]}</h5>
                    </div>
                )
            })
        }
    }
    addItem = (item) => {
        this.state.orderId.push(item);
        this.setState({ orderId: this.state.orderId.sort(function (a, b) { return a - b }) })
        fetch(url, {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.orderId)
        }).then((res) => res.json()).then((data) => {
            this.setState({ menuItem: data }, () => {
                this.myCalulation();
                return "ok";
            })
        })
        sessionStorage.setItem('menu', this.state.orderId);
    }
    removeItem = (item) => {

        if (this.state.orderId.indexOf(item) > -1) {
            this.state.orderId.splice(this.state.orderId.indexOf(item), 1)
            this.setState({ orderId: this.state.orderId.sort(function (a, b) { return a - b }) })
            fetch(url, {
                method: 'POST',
                headers: {
                    'accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state.orderId)
            }).then((res) => res.json()).then((data) => {
                console.log(data);
                this.setState({ menuItem: data }, () => {
                    this.myCalulation();
                    return "ok";
                })
            })
            sessionStorage.setItem('menu', this.state.orderId);
        }
    }
    myCalulation = () => {
        let count = [];
        let j = 1;
        for (let i = 0; i < this.state.orderId.length; i++) {
            if (this.state.orderId[i] === this.state.orderId[i + 1]) {
                j++;
            }
            else {
                count.push(j);
                j = 1;

            }

        }
        this.setState({ count: count });
        sessionStorage.setItem('repeatCount', count);
        let totalPrice = 0;
        if (this.state.menuItem) {
            this.state.menuItem.map((item, i) => {
                totalPrice = totalPrice + count[i] * parseFloat(item.menu_price)
                return 'ok'
            })
        }
        this.setState({ cost: totalPrice });
    }
    //call api 
    componentDidMount() {
        let orderId = [];
        sessionStorage.getItem('menu').split(',').map((item) => {
            orderId.push(parseInt(item));
            return 'ok'
        })
        this.setState({ orderId: orderId });
        fetch(url, {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderId)
        }).then((res) => res.json()).then((data) => {
            this.setState({ menuItem: data }, () => {
                this.myCalulation();
                return "ok";
            })
        })

        // this.myCalulation();
    }
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        if (!sessionStorage.getItem('name')) {
            return (
                <div>

                    <center>
                        <h2>Login First To Place Order</h2>
                    </center>
                </div>
            )

        }
        return (
            <>
                <div className="container">
                    <div className="panel panel-primary">

                        <div className="panel-heading">
                            <h3>Your Order For {this.state.hotel_name}</h3>
                        </div>
                        <div className="panel-body">
                            <form action="https://developerpayment.herokuapp.com/paynow" method="POST">
                                <input type="hidden" name="cost" value={this.state.cost} />
                                <input type="hidden" name="id" value={this.state.id} />
                                <input type="hidden" name="hotel_name" value={this.state.hotel_name} />
                                <div className="form-group col-md-6">
                                    <label htmlFor="fname">Name</label>
                                    <input id="fname" name="name" className="form-control"
                                        value={this.state.name} onChange={this.handleChange} />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="email">Email</label>
                                    <input id="email" name="email" className="form-control"
                                        value={this.state.email} onChange={this.handleChange} />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="phone">Phone</label>
                                    <input id="phone" name="phone" className="form-control"
                                        value={this.state.phone} onChange={this.handleChange} />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="address">Address</label>
                                    <input id="address" name="address" className="form-control"
                                        value={this.state.address} onChange={this.handleChange} />
                                </div>
                                <div className="container">
                                    {this.renderItem(this.state.menuItem)}


                                </div>
                                <h2>Total Price is Rs.{this.state.cost}</h2>
                                <button className="btn btn-success" onClick={this.checkout} type="submit">PlaceOrder</button>
                            </form>
                        </div>


                    </div>
                </div>
            </>
        )
    }

}

export default PlaceOrder