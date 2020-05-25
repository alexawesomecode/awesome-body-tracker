import React from 'react';


const Login = () => {

    const handleClick = (e) => {

        const user = e.target.value
        console.log(user)

    }

    return (

        <div className="w-50 h-50 m-auto d-flex flex-column p-3 bg-primary text-white">
            <h1> awesome body tracker app </h1>
            <h2>Enter your email</h2>
            <input type="text"/>
            <button className="btn btn-outline-light"> <a href="/track">Login </a></button>
        </div>

    )

}

export default Login;