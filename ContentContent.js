import React from 'react';
import 'antd/dist/antd.css';
import MyCard from './MyCard';


class ContentContent extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return <div className="site-layout-content">
      <MyCard />
    </div>
  }
}

export default ContentContent;
