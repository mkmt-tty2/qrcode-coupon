import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom';

import AppCRUD from './AppCRUD';
import AboutPage from './AboutPage';
import Qrcode from './Qrcode';

const App = () => (
  <Router>
    <div className="app">
      <ul className="left-navi">
        <li><Link to="/">展示会主催者登録</Link></li>
        <li><Link to="/about">イベントサイトからAPIの表示</Link></li>
        <li><Link to="/qrcode">クーポンアドレスからの画面</Link></li>
      </ul>
      <Switch>
        <Route exact path="/" component={AppCRUD} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/qrcode" component={Qrcode} />
      </Switch>
    </div>
  </Router>
);

export default App;
