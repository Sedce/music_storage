// TODO: Use Sequelize in here
const Sequelize = require('sequelize');

const connectionUrl = 'postgres://carlpiao:carlpiao@localhost:5432/spotyfi';
const database = new Sequelize(connectionUrl);

const _user = database.define("_user",{
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false
	},
	fname: {
		type: Sequelize.STRING,
		allowNull: false
	},
    lname: {
        type: Sequelize.STRING,
		allowNull: false
    },
	username: {
		type: Sequelize.STRING,
		allowNull: false
	},
	password: {
		type: Sequelize.STRING,
		allowNull: false
	},
	email: {
		type: Sequelize.STRING,
		isEmail: true,
		allowNull: false
	}
},{timestamps: true});

const _admin = database.define("_admin",{
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false
	},
	fname: {
		type: Sequelize.STRING,
		allowNull: false
	},
    lname: {
        type: Sequelize.STRING,
		allowNull: false
    },
	username: {
		type: Sequelize.STRING,
		allowNull: false
	},
	password: {
		type: Sequelize.STRING,
		allowNull: false
	},
	email: {
		type: Sequelize.STRING,
		isEmail: true,
		allowNull: false
	}
},{timestamps: true});

const _artist = database.define("_artist", {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false
	},
	album_id: {
		type: Sequelize.INTEGER,
		foreignKey: true,
		allowNull: false
	},
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	description: {
		type: Sequelize.STRING,
		allowNull: true
	}
},{timestamps: true});

const _album = database.define("_album", {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false
	},
	title: {
		type: Sequelize.STRING,
		allowNull: false
	}
},{timestamps: true});

const _song = database.define("_song", {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false
	},
	title: {
		type: Sequelize.STRING,
		allowNull: false
	}
},{timestamps: true});


database.sync();

module.exports._user = _user;
module.exports._admin = _admin;
module.exports._artist = _artist;
module.exports._album = _album;
module.exports._song = _song;
