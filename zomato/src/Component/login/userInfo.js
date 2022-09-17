import React, { useEffect, useState } from 'react';
import {
    withRouter
} from "react-router-dom";
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
                    sessionStorage.setItem('email', data.email);
                    sessionStorage.setItem('phone', data.phone);
                    props.setName(data.name);
                });
        }
        else {
            console.log('Invalid token');
        }
    }, [])


    return (
        <>
            {
                user ? <div className="container">
                    <div className="panel panel-primary">
                        <div className="panel-heading">User Info</div>
                        <div className="panel-body">
                            <div> <b>Name</b> : {user.name}</div>
                            <div> <b>Phone Number</b> : {user.phone}</div>
                            <div> <b>Email</b> : {user.email}</div>
                        </div>
                        <div className="panel-footer"> <button onClick={() => props.history.go(-2)} className="btn btn-success">Go back</button>
                            <div style={{ textAlign: 'center' }}>
                                <small>Your info security and <u>privacy</u> is our top priority and we are compeletely <u>responsible</u> for any data breach</small>
                            </div>
                        </div>
                    </div>



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