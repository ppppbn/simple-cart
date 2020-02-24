import React from 'react';
import { Card, Button } from 'antd';
import { Product } from '@client/common';
import './style.less';
const Meta = Card.Meta;

interface Props {
  data: Product;
  addToCart: (payload: Product) => void;
}

export const ProductCard = (props: Props) => {
  return (
    <div className='horizontal-center product-card-container'>
      <Card
        className='product-card'
        cover={
          <img
            alt={props.data && props.data.name}
            src={props.data && props.data.product_url}
          />
        }
        actions={[
          <Button type='primary' onClick={() => props.addToCart(props.data)}>Add to cart</Button>,
        ]}
      >
        <Meta
          title={props.data && props.data.name}
          description={<span className='text-bold'>{`${props.data && props.data.price || 0} USD`}</span>}
        />
      </Card>
    </div>
  );
};
