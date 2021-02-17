import { Card } from 'antd';
import React from 'react';
import 'antd/dist/antd.css';
import PrimaryButton from './PrimaryButton';


class MyCard extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return <>
      <div className="site-card-border-less-wrapper">
    <Card title="Character name" bordered={true} style={{ width: 300 }} hoverable={true} extra={"IMAGE"}>
      <p>You will see the background story of your character later here.</p>
      <PrimaryButton />
    </Card>
  </div>,
  </>
  }
}

export default MyCard;