import React from 'react';
import { Row, Col } from 'antd';
import { ProductCard } from './index';
import { Product } from '@client/common';
import './style.less';

interface Props {
  products: Product[];
  addToCart: (payload: Product) => void;
}

export const ProductList = (props: Props) => {
  return (
    <Row type='flex' className='product-container'>
      <Col span={24}>
        <h2>Products</h2>
      </Col>
      {
        (props.products || []).map((product: Product) => {
          return (
            <Col xs={24} sm={12} md={8} xl={6} key={product._id}>
              <ProductCard data={product} addToCart={props.addToCart}/>
            </Col>
          );
        })
      }
    </Row>
  );
};
