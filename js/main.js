function Quote(){
   var Quote1=[`“Be yourself; everyone else is already taken.”`,`“So many books, so little time.”`,`“A room without books is like a body without a soul.”`,`Mae West
   “You only live once, but if you do it right, once is enough.”`,`“Be the change that you wish to see in the world.”`]
 var Quote2=[`― Oscar Wilde`,`― Frank Zappa`,`― Marcus Tullius Cicero`,`― Mae West`,`― Mahatma Gandhi`]
  var x=Math.floor(Math.random()*Quote1.length)
   document.getElementById("test-1").innerHTML=Quote1[x];
   document.getElementById("test-2").innerHTML=Quote2[x];

}