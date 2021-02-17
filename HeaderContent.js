import React from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';


class HeaderContent extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return <>
    <div className="logo" />
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
      <Menu.Item key="1">Menu 1</Menu.Item>
      <Menu.Item key="2">Menu 2</Menu.Item>
    </Menu>
    </>
  }
}
export default HeaderContent;