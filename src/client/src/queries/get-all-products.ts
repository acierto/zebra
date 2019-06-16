import {gql} from 'apollo-boost';
import {graphql} from 'react-apollo';

export const GET_ALL_PRODUCTS = gql`
  {
      products {
        name,
        description,
        price
      }
  }
`;

export default graphql(GET_ALL_PRODUCTS, {name: 'allProducts'});
