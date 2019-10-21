
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
const cors = require('cors');
app.use(cors());

var materiels = [
  {
    'id': 1,
    'type': "nc-icon nc-globe text-warning", //"Vehicule",
    'description': "tracteur Deutz avec chargeur et benette,embrayage à refaire. Mécanique impeccable.",
    'nom': "Tracteur"
  },
  {
    'id': 2,
    'type': "nc-icon nc-money-coins text-success",// "Materiel mecanique",
    'description': "mini pelle Catepillar 5 tonnes 305 CR; Année : 2005, Heures : 2875 h," +
      "Attache rapide Verachter CW 10 mécanique ( largeur entre oreille 320 mm ), Double ligne hydraulique BRH + double effet pour pince de trie",
    'nom': "Mini pelle"
  },
  {
    'id': 3,
    'type': "nc-icon nc-vector text-danger", //"Outils",
    'description': "Pelle terrassier acier, manche bois L.110 cm, entièrement trempée, manche en frêne vernis",
    'nom': "Pelle"
  }
];

function materielsById(materiels, id) {
  return materiels.find(item => item.id == id);
}

app.get('/materiels', function (req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.json(materiels);
});

app.get('/materiels/:id', function (req, res) {
  res.json(materielsById(materiels, req.params.id));
});


app.post('/materiels', function (req, res) {
  if (materiels.length != 0) {
    /* Doit pusher */
    let lastId = materiels[materiels.length - 1].id;
    req.body.id = lastId + 1;
  } else {
    req.body.id = 1;
  }
  materiels.push(req.body);
  res.json(req.body);
});

app.put('/materiels/:id', function (req, res) {
  statIndex = materiels.findIndex(stat => stat.id == req.params.id);
  if (statIndex != -1) {
    materiels[statIndex] = req.body;
    res.json(materiels[statIndex]);
  } else {
    /* Doit envoyer erreur */
    res.status(400).end;
  }
});


app.delete('/materiels/:id', function (req, res) {
  indice = materiels.findIndex(item => (item.id == req.params.id));
  materiels.splice(indice, 1);
  res.json(materiels);

})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
