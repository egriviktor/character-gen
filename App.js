import React from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
import './BackGround.css';
import './Card.css'
import HeaderContent from './HeaderContent';
import ContentContent from './ContentContent';
const { Header, Content, Footer } = Layout;

class App extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return <Layout className="layout">
      <Header>
        <HeaderContent />
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <ContentContent />
      </Content>
      <Footer style={{ textAlign: 'center' }}>Character Generator by FaszTony, Teegee and Sörös</Footer>
    </Layout>
  }
}


export default App;