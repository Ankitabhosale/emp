
var express = require('express');
var app=express();

var DetailsController=function(req,res){

console.log("Contoso");
var details=
[
{OfficeId:1,Location:"Bangalore", Name: "Ankita", description:"software", Account:"Saving"},
{OfficeId:2,Location:"Pune", Name: "Sayali", description:"technical support",Account:"Current"},
{OfficeId:3,Location:"Mumbai",  Name: "Megha", description:"hardware", Account:"Saving"},
{OfficeId:4,Location:"Chennai", Name: "Harshada", description:"BPO", Account:"Current"},
{OfficeId:5,Location:"TN", Name: "Shweta", description:"Testing", Account:"Current"},
];
res.send(details);
};

app.get('/details',DetailsController);

var server=app.listen(3000,function(req,res)
{
	
console.log("details are provided by http://localhost:3000");	
}
)




