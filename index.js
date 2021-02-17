import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';

//Ant-design components
import { Layout, Menu, Breadcrumb } from 'antd';
import './BackGround.css';
//---APP

const { Header, Content, Footer } = Layout;

ReactDOM.render(
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">Menu 1</Menu.Item>
          <Menu.Item key="2">Menu 2</Menu.Item>
          <Menu.Item key="3">Menu 3</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content">Content</div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Character Generator by FaszTony, Teegee and Sörös</Footer>
    </Layout>,
    document.querySelector('#root')
);
