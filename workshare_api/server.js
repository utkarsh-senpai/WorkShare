const express = require('express');
const bodyPaser = require('body-parser');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const cors = require('cors');
const knex = require('knex');
const database = knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : 'pass@1234',
    database : 'workshare'
  }
});
const app = express();
app.use(bodyPaser.json());
app.use(cors());
app.get('/',(req,res)=>{
	console.log('Server is Working.');
})
// app.post('/post',(req,res)=>{

// })
// app.get('/suggested',(req,res)=>{
	
// })
// app.get('/project',(req,res)=>{

// })
// app.post('/project',(req,res)=>{

// })
app.post('/signin',(req,res)=>{
	database.select('email','hash').from('login')
		.where('email','=',req.body.email)
		.then(data =>{

			const isValid = bcrypt.compareSync(req.body.password, data[0].hash);
			console.log(isValid);
			if (isValid){
				return database.select('*').from('users')
						.where('email','=',req.body.email)
						.then(user =>{
							res.json(user[0])
						})
						.catch(err => res.status(400).json('unable to get user.'))
			}
			else {res.status(400).json('Wrong Credentials')}
			
		})
		.catch(err => res.status(400).json('Wrong Credentials.'))
})
app.get('/profile',(req,res)=>{
	const {id} = req.body;
	
	database.select('*').from('users').where({
		id: id
	})
	.then(user=>{
		res.json(user[0])
	})
	.catch(err => res.status(400).json('No user found.'))
})
app.put('/profile',(req,res)=>{
	const {id, fname, lname, username,pnum,email,linkedin,github} = req.body; 
	return database.where('id','=',id)
	.update({
		fname: fname,
		lname: lname,
		username: username,
		pnum: pnum,
		email: email,
		linkedin: linkedin,
		github: github
	})
	.then(user=>{
		res.json(user[0])
	})
	.catch(err => res.status(400).json('No user found.'))
})
app.post('/register',(req,res)=>{
	const {fname, lname , password, username,pnum,email,linkedin,github,skill1,skill2,skill3} = req.body; 

	salt = bcrypt.genSaltSync(saltRounds);
	const hash = bcrypt.hashSync(password, salt);

	database.transaction(trx =>{
		trx.insert({
			hash: hash,
			email:email,
			username: username
		})
		.into('login')
		.returning('email')
		.then(loginemail =>{
			return trx('users')
			.returning('*')
				.insert({
					fname: fname,
					lname: lname,
					username: username,
					pnum: pnum,
					email: email,
					linkedin: linkedin,
					github: github,
					joined: new Date(),
					skill2: skill2,
					skill1: skill1,
					skill3: skill3
				})
				.then(user =>{
					console.log(user[0]);
					res.json(user[0]);
				})
				
		})
		.then(trx.commit)
		.catch(trx.rollback)
	
		})
		.catch(err => res.status(400).json(err))

})

app.listen(3000,()=>{
	console.log('Server is Working on Port 3000.');
})