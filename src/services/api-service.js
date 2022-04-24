import { mainBackend } from "../environment/environment";
import StorageService from "../services/storage-service";


// fully dynamically axios api calls.
const getheaders = ()=>({
//   uid: StorageService.get("uid")
  Authorization: `Bearer ${StorageService.get("authorization")}`,
});
class ApiService {
  get(data) {
// for fetch data
    return mainBackend.request({
      headers: getheaders(),
      method: "get",
      url: data.url,
      params: data.params,
    });
  }
  post(data) {
 // for post data..
    return mainBackend.request({
      headers: getheaders(),
      method: "post",
      url: data.url,
      data: data.body,
    });
  }
  put(data) {
      // for the update record
    return mainBackend.request({
      headers: getheaders(),
      method: "put",
      url: data.url,
      data: data.body,
    });
  }
  delete(data) {
      // for the delete method
    return mainBackend.request({
      headers: getheaders(), 
      method: "delete",
      url: data.url,
    });
  }
}
// export {quizzservice};
export default new ApiService();
