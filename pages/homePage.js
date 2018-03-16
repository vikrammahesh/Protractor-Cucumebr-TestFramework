var HomePage=function(){

  this.todoListTodoText=element(by.model('todoList.todoText'));
  this.add=element(by.css('[value="add"]'));
  this.todoList=element(by.repeater('todo in todoList.todos'));

  this.enterTodoText=function(text){
     this.todoListTodoText.sendKeys(text);
  };

  this.clickAdd=function(){
     this.add.click();
  };

};

module.exports=new HomePage();