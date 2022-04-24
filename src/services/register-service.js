import api from "./api-service";   
class Register {
    getRegistered(data) {
      try {
        return api.post({
          url: 'api/register',
          body: {
            email: data.email,
            password: data.password,
            password_confirmation: data.confirmpassword
          }
        });
      } catch (error) {
          console.log('eeeeeeeeeeeee', error);
        return new Error(error);
      }
    }
    getLogin(data) {
        console.log('dddddddddddddddddddddddddddddddddddddddddds', data);
        try {
          return api.post({
            url: 'api/login',
            body: {
              email: data.email,
              password: data.password,
            }
          });
        } catch (error) {
            console.log('eeeeeeeeeeeee', error);
          return new Error(error);
        }
      }
  }
  export default new Register();