import React from 'react';
import { NextContext } from 'next';
import { Spin } from 'antd';

interface Props { }
interface State { }
class Index extends React.Component<Props, State> {

  render() {
    return (
      <div style={{
        textAlign: 'center',
        marginTop: '100px',
      }}>
        <Spin />
      </div>
    );
  }
}
export default (Index);
