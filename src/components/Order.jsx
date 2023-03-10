import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Map from './Map';

export default function Order({ orders, currentUser }) {
  const [listOrders, setListOrders] = useState(orders);

  const [adress, setAdress] = useState('');

  const clickHandler = async (e, id_order) => {
    const res = await axios.post(`/api/order/${id_order}`, {
      id_client: currentUser.id,
      adress,
    })
    .then((res)=> {
      if (res.status === 200) {
        // window.location = '/';
        setListOrders((prev) => prev.filter((el) => el.id !== id_order));
        setAdress('');
        alert('Ваш заказ принят, в ближайщее время курьер свяжется с Вами для уточнения деталей')

      }
    })
    .catch((res)=> {
      console.log(res);
      if (res.response.status === 400) {
        alert('Добавьте, пожалуйста, адрес доставки')
    }
  }
    )
  };

  return (
    <div className="ordersList">
      {currentUser && (
        <label>
          <h4>Введите адрес доставки:</h4>
          <input
            name="adress"
            type="text"
            value={adress}
            onChange={(e) => setAdress(e.target.value)}
          />
        </label>
      )}
      <h2>Доступные заказы</h2>
      <ul style={{ listStyleType: 'none' }}>
        {listOrders.map((el) => {
          const { id, title, imgpath, price, discont } = el;
          return (
            <li key="id">
              <div className="card" style={{ width: '18rem', height: '20rem' }}>
                <img src={imgpath} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">Начальная цена: {price} руб.</p>
                  <p className="card-text">
                    Цена со скидкой: {price * (discont / 100)} руб.
                  </p>
                </div>
              </div>
              {currentUser?.status ==='client' && (
                <button
                  type="button"
                  onClick={(e) => clickHandler(e, id)}
                  className="btn btn-warning"
                >
                  Купить
                </button>
              )}
            </li>
          );
        })}
        {/* <li>
          <div className="card" style={{ width: "18rem", height: "20rem" }}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
            <h5 className="card-title">Заказ</h5>
            <p className="card-text">Цена без скидки</p>
            <p className="card-text">Цена</p>
            <button>Выкупить</button>
            (<button>Выкупить</button>
            </div>
          </div>
        </li> */}
      </ul>
      <Map />
    </div>
  );
}
