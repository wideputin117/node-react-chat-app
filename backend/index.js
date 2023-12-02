const express = require("express");
const cors = require("cors");
const { default: axios} = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true })); // lets resource sharing from all origins

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  // using axios to fetch data
  // prjct id = 6b9e2dce-f923-4180-8d43-c78e632b490a  private key= 09389750-3490-43e3-95af-34faeb1cae3a
  try {
    const r= await axios.put('https://api.chatengine.io/users/',{
      username: username,
      secret: username,
      first_name: username
    },{
      headers:{"private-key":'09389750-3490-43e3-95af-34faeb1cae3a'}
    }) 
    return res.status(r.status).json(r.data);
  }catch(e){
          return res.status(e.response.status).json(e.response.data);
  }
  return res.json({ username: username, secret: "sha256..." });
});

app.listen(3001);