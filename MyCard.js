import { Card } from 'antd';
import React from 'react';
import 'antd/dist/antd.css';


class MyCard extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return <div>
      <div className="site-card-border-less-wrapper">
    <Card title="Card title" bordered={false} style={{ width: 300 }}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  </div>,

    </div>
  }
}

export default MyCard;