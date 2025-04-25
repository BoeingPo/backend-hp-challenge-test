const dotenv = require('dotenv').config();
const app = require('./src/app.js');
const PORT = process.env.PORT || 3000;

if (!dotenv){
  console.log("couldn't load env")
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});