import axios from 'axios';
let baseURL;

process.env.NODE_ENV === 'production'
  ? (baseURL = 'here should be your production endpoint')
  : (baseURL = 'http://localhost:3000/api');

const service = axios.create({ withCredentials: true, baseURL });

const MY_SERVICE = {
  signup: async data => {
    try {
    let trueData = await service.post('/auth/signup', data)
    return trueData
    } catch (e) { 
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
  },

  getPosts: () => {
     return service.get('/post')
  },

  submitPost: (data) => {
    console.log('creando un post', data)
    return service.post('/post', data)
  }
  
};

export default MY_SERVICE;
