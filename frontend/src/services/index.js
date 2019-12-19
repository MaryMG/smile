import axios from 'axios';
let baseURL;

process.env.NODE_ENV === 'production'
  ? (baseURL = 'here should be your production endpoint')
  : (baseURL = 'http://localhost:3000/api');

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
  getPosts: () => {
    return service.get('/post')
 },
 getDoctors: () => {
  return service.get('/auth/getDoctors')
},
getRegistro: (docId) => {
  return service.post('/registros', {docId})
},

  getUser: () => {
    return service.get('/profile')
  },

  logout: () => {
    return service.post('/auth/logout')
  },
  submitPost: (data) => {
    
    return service.post('/post', data)
  },

  submitRegistro: (data) => {
   
    return service.post('/registro', data)

  }
  
};

export default MY_SERVICE;
