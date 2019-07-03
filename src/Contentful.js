const contentful = require("contentful");

export default contentful.createClient({
  space: "mw9k1jrd14cb",
  accessToken: "EMs1hufRRAxqD3NbDpiAj4jOSJUcV7rHNLBh78ntAD8"
  // space: process.env.REACT_APP_API_SPACE,
  // accessToken: process.env.REACT_APP_ACCESS_TOKEN
});
