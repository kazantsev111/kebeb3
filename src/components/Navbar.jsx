import axios from 'axios';
import React from 'react';

export default function Navbar({ currentUser, setCurrentUser }) {

  const clickHandler = async () => {
    const res = await axios('/api/auth/logout');
    if (res.status === 200) {
      setCurrentUser(null);
      window.location = '/';
    }
  };


  return (
    <div className="navMain">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Кебаб-деливери</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-butt" aria-current="page" href="/">Главная страница</a>
              {currentUser ? (
                <div className="nav-butt">Добрый день, {currentUser.username}! <button type="button" className="btn btn-dark" onClick={clickHandler}>Logout</button>
                  {currentUser.status === 'curer' &&
                    (<a className="nav-butt" href={`/lkcur/${currentUser.id}`} >Личный кабинет курьера</a>)}
                </div>
              ) : (
                <>
                  <a className="nav-butt" href="/signin">Войти</a>
                  <a className="nav-butt" href="/registr">Регистрация</a>
                </>
              )}



            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
