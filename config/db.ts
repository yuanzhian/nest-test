
const productConfig = {
  mysql:{
    port:3306,
    host:'146.56.198.235',
    user:'root',
    password:'123456',
    database:'nest_test',
    connectionLimit: 10
  }
};

const localConfig = {
  mysql:{
    port:3306,
    host:'146.56.198.235',
    user:'root',
    password:'123456',
    database:'nest_test',
    connectionLimit: 10
  }
};

const config = process.env.NODE_ENV ? productConfig : localConfig;
export default config;
