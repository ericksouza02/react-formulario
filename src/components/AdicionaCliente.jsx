import React from "react";
import logo from '../logo.svg'
import '../App.css';

import { Formik, Field } from "formik";
import { useField } from "formik";

import * as yup from 'yup'

const AdicionaCliente = () => {

    const esquema = yup.object({
        usuario: 
            yup.string()
            .required('O nome é obrigatorio'),
        senha: 
            yup.string()
            .required('O email é obrigatorio'),
    })

    const Campo = ({label, ...props}) => {
        const [field, meta] = useField(props);
        
        return(
            <div className="textfield">
                <label htmlFor={props.id}>{label}</label>
                <input
                {...field}
                {...props}
                />
                {meta.errors && meta.touched ? <div>{meta.errors}</div>: null}
            </div>
        )
    }

    return(
        <Formik 
        initialValues={{usuario: '', senha:''}}
        validationSchema={esquema}

        onSubmit={(values)=>(
            alert(JSON.stringify(values))
        )}
        >
            {(props)=> (
            <form onSubmit={props.handleSubmit}>
                <div className="App">
                    <div class="main-login">
                        <div class="left-login">
                            <h1>Faça login <br/>E entre para o nosso time</h1>
                            <img src={logo} className='logo-react' alt='animação'/>
                        </div>
                        <div class="right-login">
                            <div class="card-login">
                                <h1>LOGIN</h1>       
                                    <Campo 
                                    type="text" 
                                    id="usuario"
                                    name="usuario" 
                                
                                    placeholder="Usuário"
                                    className={props.errors.usuario && props.touched.usuario ? 'invalid-feedback': ''}
                                    />
  
                                    <Campo 
                                    type="password" 
                                    id="senha"
                                    name="senha" 
                                    
                                    placeholder="Password"
                                    className={props.errors.usuario && props.touched.usuario ? 'invalid-feedback' : ''}
                                    />    
                                <button class="btn-login">Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            )}
        </Formik>
    )
}

export default AdicionaCliente;