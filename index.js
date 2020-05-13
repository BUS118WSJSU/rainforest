var express=require("express");
var bodyParser=require('body-parser');

var conn = require('./config');
var app = express();
app.use(express.static("."));

app.use(bodyParser.urlencoded({ extended: true }));
app.use("images", express.static(__dirname + "/public/images"));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', function (req, res) {
   res.redirect('/test.html')
})

app.get('*', function(req, res){
	res.redirect('/test.html')
})

app.get('/test.html', function(req, res){
	res.sendFile("test.html");
})

app.get('/login.html', function (req, res) {
   res.sendFile( "login.html" );
})

app.get('/signup.html', function(req, res){
	res.sendFile("signup.html");
})


app.post('/signup', function(req, res){
	conn.query("INSERT INTO users VALUES (?, ?, ?);", [req.body.email, req.body.username, req.body.password], function(error, results, fields){
		if(error){
			console.log(error);
			res.json({
				success: false
			});
		} else {
			res.json({
				success: true
			})
		}
	});

});

app.post('/login', function(req, res){
	conn.query("SELECT * FROM users WHERE user=?", req.body.username, function(error, results, fields){
		var body = req.body;
		var success = null;
		var message = "";
		if(error){
			success = false;
			message = "Unknown error occured"
		} else {
			if(results.length <= 0){
				success = false;
				message = "User not found. Please Sign Up!"
			} else {
				var i;
				for (i = 0; i < results.length; i++) {
					// Check username
					if(results[i].User == req.body.username)
					{
						if(results[i].Password == req.body.password){
							success = true;
							message = "User " + results[i].User + " with email " + results[i].Email + " logged in!";
							break;
						}
					}
				}
				if(!success) message = "Incorrect password!"
			}
		}
	res.json({
				success: success,
				message: message
			});
	})

})


app.listen(3000);