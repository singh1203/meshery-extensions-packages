// Type definition of support commands
declare namespace Cypress {
  interface Chainable<Subject> {
    /**
     * Log in via UI
     * @example
     * cy.login(username: string, password: string)
     */
    login(): Chainable<any>
    /**
     * Log in via API
     * @example
     * cy.setViewPort()
     */
    setViewPort(): Chainable<any>

    /**
     * Intercept capabilities and modify
     * @example
     *  cy.interceptCapabilities()
     */
    interceptCapabilities(): Chainable<any>

    /**
     * Set Mode to designer or visualizer
     * @example
     *  cy.setMode()
     */
    setMode(): Chainable<any>

    /**
     * Set Release tag
     * @example
     *  cy.setMode()
     */
    setReleaseTag(): Chainable<any>

    /**
     * Delete design with id
     * @example
     *  cy.setMode()
     */
    deleteDesign(id: string): Chainable<any>
  }
}