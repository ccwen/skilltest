var lines=require("fs").readFileSync("numbers.txt","utf8").split(/\r?\n/);
var check=[];
for (var i=0;i<lines.length;i++) {
	if (check[lines[i]]) console.log("repeat at line",i+1, "with" , check[lines[i]]+1);
	check[lines[i]]=i;
}