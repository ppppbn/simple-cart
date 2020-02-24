import React from 'react';
import { Table, Icon, InputNumber } from 'antd';
import { IProduct } from '@client/store/models/cart/interface';
import './style.less';

interface Props {
  data: IProduct[];
  changeQuantity: (payload: IProduct) => void;
  removeProduct: (payload: string) => void;
}

export const CartList = (props: Props) => {
  const changeQuantity = (value: number | undefined, record: IProduct) => {
    if (value !== undefined && !isNaN(value)) {
      props.changeQuantity({
        ...record,
        quantity: value,
      });
    }
  };

  const columns = [{
    title: 'Item',
    key: 'name',
    dataIndex: 'name',
  }, {
    title: 'Price',
    key: 'price',
    dataIndex: 'price',
    render: (value: number, _record: IProduct) => value !== undefined ? `${value} USD` : '0 USD',
  }, {
    title: 'Quantity',
    key: 'quantity',
    dataIndex: 'quantity',
    render: (value: number, record: IProduct) => <InputNumber
      onChange={(v) => changeQuantity(v, record)}
      value={value}
      min={1}
    />,
  }, {
    title: 'Total price',
    key: 'total_price',
    dataIndex: 'total_price',
    render: (_value: number, record: IProduct) => {
      return <div className='price-container'>
        <div>{`${record.price && record.quantity ? record.price * record.quantity : 0} USD`}</div>
        <div>
          <Icon className='cursor-pointer' type='minus-circle' onClick={() => props.removeProduct(record._id)}/>
        </div>
      </div>;
    },
  }];

  const totalAmount = (props.data || []).reduce((sum: number, v: IProduct) => v.quantity && v.price ? sum + (v.quantity * v.price) : sum + 0, 0);

  return (
    <div className='card-list-container'>
      <h2>Cart</h2>
      <Table
        dataSource={props.data}
        columns={columns}
        bordered
        size='small'
        pagination={false}
        rowKey={(record: IProduct) => record._id}
      />
      <div className='total-amount-container'>
        <h3>Total amount: {(totalAmount || 0)} USD</h3>
      </div>
    </div>
  );
};
