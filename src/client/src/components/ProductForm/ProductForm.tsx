import React from 'react';
import {Field, Form} from 'react-final-form';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import MuiTextField from '@material-ui/core/TextField';

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

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit = async values => {
    await sleep(300);
    // @ts-ignore
    window.alert(JSON.stringify(values, 0, 2));
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

function ProductForm() {
    return (<Form
        onSubmit={onSubmit}
        validate={validate}
        //@ts-ignore
        render={({handleSubmit, reset, submitting, pristine}) => (
            <form onSubmit={handleSubmit}>
                <Paper style={{padding: 8}}>
                    <Grid container alignItems="flex-start" spacing={8}>
                        <Grid item xs={6}>
                            <Field
                                fullWidth
                                name="name"
                                component={TextField}
                                type="text"
                                label="Name"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Field
                                fullWidth
                                name="description"
                                component={TextField}
                                type="text"
                                label="Description"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Field
                                name="price"
                                fullWidth
                                component={TextField}
                                type="number"
                                label="Price"
                            />
                        </Grid>
                        <Grid item style={{marginTop: 16}}>
                            <Button
                                type="button"
                                variant="contained"
                                onClick={reset}
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
    />);
}

export default ProductForm;
