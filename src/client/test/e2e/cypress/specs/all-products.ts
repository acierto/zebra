import {Application} from '../dsl/application';
import {AllProductsDsl} from '../dsl/all-products-dsl';

describe('My First Test', function() {
    before(function() {
        Application.open();
    });

    it('should be able to create a new product', function() {
        AllProductsDsl.addProduct('Milk', '0.95', '1 liter');
        AllProductsDsl.checkProductInStore('Milk', '0.95', '1 liter');
        AllProductsDsl.removeProduct(1);
        AllProductsDsl.checkThatNoProductsInStore();
    });
});
