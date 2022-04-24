import api from "./api-service";   
class Todo {
// this service is for the api calls
    createTodo(data) {
      try {
          // creating a new todo
        return api.post({
          url: 'api/item',
          body: {
            title: data.title,
            description: data.description,
          }
        });
      } catch (error) {
          console.log('error', error);
        return new Error(error);
      }
    }
    getTodoList() {
        // fetch all todos....
        try {
          return api.get({
            url: 'api/items',
          });
        } catch (error) {
            console.log('error', error);
          return new Error(error);
        }
      }
      deleteTodoList(id) {
          // delete the todo according to the id....
        try {
          return api.delete({
            url: 'api/item/' + id,
          });
        } catch (error) {
            console.log('error', error);
          return new Error(error);
        }
      }
      viewTodo(id) {
          // view the todo single record id according
        try {
          return api.get({
            url: 'api/item/' + id,
          });
        } catch (error) {
            console.log('error', error);
          return new Error(error);
        }
      }
      updateTodo(data) {
      try {
        return api.put({
          url: 'api/item/' + data.id,
          body: {
            description: data.description,
          }
        });
      } catch (error) {
          console.log('error', error);
        return new Error(error);
      }
    }
  }
  export default new Todo();