// This support file is processed and loaded automatically before your
// component test files.
//
// You can add global configuration and behavior that modifies Cypress.
//
// For example, here we import custom commands and expose the `mount` helper
// from @cypress/react to make component testing easier.

import "./commands";
import { mount } from "cypress/react";

// add a custom command so you can mount components with `cy.mount()`
Cypress.Commands.add("mount", mount);

// Export mount so you can use it directly in your tests if preferred
export * from "cypress/react";
