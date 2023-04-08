const express = require('express')

const app = express();
const cors = require('cors')


const PORT = 3001;
app.use(cors({ origin: "http://localhost:5174" }))


let participants = 0;
let toSell = 0;

app.get('/api/participants',(req,res)=> {
    res.json({ participants ,toSell})

});

app.post('/api/participants/:number', (req, res) => {
    const number = parseInt(req.params.number);
    if(participants >= 100){
        toSell += 100 *50;
        participants = 0;
    }else{null}
    participants = participants + number;

    res.json({participants ,toSell})
    console.log(participants ,toSell);

});



app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
  });