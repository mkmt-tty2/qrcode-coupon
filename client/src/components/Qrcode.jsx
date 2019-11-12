import React, { Component } from 'react'
import QrReader from 'react-qr-reader'

class Qrcode extends Component {
  state = {
    result: ''
  }
  handleToCouponPage = () => {
    this.props.history.push('/coupon')
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
  render() {
    return (
      <div>
        <ul className="left-navi">
          <li>お店の方にコードを入力してもらってご使用ください。</li>
          <li>印刷しても使用できません。</li>
          <li>現在時刻　2020/09/30 12:07</li>
          <li>店鋪コードを入力の上、発行するを押してください。</li>
        </ul>
        <input type='text' value={this.state.result} onChange={this.handleChange}></input>
        <button onClick={this.handleToCouponPage}>
          発行する
        <br />
        </button>
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
export default Qrcode;