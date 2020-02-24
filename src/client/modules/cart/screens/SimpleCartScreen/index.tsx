import React from 'react';
import './style.less';
import { Authorize } from '@client/components';
import { CartList, ProductList } from './components';
import { Layout } from 'antd';
import { withRematch, initStore } from '@client/store';
import { products, Product } from '@client/common';
import { IProduct } from '@client/store/models/cart/interface';

const { Header, Content, Footer } = Layout;

interface State {}

interface Props {
  data: IProduct[];
  updateCart: (payload: IProduct[]) => void;
  addToCart: (payload: Product) => void;
  changeQuantity: (payload: IProduct) => void;
  removeProduct: (payload: string) => void;
}

const Screen = Authorize(class extends React.Component<Props, State> {
  state: State = {
    //
  };

  componentDidMount() {
    //
  }

  render() {
    return (
      <Layout>
        <Header></Header>
        <Content className='content-layout'>
          <div className='container'>
            <div>
              <CartList data={this.props.data} changeQuantity={this.props.changeQuantity} removeProduct={this.props.removeProduct} />
              <ProductList products={products} addToCart={this.props.addToCart}/>
            </div>
          </div>
        </Content>
        <Footer></Footer>
      </Layout>
    );
  }
}, [], false, 'page');

const mapState = (rootState: any) => {
  return {
    ...rootState.cartModel,
  };
};

const mapDispatch = (rootReducer: any) => {
  return {
    ...rootReducer.cartModel,
  };
};

export const SimpleCartScreen = withRematch(initStore, mapState, mapDispatch)(Screen);
