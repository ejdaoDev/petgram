import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from "react-router";
import * as CNT from './Login.component';
import AuthGuard from '../../../../guards/Auth.guard';
//import history from '../../../../services/History';

export default function Login() {
    useEffect(() => {
        document.title = "Generic Company | Login"
     }, []);

    const handleInputChange = (event) => { //console.log(event.target.value);
        setLogin({ ...login, [event.target.name]: event.target.value })
    }

    const [login, setLogin] = useState({ email: '', password: '' });
    const [error, setError] = useState(false);

    const sendData = async (event) => {
        event.preventDefault();
        let result = await CNT.Login(login);
        if (!result) {
            setError(true);
        } else {
            AuthGuard.login(() => {})
            //history.push("/home");
            window.location.href = "#/home";
        }
    };

    return (
        <div>
            {!AuthGuard.isAuthenticated() ?
                <div className=" bg">
                    <br /><br /><br /><br />
                    <div className="container box-shadow col-xl-6 col-lg-8 col-md-6 col-sm-8 col-10 rounded">
                        <div className="row align-items-stretch">
                            <div className="col-0 d-none d-lg-block col-lg-6 font">
                            </div>
                            <div className="col-12 col-lg-6 bg-white p-3 rounded-end">
                                <div className="text-center">
                                    <h3>CreditoFacil</h3>
                                    <p>Login to start your session</p>
                                </div>
                                <form onSubmit={sendData}>
                                    {error ? <div className="form-group" style={{ textAlign: "center" }}>
                                        <span className="help-block">
                                            <strong>Invalid Credentials</strong>
                                        </span>
                                    </div> : undefined}
                                    <div className="mb-3 position-relative">
                                        <input type="email" required className="form-control" name="email" onChange={handleInputChange} placeholder="Email" />
                                        <input type="hidden" required className="form-control" name="project" value="CreditoFacil" />
                                    </div>
                                    <div className="mb-3 position-relative">
                                        <input type="password" required className="form-control" name="password" onChange={handleInputChange} placeholder="Password" />
                                    </div>
                                    <div className="row justify-content-between">
                                    {/*<div className="col">
                                            <input type="checkbox" className="form-checkbox " />
                                            <label className="ml-2">Recuerdame</label>
                                        </div>*/}
                                        <div className="col">
                                            <button type="submit" className="btn btn-primary btn-block">Login</button>
                                        </div>
                                    </div>
                                </form>
                                <div className="mt-3 mb-3">
                                </div>
                                <div className="mb ">
                                    <Link to="/session/forgot-password" style={{ textDecoration: "none" }}>I forgot my password</Link><br />
                                    <Link to="/" style={{ textDecoration: "none" }}>Return</Link><br />
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                </div> : <Redirect to="/home" />
            }
        </div>
    );
}