

-- creation de la base de donnees:

CREATE DATABASE IF NOT EXISTS agriparc;


CREATE TABLE IF NOT EXISTS t_type(

	idtype int NOT NULL AUTO_INCREMENT,
	nom varchar(1000) DEFAULT NULL,
	
	PRIMARY KEY(idtype)
	
	)ENGINE=InnoDB  DEFAULT CHARSET=latin1 ;
    
    
    
INSERT INTO t_type(idtype,nom) VALUES
(1,'nc-icon nc-globe text-warning'),
(2,'nc-icon nc-money-coins text-success'),
(3,'nc-icon nc-vector text-danger');


CREATE TABLE IF NOT EXISTS t_materiel(

	id int(10) unsigned NOT NULL AUTO_INCREMENT,
	description text DEFAULT NULL,
	nom varchar(255) DEFAULT NULL,
    idtype int,
	PRIMARY KEY (id),
    FOREIGN KEY (idtype) REFERENCES t_type(idtype)
	
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 ;




INSERT INTO t_materiel (id,description,nom,idtype) VALUES

(1,'tracteur Deutz avec chargeur et benette,embrayage à refaire. Mécanique impeccable. (test BDD)', 'Tracteur',1),

(2,'mini pelle Catepillar 5 tonnes 305 CR; Année : 2005, Heures : 2875 h, Attache rapide Verachter CW 10 mécanique ( largeur entre oreille 320 mm ), Double ligne hydraulique BRH + double effet pour pince de trie (test BDD)', 'Mini pelle',2),

(3,'Pelle terrassier acier, manche bois L.110 cm, entièrement trempée, manche en frêne verni (test BDD)', 'Mini pelle',3);

