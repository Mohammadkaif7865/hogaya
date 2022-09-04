import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
const url = "https://authmdkaif.herokuapp.com/api/auth/getInfo";
export default function UserInfo(props) {
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
    }, [])
    return (
        <>
            <div className="container">
                <h3>Name : {user.name}</h3>
                <h3>Phone Number : {user.phone}</h3>
                <h3>Email : {user.email}</h3>
                <Link to="/" className="btn btn-primary">Back to Home</Link>
            </div>
        </>
    )
}