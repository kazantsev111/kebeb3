import axios from 'axios';
import React, { useState } from 'react';

export default function ListCurer({ currentUser, orders }) {
  const [curOrders, setListOrders] = useState(orders);

  const clickHandler = async (e, id_order) => {
    const res = await axios.patch(`/api/order/${id_order}`)
    .then((res)=> {
      if (res.status === 200) {
        // window.location = '/';
        setListOrders((prev) => prev.filter((el) => el.id !== id_order));
        alert('Заявка закрыта')
        window.location = `/lkcur/${currentUser.id}`

      }
    })
    .catch((res)=> {
      console.log(res);
      if (res.response.status === 400) {
        alert('Ошибка при обработке данных')
    }
  }
    )
}

  return (
    <>
      {curOrders?.map((el) => {
        const { id, title, imgpath, price, discont, location } = el;
        return (
          <div
            className="form"
            style={{ border: '1px solid black', padding: '10px' }}>
            <div>
              <h1>{title}</h1>

              {(el.Orderbuy  && el.Orderbuy.delivery) ? (
                <p className="button_pandOne">Доставлено</p>
              ) : (
                <p className="button_pandOne">Не доставлено</p>
              )}

              <img src={imgpath} width="300" height="300" />
              <p className="button_pandTwo">Цена: {price}</p>
              <p className="button_pandTwo">Цена со скидкой: {discont}</p>
              <p className="button_pandTwo">Адрес доставки: {location}</p>
              {(el.Orderbuy) && (!el.Orderbuy.delivery) && <button onClick={(e) => clickHandler(e, id)} className="button_pand">Доставил</button>}
            </div>
          </div>
        );
      })}
    </>
  );
}

// {props.imageSrc} Компонент картинки из БД
