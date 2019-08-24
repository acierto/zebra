---
id: react-graphql
title: How React components communicate with GraphQL
---

Let’s have a look at it starting from the React component in ```ProductItems.tsx```

```js
export default compose(
    withApollo,
    // @ts-ignore
    withStyles(styles),
    GET_ALL_PRODUCTS,
    REMOVE_PRODUCT
)(ProductItems);
```

Here is important line: withApollo, that way we create a connection with _Apollo Client_. And then we _inject_ 
2 functions to properties defined in _GET_ALL_PRODUCTS_ and _REMOVE_PRODUCT_. 
If you’ll open both of them, you’ll find that there is name defined in each of these variables. 
For example in _GET_ALL_PRODUCTS_ defined allProducts name, 
and that’s why we destruct it from properties in _ProductsItem_:

```js
function ProductItems(props) {
    const {allProducts, classes, removeProduct} = props;
    ...
```

How query itself is defined:

```js
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
```

So in essence you provide a GraphQL query which options containing at least a name for UI connection.

Same way works data modification with extra parameters. Let’s have a look at ```add-product-mutation.ts```

```js
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
```

In parameters alongside with a name, also options field is defined. You can do it even without it, and it still will work.
What ```refetchQuerires``` does here, that solving the caching problem. 
Once you add a new product, you need to update the table, and for that you need to notify _Apollo Client_ which queries has to be refetched.
They don’t do it automatically to not degrade performance of application 
and you as a developer has to decide where and when the data has to be refetched.





