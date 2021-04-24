export const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://tuttifrutti-server.herokuapp.com/api'
    : 'http://localhost:4000/api';
