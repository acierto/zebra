import {gql} from 'apollo-boost';
import {graphql} from 'react-apollo';
import {GET_ALL_PRODUCTS} from '../queries/get-all-products';

export default graphql(gql`
  mutation RemoveProduct($name: String!) {
    removeProduct(name: $name) {
     name
    } 
  } 
`, {
    name: 'removeProduct',
    options: () => ({
        refetchQueries: [{
            query: GET_ALL_PRODUCTS,
        }]
    }),
});
