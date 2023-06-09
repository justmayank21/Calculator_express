const express= require("express");
const bodyParser= require("body-parser");
const app= express();

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
    res.sendFile(`${__dirname}/index.html`);
}); 

app.post('/', function(req, res){

    var num1= Number(req.body.num1);
    var num2= Number(req.body.num2);
    var result= Number(num1 + num2);

    res.send("The result of calculation is: " + result);
});

app.get('/bmicalculator', function(req, res){
    res.sendFile(`${__dirname}/bmiCalculator.html`);
})

app.post('/bmicalculator', function(req, res){
    var wt= parseFloat(req.body.weight);
    var ht= parseFloat(req.body.height);
    var result2= parseFloat(wt/(ht*ht));

    res.send("Your BMI is: " + result2);
})

app.listen(4000, function(){
    console.log("server is running on port 4000: ");
});