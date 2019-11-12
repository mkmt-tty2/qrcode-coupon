import React from 'react';
import { BrowserRouter, Route, Link, Switch, } from 'react-router-dom';

import AppCRUD from './AppCRUD';
import AboutPage from './AboutPage';
import CouponResult from './CouponResult';
import Qrcode from './Qrcode';
// import Detail from './Detail';

const App = () => (
  <BrowserRouter>
    <div className="app">
      <ul className="left-navi">
        <li><Link to="/">展示会主催者登録</Link></li>
        <li><Link to="/about">イベントサイトからAPIの表示</Link></li>
        <li><Link to="/qrcode">クーポンアドレスからの画面</Link></li>
        {/* <li><Link to='/detail'>クーポンアドレスからの画面</Link></li> */}
      </ul>
      <Switch>
        <Route exact path="/" component={AppCRUD} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/qrcode" component={Qrcode} />
        <Route exact path="/coupon" component={CouponResult} />
        {/* <Route path='/detail' component={Detail} /> */}
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
