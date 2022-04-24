class StorageService {
    // this is for the setting data on the local storage
    set(id, data) {
      data = JSON.stringify(data);
      window.localStorage.setItem(id, data);
    }
    get(id) {
      var data = window.localStorage.getItem(id);
      if (data === "true") {
        return true;
      } else if (data === "false") {
        return false;
      } else {
        data = JSON.parse(data);
        return data;
      }
    }
  }
  export default new StorageService();
  