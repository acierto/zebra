---
id: graphql
title: GraphQL
---

That tool creates another way of communicating between frontend and backend. 
What is the main benefit of using GraphQL comparing to REST?
That when you can a complicated graph of objects, you can specify exactly which objects
and which fields you are interested in. In REST approach you’ll get the full object or full graph of objects.

As GraphQL is based on strong typing, you have explicitly declare input/output types. 
That’s called schema. Based on provided objects (product.ts, productInput.ts) annotated by means of type-graphql library 
and defined mutations in ```product-resolver.ts``` during compilation time the GraphQL schema is generated (schema.sql):

```graphql
# -----------------------------------------------
# !!! THIS FILE WAS GENERATED BY TYPE-GRAPHQL !!!
# !!!   DO NOT MODIFY THIS FILE BY YOURSELF   !!!
# -----------------------------------------------

type Mutation {
  addProduct(product: ProductInput!): Product!
  removeProduct(name: String!): Product!
}

type Product {
  id: ID!
  name: String!
  description: String
  price: Float!
}

input ProductInput {
  name: String!
  description: String
  price: Float!
}

type Query {
  product(name: String!): Product

  """Get all the products from around the world """
  products: [Product!]!
}
```

In this project I decided to use a source of truth entities and generate schema out of that, 
but you can also configure it that you’ll define schema manually. 
It might be useful in some of the cases when you don’t want to rely on auto-generation tool.



