import app from "./app";
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 3000;

if (!dotenv){
  console.log("couldn't load env")
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});