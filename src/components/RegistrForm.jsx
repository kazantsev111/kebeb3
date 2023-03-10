import { useState } from "react";
import React from "react";
import RadioButton from "./RadioButton";
import axios from "axios";
// import axios from "axios"; /// Не установлен

function RegistrForm() {

    const [input, setInput] = useState({ name: '', login: '', password: '', email: '', phone: '' })

    async function handlerSubmitRegistForm(e) {
        e.preventDefault();
        const formData = Object.fromEntries(new FormData(e.target));
        // console.log(formData);
        try {
            const res = await axios.post('/api/auth/signup', formData);
            window.location = '/';
        }
        catch {
            console.log('error in handlerSubmitRegistrForm');
        }

    }
    return (
        <form className="form">
            <label>
                Имя:
                <input className="input_registr" name="name" type="text" />
            </label>
            <label>
                Login:
                <input className="input_registr" name="login" type="text" />
            </label>
            <label>
                Password:
                <input className="input_registr" name="password" type="password" />
            </label>
            <label>
                Email:
                <input className="input_registr" name="email" type="email" />
            </label>
            <label>
                Номер телефона:
                <input className="input_registr" name="phone" type="text" />
            </label>
            Укажите в качестве кого, Вы бы хотели зарегистрироваться:
            <div className="btn-group btn-group-toggle" data-toggle="buttons">
                <label className="btn btn-secondary active">
                    <input className="input_registr" type="radio" name="status" value="client" autoComplete="off" />
                    Клиент
                </label>
                <label className="btn btn-secondary">
                    <input
                        className="input_registr"
                        type="radio"
                        name="status"
                        value="curer"
                        autoComplete="off"
                    />
                    Курьер
                </label>
            </div>


            <button className="button_pand" type="submit">Submit</button>
        </form>
    );
}

export default RegistrForm;