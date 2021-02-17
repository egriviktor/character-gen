import React from 'react';
import 'antd/dist/antd.css';
import { Button, Radio } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';


class PrimaryButton extends React.Component {
  state = {
    size: 'large',
  };

  handleSizeChange = e => {
    this.setState({ size: e.target.value });
  };

  render() {
    const { size } = this.state;
    return (
      <>
        <Button type="primary" size={size}>
          Create Character
        </Button>
      </>
    );
  }
}

export default PrimaryButton;