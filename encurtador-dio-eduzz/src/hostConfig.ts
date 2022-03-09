require('dotenv/config');

const prod={
url: {
    API_URL: `https://encurt.clsdev.com.br/v1/`,
    
  }
  };
  const dev = {
   url: {
    API_URL:  `http://localhost:3333/v1/`,
   }
  };
const config = process.env.NODE_ENV === `development` ? dev : prod;
export default config