import * as R from 'ramda';
import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import GridItem from '../../components/Grid/GridItem';
import GridContainer from '../../components/Grid/GridContainer';
import ProductForm from '../../components/ProductForm/ProductForm';
import MaterialTable from 'material-table';
import Card from '../../components/Card/Card';
import CardHeader from '../../components/Card/CardHeader';
import CardBody from '../../components/Card/CardBody';
import {compose, withApollo} from 'react-apollo';
import GET_ALL_PRODUCTS from '../../queries/get-all-products';
import REMOVE_PRODUCT from '../../mutations/remove-product-mutation';

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

function ProductItems(props) {
    const {allProducts, classes, removeProduct} = props;
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
                        <MaterialTable
                            actions={[
                                rowData => ({
                                    icon: 'delete',
                                    tooltip: 'Delete Product',
                                    onClick: (event, rowData) => removeProduct({
                                        variables: {name: rowData.name}
                                    })
                                })
                            ]}
                            columns={[
                                {title: 'Name', field: 'name'},
                                {title: 'Price', field: 'price'},
                                {title: 'Description', field: 'description'}
                            ]}
                            data={R.propOr([], 'products', allProducts)}
                            options={{
                                actionsColumnIndex: -1
                            }}
                            title={''}
                        />
                    </CardBody>
                </Card>
            </GridItem>
        </GridContainer>
    );
}

export default compose(
    withApollo,
    // @ts-ignore
    withStyles(styles),
    GET_ALL_PRODUCTS,
    REMOVE_PRODUCT
)(ProductItems);
