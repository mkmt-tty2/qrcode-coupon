import React from 'react';
import { withRouter } from 'react-router';
 
class Detail extends React.Component {
  handleToQrcode = () => {
    this.props.history.push('/qrcode')
  }
 
  render() {
    return (
      <div>
        <button onClick={this.handleToQrcode}>
          qrcode読取
        </button>
      </div>
    )
  }
}
 
export default withRouter(Detail)