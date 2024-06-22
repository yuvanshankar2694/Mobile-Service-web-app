import axios from 'axios'

const USER_REST_API_URL = 'http://localhost:8080/api/v1/users';



class UsersBack {
  getAllUsers() {
    return axios.get(USER_REST_API_URL)
  }

  createUsers(users){
    return axios.post(USER_REST_API_URL,users)
  }
  
  deleteuserById(userId)
  {
      return axios.delete(USER_REST_API_URL+'/'+userId)
  }
}

export default new UsersBack()


