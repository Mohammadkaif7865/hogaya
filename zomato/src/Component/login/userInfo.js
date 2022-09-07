import React, { useEffect, useState } from 'react';
import { Link, withRouter } from "react-router-dom";
const url = "https://authmdkaif.herokuapp.com/api/auth/getInfo";
function UserInfo(props) {
    const [user, setUser] = useState("");
    useEffect(() => {
        if (sessionStorage.getItem('x-access-token')) {
            fetch(url, {
                method: 'GET',
                headers: {
                    'x-access-token': sessionStorage.getItem('x-access-token')
                }
            })
                .then((res) => res.json())
                .then((data) => {
                    setUser(data);
                    sessionStorage.setItem('name', data.name);
                    props.setName(data.name);
                });
        }
        else {
            console.log('Invalid token');
        }
    })


    return (
        <>
            {
                user ? <div className="container">
                    <h3>Name : {user.name}</h3>
                    <h3>Phone Number : {user.phone}</h3>
                    <h3>Email : {user.email}</h3>
                    <Link to="/" className="btn btn-primary">Back to Home</Link>

                </div> :
                    <div className="container">
                        <img
                            src="https://i.ibb.co/GRf0ygr/1-Cs-J05-WEGfun-YMLGfs-T2s-XA.gif"
                            alt="loader"
                        />
                        {/* https://i.ibb.co/m6TSbQ6/loader-gif.gif
                    https://i.ibb.co/GRf0ygr/1-Cs-J05-WEGfun-YMLGfs-T2s-XA.gif"
https://i.ibb.co/30Fq85D/loader.gif                    */}
                        <h2>Loading....</h2>
                    </div>
            }
        </>
    )
}
export default withRouter(UserInfo);