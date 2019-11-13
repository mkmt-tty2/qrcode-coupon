import React, { Component } from 'react'
import QrReader from 'react-qr-reader'
import axios from 'axios';
const ROOT_ENDPOINT = 'http://localhost:3001';

class CouponStore extends Component {
  state = {
    result: '',
    list: []
  }

  handleToCouponPage = () => {

    if (this.state.result.length > 10) {
      alert('文字数が多いです');
    } else {
      axios({
        method: 'post',
        url: ROOT_ENDPOINT + '/store/select',
        data: {
          code: this.state.result
        }
      })
        .then(res => {
          if (res.data.length !== 0) {
            this.props.history.push('/coupon')
          } else {
            alert('店鋪コードが誤っています。')
          }
        })
        .catch(err => {
          alert('認証に失敗しました')
        })
    }
  }

  handleChange = e => {
    this.setState({
      result: e.target.value
    })
  }
  handleScan = data => {
    if (data) {
      this.setState({
        result: data
      })
    }
  }
  handleError = err => {
    console.error(err)
  }
  componentWillMount() {
    const user_hash = 'user_hash';

    axios({
      method: 'post',
      url: ROOT_ENDPOINT + '/coupon/select',
      data: {
        user_hash: user_hash
      }
    })
      .then(res => {
        const coupons = res.data;
        for (var i in coupons) {
          const use_time = coupons[i].use_time === null ? '' : coupons[i].use_time;
          const store_code = coupons[i].store_code === null ? '' : coupons[i].store_code;
          const str = `${i}枚目使用時刻：${use_time}使用店鋪：${store_code}`
          this.state.list.push(<li>{str}</li>);
          console.log(str);
        }

      })
      .catch(err => {
        alert('認証に失敗しました')
      })


  }

  render() {
    // var list = [];

    // var data = [
    //   { text: "1" },
    //   { text: "2" }
    // ];

    // for (var i in data) {
    //   list.push(<li>{data[i].text}</li>);
    // }

    return (
      <div>
        <ul>
          {this.state.list}
        </ul>
        <ul className="left-navi">
          <li>お店の方にコードを入力してもらってご使用ください。</li>
          <li>店鋪コードを入力の上、発行するを押してください。</li>
        </ul>
        <input type='text' value={this.state.result} onChange={this.handleChange}></input>
        <button onClick={this.handleToCouponPage}>
          発行する
            <br />
        </button>
        <ul>
          {this.state.list}
        </ul>
        <QrReader
          delay={300}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: '100%' }}
        />
        <p>{this.state.result}</p>
      </div>
    )
  }
}
export default CouponStore;