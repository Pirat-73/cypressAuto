describe('e2e покупка аватара', function () {

    it
     (
        'Зайти на сайт', function(){
          cy.visit('https://pokemonbattle.ru/login'); // зашел на сайт покемонов
          cy.get(':nth-child(1) > .auth__input').type ( 'LOGIN'); // ввел в поле авторизации логин
          cy.get('#password').type ( 'PASSWORD'); // ввел в поле пароль пароль 
          cy.get('.auth__button').click(); // нажал  на кнопку войти  
          cy.wait(500); // подождал 500 милисек
          cy.get('.pokemon__title').contains('Покемоны');
          cy.get('.pokemon__title').should("be.visible");
          cy.get('.header__id-texts').click();
          cy.get('[href="/shop"]').click();
          cy.get('.shop__list > :nth-child(9)').contains ('Аватар тренера № 9');
          cy.get('.shop__list > :nth-child(9)').should("be.visible");
          cy.wait(500);
          cy.get('.available > button').first().click({ force: true });
          cy.get('.pay__main-header'). contains ('Пикачунькофф');
          cy.get('font').contains('Вернуться в магазин');
          cy.get('font').should("be.visible");
          cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type ('4627100101654724');
          cy.get(':nth-child(1) > .pay_base-input-v2').type ('1225');
          cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type ('125');
          cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Pavel Pavel');
          cy.get('.pay-btn').click();
          cy.get('#cardnumber').type('56456');
          cy.get('.payment__submit-button').click();
          cy.get('.payment__font-for-success').contains('Покупка прошла успешно');
          cy.get('.payment__font-for-success').should("be.visible");

            })
    
        })