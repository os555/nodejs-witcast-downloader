// witcast-downloader.js
// By: Os555
// npm install node-wget

var wget = require('node-wget');
var i =1 ;
var j =0;
while(i<=62){
    if(j<=4){
        
       if(j==0){
        wget('http://media.blubrry.com/witcast/s/witcastthailand.com/witcast/witcast-ep'+i+'.mp3');
        console.log('wget http://media.blubrry.com/witcast/s/witcastthailand.com/witcast/witcast-ep'+i+'.mp3');
        j +=1;
        }else{
        wget('http://media.blubrry.com/witcast/s/witcastthailand.com/witcast/witcast-ep'+i+'-'+j+'.mp3');
        console.log('wget http://media.blubrry.com/witcast/s/witcastthailand.com/witcast/witcast-ep'+i+'-'+j+'.mp3');
        j +=1;
        }
    }
    else{
        i +=1;
        j =0;
    }
  }
