const contentful = require("contentful");

export default contentful.createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE,
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN
  // space: process.env.REACT_APP_API_SPACE,
  // accessToken: process.env.REACT_APP_ACCESS_TOKEN
});
