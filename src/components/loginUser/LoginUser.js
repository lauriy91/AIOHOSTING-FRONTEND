import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import AuthContext from "../context/AuthContext";

const objForm = {
  email: "",
  password: ""
}

const LoginUser = () => {
  //Contexto
  const {handleLogin} = useContext(AuthContext);
  //Estados
  const [form, setForm] = useState(objForm);
  //Navegador
  const navigate = useNavigate();

  const handleForm = (e)=>{
    setForm( {...form, [e.target.name]: e.target.value} );
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    handleLogin(form).then(async (resp)=>{
      if(resp.status === 200){
        let json = await resp.json();
        let token = json.token;
        localStorage.setItem('token', token);
        navigate('/');
      }else{
        alert('Invalid credentials');
      }
    }).catch(error=>{
      console.log(error);
    });
  }

    return (
        <>
            <header className="App-header">
            <body>

                <form class="form">
                    <h2 class="form_title">Inicia Sesión</h2>
                    <p class="form_parragraph">¿Aún no tienes cuenta? <a href="#" class="form_link">Entra aquí</a></p>

                    <div class="form_container">
                        <div class="form_group">
                            <input type="text" id="name" class="form_input" placeholder=" "></input>
                            <label for="name" class="form_label"> Nombre: </label>
                            <span class="form_line"></span>
                        </div>
                        <div class="form_group">
                            <input type="text" id="user" class="form_input" placeholder=" "></input>
                            <label for="user" class="form_label"> Usuario: </label>
                            <span class="form_line"></span>
                        </div>
                        <div class="form_group">
                            <input type="password" id="password" class="form_input" placeholder=" "></input>
                            <label for="password" class="form_label"> Contraseña: </label>
                            <span class="form_line"></span>
                        </div>

                        <input type="submit" class="form_submit" value="Entrar"></input>
                        <label class="forgot_password"> <a href="#" class="form_link">Olvidé Contraseña</a></label>
                    </div>
                </form>

    </body>
            </header>
        </>
    )
}

export default LoginUser;