describe('Проверка авторизации', function () {
  
     beforeEach('Начало теста', function () {
          cy.visit('/');
          cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // написали скрипт, чтобы перед началом каждого автотеста выполнял действия 
            });
     it 
    (
    
         'Верный пароль и верный логин', function (){
              cy.visit('/'); // зашел на указанный сайт
              cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');; // проверяю цвет кнопки забыл пароль
              cy.get('#mail'). type ('german@dolnikov.ru'); // ввел верный логин
              cy.get('#pass') . type ('iLoveqastudio1'); // ввел верный пароль 
              cy.get('#loginButton').click(); // нашел кнопку войти и нажал 
              cy.get('#messageHeader').contains('Авторизация прошла успешно');   // проверил, что после авторизации вижу текст 
              cy.get('#messageHeader').should('be.visible'); // проверил, что текст виден пользователю
              cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверил есть ли крестик и его видимость пользователю
            })
   
    it (
    'Тест Кейс № 2. Проверка логики восстановления пароля', function(){
        cy.get('#mail'). type ('pavel@mail.ru'); // ввел любую почту
        cy.get('#forgotEmailButton').click(); // нажал забыл пароль
        cy.get('#forgotForm > .header').contains('Восстановите пароль'); //  Проверил есть ли текст восстановить пароль 
        cy.get('#forgotForm > .header').should('be.visible'); // проверил виден ли текст 
        cy.get('#exitRestoreButton > .exitIcon').should('be.visible'); // Проверил что есть крестик 
})
it 
    (
    
         'Тест Кейс № 3. верный пароль и НЕверный логин', function (){
         
              cy.get('#mail'). type ('pavel@mail.ru'); // ввел верный логин
              cy.get('#pass') . type ('iLoveqastudio1'); // ввел верный пароль 
              cy.get('#loginButton').click(); // нашел кнопку войти и нажал 
              cy.get('#messageHeader').contains('Такого логина или пароля нет');   // проверил, что после авторизации вижу текст 
              cy.get('#messageHeader').should('be.visible'); // проверил, что текст виден пользователю
              cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверил есть ли крестик и его видимость пользователю
            })
            it 
    (
    
         'Тест Кейс № 4. НЕверный пароль и верный логин', function (){
              cy.visit('/'); // зашел на указанный сайт
              cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');; // проверяю цвет кнопки забыл пароль
              cy.get('#mail'). type ('german@dolnikov.ru'); // ввел верный логин
              cy.get('#pass') . type ('KOT1123s'); // ввел верный пароль 
              cy.get('#loginButton').click(); // нашел кнопку войти и нажал 
              cy.get('#messageHeader').contains('Такого логина или пароля нет');   // проверил, что после авторизации вижу текст 
              cy.get('#messageHeader').should('be.visible'); // проверил, что текст виден пользователю
              cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверил есть ли крестик и его видимость пользователю
            })
            it 
            (
            
                 'Тест Кейс № 4. НЕверный пароль и верный логин', function (){
                      cy.visit('/'); // зашел на указанный сайт
                      cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');; // проверяю цвет кнопки забыл пароль
                      cy.get('#mail'). type ('pavelmail.ru'); // ввел верный логин
                      cy.get('#pass') . type ('iLoveqastudio1'); // ввел верный пароль 
                      cy.get('#loginButton').click(); // нашел кнопку войти и нажал 
                      cy.get('#messageHeader').contains('Нужно исправить проблему валидации');   // проверил, что после авторизации вижу текст 
                      cy.get('#messageHeader').should('be.visible'); // проверил, что текст виден пользователю
                      cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверил есть ли крестик и его видимость пользователю
                    })
                    it 
    (
    
         'Тест кейс №5 . Верный пароль и ЗАГЛАВНЫЙ логин', function (){
              cy.visit('/'); // зашел на указанный сайт
              cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');; // проверяю цвет кнопки забыл пароль
              cy.get('#mail'). type ('GerMan@dolnikov.ru'); // ввел верный логин
              cy.get('#pass') . type ('iLoveqastudio1'); // ввел верный пароль 
              cy.get('#loginButton').click(); // нашел кнопку войти и нажал 
              cy.get('#messageHeader').contains('Авторизация прошла успешно');   // проверил, что после авторизации вижу текст 
              cy.get('#messageHeader').should('be.visible'); // проверил, что текст виден пользователю
              cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверил есть ли крестик и его видимость пользователю
            })

})