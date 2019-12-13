import axios from 'axios';
let baseURL;

process.env.NODE_ENV === 'production'
  ? (baseURL = 'here should be your production endpoint')
  : (baseURL = 'http://localhost:3000');

const service = axios.create({ withCredentials: true, baseURL });

const MY_SERVICE = {
  signup: async data => {
    try {
    console.log(data)
    let trueData = await service.post('/auth/signup', data)
    return trueData
    } catch (e) {
      console.log('error mierdero', e)
    }
  },

  login: data => {
    return service.post('/auth/login', data)
  },

  getUser: () => {
    return service.get('/profile')
  },

  logout: () => {
    return service.get('/auth/logout')
  }
  
};

export default MY_SERVICE;
