export class AllProductsDsl {
    static addProduct(name, price, description) {
        cy.get('.product-form input[name="name"]').type(name);
        cy.get('.product-form input[name="price"]').type(price);
        cy.get('.product-form input[name="description"]').type(description);
        cy.get('.product-form button[type="submit"]').click();
    }

    static checkProductInStore(name, price, description) {
        cy.get('.product-list tbody tr td:nth-child(1)').contains(name);
        cy.get('.product-list tbody tr td:nth-child(2)').contains(price);
        cy.get('.product-list tbody tr td:nth-child(3)').contains(description);
    }

    static removeProduct(lineNumber) {
        cy.get(`.product-list tbody tr:nth-child(${lineNumber}) td:nth-child(4) button`).click();
    }

    static checkThatNoProductsInStore() {
        cy.get('.product-list tbody tr td').contains('No records to display');
    }
}
