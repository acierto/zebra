import * as R from 'ramda';
import React from 'react';
import {Field, Form} from 'react-final-form';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import MuiTextField from '@material-ui/core/TextField';
import {compose, withApollo} from 'react-apollo';
import ADD_PRODUCT from '../../mutations/add-product-mutation';
import {localeMessages} from '../../services/locale-service';

const TextField = ({input: {name, onChange, value, ...restInput}, meta, ...rest}) => (
    <MuiTextField
        {...rest}
        name={name}
        helperText={meta.touched ? meta.error : undefined}
        error={meta.error && meta.touched}
        InputProps={restInput}
        onChange={onChange}
        value={value}
        inputProps={{autoComplete: 'off'}}
    />
);

const onSubmit = (mutate) => async (values, form) => {
    mutate({
        variables: {
            product: R.evolve({
                price: parseFloat
            }, values)
        }
    });
    form.reset();
};
const validate = values => {
    const errors: any = {};
    if (!values.name) {
        errors.name = 'Required';
    }
    if (!values.price) {
        errors.price = 'Required';
    }
    if (!values.description) {
        errors.description = 'Required';
    }
    return errors;
};

function ProductForm({addProduct}) {
    return <Form
        onSubmit={onSubmit(addProduct)}
        validate={validate}
        //@ts-ignore
        render={({handleSubmit, form, submitting, pristine}) => (
            <form className="product-form" onSubmit={handleSubmit}>
                <Paper style={{padding: 8}}>
                    <Grid container alignItems="flex-start" spacing={8}>
                        <Grid item xs={6}>
                            <Field
                                fullWidth
                                name="name"
                                component={TextField}
                                type="text"
                                label={localeMessages.nameLabel}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Field
                                fullWidth
                                name="price"
                                component={TextField}
                                type="number"
                                label={localeMessages.priceLabel}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Field
                                name="description"
                                fullWidth
                                component={TextField}
                                type="text"
                                label={localeMessages.descriptionLabel}
                            />
                        </Grid>
                        <Grid item style={{marginTop: 16}}>
                            <Button
                                type="button"
                                variant="contained"
                                onClick={form.reset}
                                disabled={submitting || pristine}
                            >
                                Reset
                            </Button>
                        </Grid>
                        <Grid item style={{marginTop: 16}}>
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                                disabled={submitting}
                            >
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                </Paper>
            </form>
        )}
    />;
}

export default compose
(
    withApollo,
    ADD_PRODUCT
)
(ProductForm);
