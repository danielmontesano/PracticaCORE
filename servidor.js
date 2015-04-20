//Daniel Montesano
var express = require('express');
var app = express();

app.get('/preguntas',function(req,res){
	res.send(
	'<html>'
		+'<head>'
			+'<title>Formulario</title>'
		+'</head>'
		+'<body>'
			+'<form method="get" action="/respuesta">'
				+'<input type="hidden" name="id" value="question1"/><br>'
				+'¿Quien descubrio America? '
				+'<input type="text" name="question1" value=""/>'
				+'<input type="submit" value="Enviar"/>'
			+'</form>'
			+'<form method="get" action="/respuesta">'
				+'<input type="hidden" name="id" value="question2"/><br>'
				+'¿Cual es la capital de Portugal? '
				+'<input type="text" name="question2" value=""/>'
				+'<input type="submit" value="Enviar"/>'
			+'</form>'
		+'</body>'
	+'</html>');
});

app.get('/respuesta', function(req,res){
	var mensaje = 'Error. Vuelva a intentarlo.';
	if(req.query.id==="question1"){
		if(req.query.question1==="Cristobal Colon"){
			mensaje = "Ha acertado. La respuesta correcta es: Cristobal Colon.";
		} else {
			mensaje = "Ha fallado. La respuesta correcta es: Cristobal Colon.";
		}
	}
	if(req.query.id==="question2"){
		if(req.query.question2==="Lisboa"){
			mensaje = "Ha acertado. La respuesta correcta es: Lisboa.";
		} else {
			mensaje = "Ha fallado. La respuesta correcta es: Lisboa.";
		}
	}
	res.send(
			'<html>'
				+'<head>'
					+'<title>Answer1</title>'
				+'</head>'
				+'<body>'
					+'<p>'+mensaje+'</p><br>'
					+'<a href="/preguntas">Volver a la pagina anterior</a>'
				+'</body>'
			+'</html>'
			);
	
});

app.listen(8000);