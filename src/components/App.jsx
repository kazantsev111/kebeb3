import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Lkcur from './Lkcur';
import Navbar from './Navbar';
import Order from './Order';
import RegistrForm from './RegistrForm';
import SignInPage from './SignIn';

export default function App({orders, user, curOrders}) {
  const [orderall, setOrderAll] = useState(orders || []);
  const [currentUser, setCurrentUser] = useState(user || null);
  const [curOrderAll, setCurOrderAll] = useState(curOrders || []);

  // console.log('curOrder-front', curOrderAll);

  return (
    <div>
      <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser}/>
      <Routes>
        <Route path='/' element={<Order currentUser={currentUser} orders={orders}/>} />
        <Route path='/registr' element={<RegistrForm />} />
        <Route path='/signin' element={<SignInPage />} />
        <Route path='/lkcur/:id' element={<Lkcur orders={curOrderAll} currentUser={currentUser}/>} />
      </Routes>
    </div>
  )
}
