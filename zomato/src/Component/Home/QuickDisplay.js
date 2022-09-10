import React from 'react';
import { Link } from 'react-router-dom';
import "../../App.css";

const QuickDisplay = (props) => {

    const listMeal = ({ mealData }) => {
        if (mealData) {
            return mealData.map((item) => {
                return (
                    <Link to={`/listing/${item.mealtype_id}`} key={item._id}>

                        <div className="p-i-to">
                            <img src={item.meal_image} alt={item.mealtype} />
                            <div style={{paddingTop: '10px'}}>
                                <p className="text-qsh">    {item.mealtype}</p>
                                {item.content}
                            </div>

                        </div>
                    </Link>
                )
            })
        }

    }

    return (
        <div className='paths-to'>
            {listMeal(props)}
        </div>
    )
}




export default QuickDisplay;