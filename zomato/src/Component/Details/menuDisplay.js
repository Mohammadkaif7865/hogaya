import React,{Component} from 'react';

class MenuDisplay extends Component {

    orderId = [];

    placeOrder = (id) => {
        this.orderId.push(id)
        this.props.finalOrder(this.orderId)
    }

    removeOrder = (id) => {
        if(this.orderId.indexOf(id) > -1 ) {
            this.orderId.splice(this.orderId.indexOf(id),1)
        }
        this.props.finalOrder(this.orderId)
    }

    renderCart = (orders) => {
        if(orders){
            return orders.map((item,index) => {
                return(
                    <b key={index}>{item}&nbsp;</b>
                )
            })
        }
    }

    renderMenu = ({menudata}) => {
        if(menudata){
            return menudata.map((item) => {
                return(
                    <div key={item.menu_id} className="menuDisplay">
                            <div className="col-md-7">
                                <b>{item.menu_id}</b>
                                <img src={item.menu_image} style={{height:80,width:80}} alt="img"/>&nbsp;
                                {item.menu_name} - Rs.{item.menu_price}
                            </div>
                            <div className="col-md-4">
                                <button className="btn btn-light icon-font2"
                                onClick={() => {this.placeOrder(item.menu_id)}}>
                                    <i className="bi bi-plus"></i>
                                </button> &nbsp;
                                <button className="btn btn-light icon-font2"
                                onClick={() => {this.removeOrder(item.menu_id)}}>
                                    <span className="bi bi-dash"></span>
                                </button>
                            </div>   
                    </div>
                    
                )
            })
        }
    }

    render(){
        return(
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