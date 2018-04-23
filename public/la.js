// TODO
  // LOCATION - https://eu1.locationiq.org/v1/search.php?key=9cfec2bc4ab06a&q=ahmedabad&format=json
function las(){
if(document.getElementById("sel").value!="user"){
  document.getElementById("next").style.display = "none";
}
if(document.getElementById("sel").value=="list"){
  document.getElementById("next").style.display = "inline";
  document.getElementById("next").placeholder = "Enter as username/ListName"
}
  else{
      document.getElementById("next").style.display = "inline";
  }
}

function laso(){
  if(document.getElementById("sell").value=="rt1"){document.getElementById("uno-ans").style.display = "inline";}
  if(document.getElementById("sell").value=="fave1"){document.getElementById("uno-ans").style.display = "inline";}
  if(document.getElementById("sell").value=="near1"){document.getElementById("uno-ans").style.display = "inline";}
  if(document.getElementById("sell").value=="reply1"){document.getElementById("uno-ans").style.display = "inline";}
  if(document.getElementById("sell").value=="ment1"){document.getElementById("uno-ans").style.display = "inline";}
}

function lasu(){
  if(document.getElementById("selll").value=="rt2"){document.getElementById("dos-ans").style.display = "inline";}
  if(document.getElementById("selll").value=="reply2"){document.getElementById("dos-ans").style.display = "inline";}
  if(document.getElementById("selll").value=="fave2"){document.getElementById("dos-ans").style.display = "inline";}
  if(document.getElementById("selll").value=="near2"){document.getElementById("dos-ans").style.display = "inline";}
  if(document.getElementById("selll").value=="ment2"){document.getElementById("dos-ans").style.display = "inline";}

}
//document.getElementById("sel").addEventListener("click", las);
//document.getElementById("sel").addEventListener('touchend', las);
var read = [];
var totes = [];
var reed = [];
var temp = "";

function checkName(){
    
  var tempr = "Tweets from ";
  if(document.getElementById("sel").value=="user" && document.getElementById("next").value==""){swal("Please fill out this filter before moving on 😊");return false;}
  if(document.getElementById("sel").value=="user"){temp+="from:"+document.getElementById("next").value + " "; tempr+= "@"+document.getElementById("next").value +" "}
  if(document.getElementById("next").value.charAt(0)=="@"){
    temp = "from:" + document.getElementById("next").value.substr(1) + " ";
    tempr = document.getElementById("next").value + " ";
  }
  if(document.getElementById("sel").value=="list"){temp+="list:"+document.getElementById("next").value + " "; tempr+= "list "+document.getElementById("next").value +" "}
  if(document.getElementById("sel").value=="verified"){temp+="filter:verified" + " "; tempr+="verified accounts "}
  if(document.getElementById("sel").value=="any"){tempr+="any account "}
  if(document.getElementById("sell").value=="rt1"){temp+="min_retweets:"+document.getElementById("uno-ans").value + " "; tempr+="which have retweets more than " + document.getElementById("uno-ans").value + " "}
  if(document.getElementById("sell").value=="reply1"){temp+="min_replies:"+document.getElementById("uno-ans").value + " "; tempr+="which have replies more than " + document.getElementById("uno-ans").value + " "}
  if(document.getElementById("sell").value=="fave1"){temp+="min_faves:"+document.getElementById("uno-ans").value + " "; tempr+="which have likes more than " + document.getElementById("uno-ans").value + " "}
  if(document.getElementById("sell").value=="ment1"){temp+=""+document.getElementById("uno-ans").value + " "; tempr+="which mention " + document.getElementById("uno-ans").value + " "}
  if(document.getElementById("sell").value=="near1"){temp+="geocode:"+document.getElementById("uno-ans").value + ",25mi "; tempr+="which are near co-ordinates " + document.getElementById("uno-ans").value + " "}
  if(document.getElementById("sell").value=="news1"){temp+="filter:news" + " "; tempr+="which are classified as news "}
  if(document.getElementById("sell").value=="safe1"){temp+="filter:safe " + " "; tempr+="which are 'safe' "}
  if(document.getElementById("sell").value=="img1"){temp+="filter:images " + " "; tempr+="which include images "}
  if(document.getElementById("sell").value=="nrt1"){temp+="-RT" + " "; tempr+="which are not retweets"}
  if(document.getElementById("selll").value=="rt2"){temp+="min_retweets:"+document.getElementById("dos-ans").value; tempr+="and have retweets more than " + document.getElementById("dos-ans").value}
  if(document.getElementById("selll").value=="reply2"){temp+="min_replies:"+document.getElementById("dos-ans").value; tempr+="and have replies more than " + document.getElementById("dos-ans").value}
  if(document.getElementById("selll").value=="fave2"){temp+="min_faves:"+document.getElementById("dos-ans").value; tempr+="and have likes more than " + document.getElementById("dos-ans").value}
  if(document.getElementById("selll").value=="near2"){temp+="geocode:"+document.getElementById("dos-ans").value + ",25mi "; tempr+="which are near co-ordinates " + document.getElementById("uno-ans").value + " "}

  if(document.getElementById("selll").value=="ment2"){temp+=""+document.getElementById("dos-ans").value; tempr+="and mention " + document.getElementById("dos-ans").value}
  if(document.getElementById("selll").value=="news2"){temp+="filter:news";tempr+="and are classified as news"}
  if(document.getElementById("selll").value=="safe2"){temp+="filter:safe"; tempr+="and are 'safe'"}
  if(document.getElementById("selll").value=="img2"){temp+="filter:images" ; tempr+="and include images"}
  if(document.getElementById("selll").value=="nrt2"){temp+="-RT"; tempr+="and are not retweets"}
  totes.push(temp);
  return true;
} 

jQuery("#form").submit(function(e) {
     var self = this;
     e.preventDefault();
    if(checkName()){
    console.log("addmyfilter (" + temp + ")");
    window.location.href = "https://twitter.com/intent/tweet?via=%23com__com___&text=addmyfilter (" + temp.trim() + ")";
  }
}
);
