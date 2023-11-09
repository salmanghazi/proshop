import bcrypt from 'bcryptjs';

const users = [
	{
		name: 'Admin user',
		email: 'admin@email.com',
		isAdmin: true,
		password: bcrypt.hashSync('123456', 10),
	},
	{
		name: 'Salman G',
		email: 'salman@email.com',
		isAdmin: false,
		password: bcrypt.hashSync('123456', 10),
	},
	{
		name: 'Awais A',
		email: 'awais@email.com',
		isAdmin: false,
		password: bcrypt.hashSync('123456', 10),
	},
];

export default users;