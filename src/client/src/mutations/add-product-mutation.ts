import {gql} from 'apollo-boost';
import {graphql} from 'react-apollo';
import {GET_ALL_PRODUCTS} from '../queries/get-all-products';

const ADD_PRODUCT = gql`
  mutation AddProduct($product: ProductInput!) {
   addProduct(product: $product) {
    name,
    description,
    price
   }
  }
`;

export default graphql(ADD_PRODUCT, {
    name: 'addProduct',
    options: () => ({
        refetchQueries: [{
            query: GET_ALL_PRODUCTS,
        }]
    }),
});
