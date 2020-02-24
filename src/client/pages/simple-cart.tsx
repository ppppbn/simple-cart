import React from 'react';
import { SimpleCartScreen } from '../modules/cart';
import { NextContext } from 'next';

interface Props {}
interface State {}
export default class SimpleCartPage extends React.Component<Props, State> {
  static async getInitialProps (_context: NextContext) {
    return {
      namespacesRequired: ['common'],
    };
  }

  render () {
    return (
      <SimpleCartScreen />
    );
  }
}
