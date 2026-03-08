import { mount } from "cypress/react";

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Mount a React component.
       * @example cy.mount(<MyComponent />)
       */
      mount: typeof mount;
    }
  }
}

export * from "cypress/react";
