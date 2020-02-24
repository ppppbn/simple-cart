import React from 'react';
import { Page } from '@client/layouts';
import './style.less';
interface AuthorizeProps {}
interface AuthorizeState {}

export const Authorize = (
  Component: any,
  _permission: any,
  _authenticationRequired?: boolean,
  layoutName?: string,
) => {
  return (props: any) => {
    class AuthorizeComponent extends React.Component<
      AuthorizeProps,
      AuthorizeState
    > {
      state: AuthorizeState = {};

      componentDidMount() {
        // Perform authentication & authorization here
      }

      renderPageLayout = () => {
        return (
          <div>
            <Page>
              <Component {...props} />
            </Page>
          </div>
        );
      };

      render() {
        switch (layoutName) {
          case 'page':
            return this.renderPageLayout();
          default:
            return this.renderPageLayout();
        }
      }
    }

    return <AuthorizeComponent />;
  };
};
