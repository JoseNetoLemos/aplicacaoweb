import React, {useState} from "react";
import './style.css';

const LoginPage = () => {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const HandleSubmit = (e) => {
    e.preventDefault(); 
    
    console.log("Sobmit", {email, password});
};


    return (
        <div id="login">

            <h1 className="title"> Login do Sistema </h1>
            <form className="form" onSubmit={HandleSubmit}>
                <div className="field">
                    <label htmlFor="email">email</label>
                    <input type="email" name="email" id="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="field">
                    <label htmlFor="password">senha</label>
                    <input type="password"  name="password" id="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className="action">
                    <button type="submit">Entrar</button>
                </div>
            </form>
        </div>


    );

}

export default LoginPage