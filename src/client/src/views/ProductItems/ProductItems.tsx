import * as R from 'ramda';
import React from 'react';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
// core components
import GridItem from '../../components/Grid/GridItem';
import GridContainer from '../../components/Grid/GridContainer';
import ProductForm from '../../components/ProductForm/ProductForm';
import Table from '../../components/Table/Table';
import Card from '../../components/Card/Card';
import CardHeader from '../../components/Card/CardHeader';
import CardBody from '../../components/Card/CardBody';
import {Query} from 'react-apollo';
import {gql} from 'apollo-boost';

const styles = {
    cardCategoryWhite: {
        '&,& a,& a:hover,& a:focus': {
            color: 'rgba(255,255,255,.62)',
            margin: '0',
            fontSize: '14px',
            marginTop: '0',
            marginBottom: '0'
        },
        '& a,& a:hover,& a:focus': {
            color: '#FFFFFF'
        }
    },
    cardTitleWhite: {
        color: '#FFFFFF',
        marginTop: '0px',
        minHeight: 'auto',
        fontWeight: '300',
        fontFamily: '\'Roboto\', \'Helvetica\', \'Arial\', sans-serif',
        marginBottom: '3px',
        textDecoration: 'none',
        '& small': {
            color: '#777',
            fontSize: '65%',
            fontWeight: '400',
            lineHeight: '1'
        }
    }
};

const GET_ALL_PRODUCTS = gql`
  {
      products {
        name,
        description,
        price
      }
  }
`;

interface ProductType {
    description: string,
    name: string,
    price: number
}

const toTableData = (data) => R.pipe(
    R.propOr([], 'products'),
    R.map((item: ProductType) => [item.name, item.description, `${item.price}`])
)(data);

function ProductItems(props) {
    const {classes} = props;
    return (
        <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
                <Card>
                    <CardHeader color="primary">
                        <h4 className={classes.cardTitleWhite}>Add new item</h4>
                        <p className={classes.cardCategoryWhite}>
                            Here you can add new item to the store
                        </p>
                    </CardHeader>
                    <CardBody>
                        <ProductForm/>
                    </CardBody>
                </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={12}>
                <Card>
                    <CardHeader color="primary">
                        <h4 className={classes.cardTitleWhite}>All items</h4>
                        <p className={classes.cardCategoryWhite}>
                            Here you can see all items in the store
                        </p>
                    </CardHeader>
                    <CardBody>
                        <Query query={GET_ALL_PRODUCTS}>
                            {({data}) =>
                                <Table
                                    tableHeaderColor="primary"
                                    tableHead={['Name', 'Description', 'Price']}
                                    tableData={toTableData(data)}
                                />
                            }
                        </Query>
                    </CardBody>
                </Card>
            </GridItem>
        </GridContainer>
    );
}

// @ts-ignore
export default withStyles(styles)(ProductItems);
