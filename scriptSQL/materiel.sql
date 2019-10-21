

-- creation de la base de donnees:

CREATE DATABASE IF NOT EXISTS agriparc;


-- creation de la table t_materiel:


CREATE TABLE IF NOT EXISTS t_materiel(

	id int(10) unsigned NOT NULL AUTO_INCREMENT,
	type varchar(255) DEFAULT NULL,
	description text DEFAULT NULL,
	nom varchar(255) DEFAULT NULL,
	PRIMARY KEY (id)




) ENGINE=InnoDB  DEFAULT CHARSET=latin1


-- insertion de donnees (test):

INSERT INTO t_materiel (id,type,description,nom) VALUES

(1,'nc-icon nc-globe text-warning','tracteur Deutz avec chargeur et benette,embrayage à refaire. Mécanique impeccable. (test BDD)', 'Tracteur'),

(2,'nc-icon nc-money-coins text-success','mini pelle Catepillar 5 tonnes 305 CR; Année : 2005, Heures : 2875 h, Attache rapide Verachter CW 10 mécanique ( largeur entre oreille 320 mm ), Double ligne hydraulique BRH + double effet pour pince de trie (test BDD)', 'Mini pelle'),

(3,'nc-icon nc-vector text-danger','Pelle terrassier acier, manche bois L.110 cm, entièrement trempée, manche en frêne verni (test BDD)', 'Mini pelle');




