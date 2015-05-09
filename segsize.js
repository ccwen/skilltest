var fs=require("fs");
var fn=process.argv[2]||"lj0001_001.xml";

var processSeg=function(id,text,sz){
	sz.push([id,text.length]);
}

var processFile=function(content) {
	var ex=0, pbid="_", sizes=[];
	content.replace(/<pb id="(.*?)"\/>/g,function(m,m1,at){
		processSeg(pbid,content.substring(ex,at-1),sizes);
		ex=at;
		pbid=m1;
	});
	processSeg(pbid,content.substring(ex),sizes); //don't forget to process last segment
	return sizes;
}

var segsize=processFile(fs.readFileSync(fn,"utf8"));
segsize.sort(function(a,b){return b[1]-a[1]});
console.log(segsize);