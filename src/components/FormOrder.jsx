import React from "react";
import UploadPhoto from "./UploadPhoto";
import { useState } from "react";
import RadioButton from "./RadioButton";
import axios from "axios";

export default function FormOrder({ currentUser }) {
    const [input, setInput] = useState({ title: '', price: '', discont: '', location: '' })

    async function handlerSubmitRegistForm(e) {
        e.preventDefault();
        const formData = {...Object.fromEntries(new FormData(e.target)), id_curer: currentUser.id };
        console.log(formData);
        try{
        const res = await axios.put('/api/order', formData);
        window.location = '/';
      }
        catch { console.log('error in handlerSubmitRegistrForm');
            }
            // filter
    }

    return (
        <form className="row g-3" onSubmit={handlerSubmitRegistForm}>
                <UploadPhoto />
            <div className="col-md-6">
                <label htmlFor="inputEmail4" className="form-label">Продукты</label>
                <input type="text" className="form-control" id="inputEmail4" name="title" />
            </div>
            <div className="col-6">
                <label htmlFor="inputAddress" className="form-label">Исходная цена</label>
                <input type="text" className="form-control" id="inputAddress" name="price" />
            </div>
            <div className="col-6">
                <label htmlFor="inputAddress" className="form-label">Цена со скидкой</label>
                <input type="text" className="form-control" id="inputAddress" name="discont" />
            </div>
            <div className="col-6">
                <label htmlFor="inputAddress2" className="form-label">Точный адрес</label>
                <input type="text" className="form-control" id="inputAddress2" placeholder="Проспект Акашева" name="location" />
            </div>
            <div className="col-12">
                <button type="submit" className="btn btn-primary">Разместить</button>
            </div>
        </form>
    )
}