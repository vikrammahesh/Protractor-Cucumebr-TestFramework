//features/step_definitions/my_step_definitions.js
var homePage=require('../pages/homePage.js');
var {defineSupportCode} = require('cucumber');


defineSupportCode(function({Given, When, Then}){

  Given(/^I go to "([^"]*)"$/, function(site,next) {
    browser.get(site);
    expect(homePage.todoListTodoText.isPresent()).to.eventually.be.true.and.notify(next);
   });

  When(/^I add "([^"]*)" in the task field$/, function(task) {
    homePage.enterTodoText(task);
  });

  When(/^I click the add button$/, function(next) {
    homePage.clickAdd();
    next();
  });

  Then(/^I should see my new task in the list$/, function(next) {
    browser.wait(result =>{
      return homePage.todoList.isPresent();
    });
    var todoList = element.all(by.repeater('todo in todoList.todos'));
    expect(todoList.count()).to.eventually.equal(3);
    expect(todoList.get(2).getText()).to.eventually.equal('do not Be Awesome').and.notify(next);
  });

});