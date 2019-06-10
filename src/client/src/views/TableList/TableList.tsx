import React from 'react';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
// core components
import GridItem from '../../components/Grid/GridItem';
import GridContainer from '../../components/Grid/GridContainer';
import Table from '../../components/Table/Table';
import Card from '../../components/Card/Card';
import CardHeader from '../../components/Card/CardHeader';
import CardBody from '../../components/Card/CardBody';

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

function TableList(props) {
    const {classes} = props;
    return (
        <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
                <Card>
                    <CardHeader color="primary">
                        <h4 className={classes.cardTitleWhite}>All items</h4>
                        <p className={classes.cardCategoryWhite}>
                            Here you can see all items in the store
                        </p>
                    </CardHeader>
                    <CardBody>
                        <Table
                            tableHeaderColor="primary"
                            tableHead={['Name', 'Description', 'Price']}
                            tableData={[
                                ['Bread', '1 loaf', '$2,66'],
                                ['Cucumber', '0.5kg', '$2,56'],
                                ['Tomato', '0.5kg', '$1,45'],
                                ['Tea', '20 bags', '$1,5'],
                                ['Coffee', '0.2kg', '$5'],
                                ['Olive oil', '0.7l', '$8']
                            ]}
                        />
                    </CardBody>
                </Card>
            </GridItem>
        </GridContainer>
    );
}

// @ts-ignore
export default withStyles(styles)(TableList);
