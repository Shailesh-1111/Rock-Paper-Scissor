
var arr=["rock", "paper", "scissor"];

// changing the computer elements start



var roundSize=prompt("Enter The Total Number of Rounds You Want to Play");
if(roundSize=="") roundSize=5;



var ok=1;
var curr1=-1;
var winner=-1;
var index=-1;
var user=0,computer=0;
var rounds=0;


// changing the computer elements start


// choosing the user element start

    function disappear(curr){
        curr1=curr;
        rounds++;
        for(var i=0;i<3;i++){
            var image2=document.querySelectorAll("#user-choice .img")[i];
            image2.style.visibility="hidden";
       }

       var term="images/"+arr[curr]+".png";

       var image2=document.querySelectorAll("#user-choice .img")[1];
       image2.style.visibility="visible";

      
       document.querySelectorAll("#user-choice .img")[1].setAttribute("src",term);
       document.querySelectorAll("#user-choice .img")[1].style.pointerEvents="none";

       index=Math.floor(Math.random()*3);
       console.log(index);

       var term2="images/"+arr[index]+".png";

       var image2=document.querySelectorAll(".comp-img")[0].setAttribute("src",term2);
       console.log(curr1+" "+index);

       
       result();
       

       if(winner==0){
           user++;
           document.querySelectorAll("#user-score")[0].innerHTML=user;
       }

       else if(winner==1){
           computer++;
           document.querySelectorAll("#computer-score")[0].innerHTML=computer;
       }

       winner=-1;

       if(rounds==roundSize){
        document.querySelectorAll(".btn")[1].style.visibility="hidden";

        if(user>computer)  {
            document.querySelectorAll("#result #resu")[0].innerHTML= "!!! YOU  ARE  FINAL WINNER !!!";
            document.querySelectorAll("#result #resu")[0].style.color="green";
        }
        else if(user==computer){
            document.querySelectorAll("#result #resu")[0].innerHTML= "!!! IT'S  A  DRAW !!!";
            document.querySelectorAll("#result #resu")[0].style.color="yellow";
        }

        else if(user<computer)  {
            document.querySelectorAll("#result #resu")[0].innerHTML= "!!! COMPUTER  IS  FINAL  WINNER !!!";
            document.querySelectorAll("#result #resu")[0].style.color="red";
        }
       }

       document.querySelectorAll(".btn")[1].addEventListener("click", function(){
        document.querySelectorAll("#result #resu")[0].innerHTML= "!!! CLICK YOUR CHOICE !!!";
        document.querySelectorAll(".img")[0].style.visibility="visible";
        document.querySelectorAll(".img")[1].style.visibility="visible";
        document.querySelectorAll(".img")[1].setAttribute("src","images/paper.png");
        document.querySelectorAll(".img")[2].style.visibility="visible";
        document.querySelectorAll(".comp-img")[0].setAttribute("src","images/comp-img.gif");
        document.querySelectorAll("#user-choice .img")[1].style.pointerEvents="";
       } );
   }

// choosing the user element end

// computer choice start


//winner



function result(){

    document.querySelectorAll("#result #resu")[0].innerHTML;

   if(index===curr1){
       document.querySelectorAll("#result #resu")[0].innerHTML= "!!! DRAW !!!";
   }

   else if(index===0){
       if(curr1===1){
           document.querySelectorAll("#result #resu")[0].innerHTML= "!!! WIN !!!";
           winner=0;
        }
       else if(curr1===2){
           document.querySelectorAll("#result #resu")[0].innerHTML= "!!! LOOSE !!!";
           winner=1;
       }
   }

   else if(index===1){
    if(curr1===0){
        document.querySelectorAll("#result #resu")[0].innerHTML= "!!! LOOSE !!!";
        winner=1;
    }
    else if(curr1===2){
        document.querySelectorAll("#result #resu")[0].innerHTML= "!!! WIN !!!";
        winner=0;
    }
   }

   else if(index===2){
    if(curr1===0){
        document.querySelectorAll("#result #resu")[0].innerHTML= "!!! WIN !!!";
        winner=0;
    }
    else if(curr1===1){
        document.querySelectorAll("#result #resu")[0].innerHTML= "!!! LOOSE !!!";
        winner=1;
    }
   }

}




//
