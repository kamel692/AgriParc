
const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'agriparc'
});

connection.connect();


// requete get:
app.get('/materiels', (req, res, next) => {
   connection.query(
    'SELECT id, type, description, nom FROM t_materiel',
    (error, result) => {
      if (error) {
        console.error(error);
        res.status(500).json({ status: 'error' });
      } else {
        res.status(200).json(result);
      }
    }
  );
});

// requete post:
app.post('/materiels', (req, res, next) => {

  connection.query(
    'INSERT INTO t_materiel (type, description, nom) VALUES (?,?,?)',
    [req.body.type, req.body.description, req.body.nom],
    (error,result) => {
      if (error) {
        console.error(error);
        res.status(500).json({ status: 'error' });
      } else {
        req.body.id = result.insertId ;
        res.status(200).json(req.body);
      }
    }
  );
});




app.delete('/materiels/:id',(req,res,next)=>{

  console.log(req.params.id);
  connection.query(
    'DELETE FROM t_materiel WHERE id=?',
    [req.params.id],
    (error,result)=>{
      if(error){
        console.error(error);
        res.status(500).json({ status: 'error' });
      }else{
        //res.redirect('/materiels');
        console.warn("supression success");
        res.status(200).json(result)
      }
    }
  )
  });



app.listen(port, () => console.log(`Example app listening on port ${port}!`));

module.exports = express.Router();

process.on('SIGINT',function(){
  console.log("fin de connexion");
  process.exit();
  connection.end();
});





