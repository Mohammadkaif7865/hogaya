import React from 'react';
import {Link} from 'react-router-dom';

const QuickDisplay = (props) => {

    const listMeal = ({mealData}) => {
        if(mealData){
            return mealData.map((item) => {
                return(
                    <Link to={`/Listing/${item.mealtype_id}`} key={item._id}>
                        <div className="tileContainer">
                            <div className="tileComponent1">
                                <img src={item.meal_image} alt={item.mealtype}/>
                            </div>
                            <div className="tileComponent2">
                                <div className="componentHeading">
                                    {item.mealtype}
                                </div>
                                <div className="componentSubHeading">
                                    {item.content}
                                </div>
                            </div>
                        </div>
                    </Link>
                )
            })
        }

    }

    return(
        <div id="main">
            {listMeal(props)}
        </div>        
    )
}


export default QuickDisplay;