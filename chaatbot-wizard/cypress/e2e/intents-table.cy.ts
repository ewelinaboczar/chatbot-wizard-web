describe('Table with selection checkboxes', () => {
  beforeEach(() => {
    // Załaduj stronę zawierającą tabelę
    cy.visit('/');
  });

  it('should toggle selection of all checkboxes when the "select all" checkbox is clicked', () => {
    cy.get('[data-cy="select-all-checkbox"]').click();
    cy.get('[data-cy="selected-intents-length"]').should('contain', '9 / 9');
  });

  it('should select a single row when its checkbox is clicked', () => {
    cy.get('[data-cy="intent-checkbox-34d7831e137a4016a55f98926800a643"]').click();
    cy.get('[data-cy="intent-checkbox-34d7831e137a4016a55f98926800a643"]').find('input').should('be.checked');
    cy.get('[data-cy="intent-checkbox-34d7831e137a4016a55f98926800a643"]').parents('tr').should('have.class', 'selected-row');
  });

  it('should select a single checkbox when row is clicked', () => {
    cy.get('[data-cy="intent-row-34d7831e137a4016a55f98926800a643"]').click();
    cy.get('[data-cy="intent-checkbox-34d7831e137a4016a55f98926800a643"]').find('input').should('be.checked');
  });

  it('should select all intents when select all checkbox is clicked', () => {
    cy.get('[data-cy="select-all-checkbox"]').click();
    cy.get('[data-cy="selected-intents-length"]')
      .invoke('text')
      .then((text) => {
        const maxIntents = text.split('/')[1].trim();
        expect(parseInt(maxIntents)).to.eq(9);
      })
  })

  it('should display the correct number of selected intents in the counter', () => {
    cy.get('[data-cy="intent-checkbox-34d7831e137a4016a55f98926800a643"]').click();

    cy.get('[data-cy="selected-intents-length"]')
      .invoke('text')
      .then((text) => {
        const maxIntents = text.split('/')[0].trim();
        expect(parseInt(maxIntents)).to.eq(1);
      })
  });

  it('should display the correct number of selected intents in the counter when unselect', () => {
    cy.get('[data-cy="intent-checkbox-34d7831e137a4016a55f98926800a643"]').click();
    cy.get('[data-cy="intent-checkbox-34d7831e137a4016a55f98926800a643"]').click();

    cy.get('[data-cy="intent-checkbox-b6ec3deac5f94500aef55d9c410e37f7"]').click();
    cy.get('[data-cy="intent-checkbox-b6ec3deac5f94500aef55d9c410e37f7"]').click();

    cy.get('[data-cy="selected-intents-length"]')
      .invoke('text')
      .then((text) => {
        const maxIntents = text.split('/')[0].trim();
        expect(parseInt(maxIntents)).to.eq(0);
      })
  });

  it('should correctly display the expressions for each intent', () => {
    cy.get('[data-cy="intent-expressions-34d7831e137a4016a55f98926800a643"]')
      .should('contain', 'Hello')
      .and('contain', 'Hi');

    cy.get('[data-cy="intent-expressions-b6ec3deac5f94500aef55d9c410e37f7"]')
      .should('contain', 'See you');
  });

  it('should have correct intent names and descriptions', () => {
    cy.get('[data-cy="intent-name-34d7831e137a4016a55f98926800a643"]').should('contain', 'Greeting');
    cy.get('[data-cy="intent-description-34d7831e137a4016a55f98926800a643"]').should('contain', 'The visitor says hello.');

    cy.get('[data-cy="intent-name-b6ec3deac5f94500aef55d9c410e37f7"]').should('contain', 'Goodbye');
    cy.get('[data-cy="intent-description-b6ec3deac5f94500aef55d9c410e37f7"]').should('contain', 'The visitor says goodbye.');
  });

  it('should toggle row selection when clicked on the row', () => {
    cy.get('[data-cy="intent-name-34d7831e137a4016a55f98926800a643"]').click();

    cy.get('[data-cy="intent-checkbox-34d7831e137a4016a55f98926800a643"]').find('input').should('be.checked');
    cy.get('[data-cy="intent-name-34d7831e137a4016a55f98926800a643"]').parents('tr').should('have.class', 'selected-row');
  });
});
