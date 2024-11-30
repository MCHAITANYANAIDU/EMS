import React, { useState } from "react";
import "./style.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
 

export const Login = () => {

    const [values,setvalues]= useState({
        email:"",
        password:"" 

    })
    const [error,setError] = useState(null)
    

    const navigate = useNavigate() 
   axios.defaults.withCredentials = true;
  

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3000/auth/adminlogin',values)
        .then(result=> {
            if(result.data.loginstatus){
                navigate("/dashboard" )

            }else{

                setError(result.data.Error)
            }
            
        })
        .catch(err=> console.log(err))
 
    }




    return (
        <div className="d-flex justify-content-center align-items-center vh-100 login-page">
            <div className="p-4 rounded w-25 border login-form">
                <div className="text-danger">
                    {error && error} 

                </div>
                <h2 className="text-center mb-4">Login Page</h2>

                <form onSubmit={handleSubmit}>
                    {/* Email Input */}
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            <strong>Email:</strong>
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            autoComplete="off"
                            placeholder="Enter your email"
                            onChange={(e)=> setvalues({...values, email : e.target.value})}
                            className="form-control rounded-0"
                            required
                        />
                    </div>

                    {/* Password Input */}
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                            <strong>Password:</strong>
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            onChange={(e)=> setvalues({...values, password : e.target.value})}
                            className="form-control rounded-0"
                            required
                        />
                    </div>

                    {/* Login Button */}
                    <button type="submit" className="btn btn-success w-100 rounded-0 mb-3">
                        Log in
                    </button>

                    {/* Agree to Terms Checkbox */}
                    <div className="form-check">
                        <input
                            type="checkbox"
                            id="agreeTerms"
                            name="agreeTerms"
                            className="form-check-input"
                            required
                        />
                        <label htmlFor="agreeTerms" className="form-check-label">
                            I agree to the <a href="#">terms and conditions</a>
                        </label>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
