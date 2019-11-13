import React, { Component } from 'react'
import CouponImage from './CouponImage';
import axios from 'axios';
const ROOT_ENDPOINT = 'http://localhost:3001';

class CouponResult extends Component {
  

  currentDateTimeString = () => {
    var d = new Date();
    const fillZero = (number) => {
      const num0num = '0' + number;
      const num0 = num0num.slice(-2)
      return num0;
    }
    var year = d.getFullYear();
    var month = fillZero(d.getMonth() + 1);
    var date = fillZero(d.getDate());
    var hour = fillZero(d.getHours());
    var minute = fillZero(d.getMinutes());
    var second = fillZero(d.getSeconds());

    var str = `${year}/${month}/${date} ${hour}時${minute}分${second}秒`;
    return str;
  };
  render() {

    const first = this.currentDateTimeString();
    const second = "未使用";
    const third = "未使用";

    return (
      <div className="coupon">
        <h1 className="app-title">クーポンが取得できました。</h1>

        <CouponImage />
      </div>
    );
  }
}

export default CouponResult;
