
var express = require('express');
var app=express();

var DetailsController=function(req,res){

console.log("details are following");
var details=
[
{OfficeId:1,Location:"Bangalore", Name: "Ankita", product:"software", Account:"Saving"},
{OfficeId:2,Location:"Pune", Name: "Sayali", product:"technical support",Account:"Current"},
{OfficeId:3,Location:"Mumbai",  Name: "Megha", product:"hardware", Account:"Saving"},
{OfficeId:4,Location:"Chennai", Name: "Harshada", product:"BPO", Account:"Current"},
{OfficeId:5,Location:"TN", Name: "Shweta", product:"Testing", Account:"Current"},
];
res.send(details);
};

app.get('/details',DetailsController);

var server=app.listen(8088,function(req,res)
{
	
console.log("details are provided by http://localhost:8088");	
}
)




