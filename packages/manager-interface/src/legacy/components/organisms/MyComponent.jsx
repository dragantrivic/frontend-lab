import React from 'react';
import gql from 'graphql-tag';
import { Subscription } from 'react-apollo';

const subscription = gql`
  subscription {
    myField
  }
`;

export default () => (
  <Subscription subscription={subscription}>
    {props => <div>{props.data && props.data.myField}</div>}
  </Subscription>
);
