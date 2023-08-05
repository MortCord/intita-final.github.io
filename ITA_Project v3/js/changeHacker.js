"use strict";

import hackers from '../json/hackers.json' assert {type: 'json'};



onload = function(){
    checkSocials(this.localStorage.getItem('hacker'));
    changeContent(this.localStorage.getItem('hacker'));
    

    
}

function checkSocials(hacker){
    const socials = document.getElementsByClassName('soc');

    for(let i = 0;i < socials.length;i++){
        if(hackers[0][hacker][socials[i].id] == ""){
            socials[i].style = "display:none;";
        }else{
            socials[i].onclick = function(){
                window.location.href=hackers[0][hacker][socials[i].id];
            }
        }
    }

}

function changeContent(hacker){
    console.log(hackers[0][hacker]);

    if(hacker == null){
        hacker = 'sasha'
    }

    const els = document.getElementsByClassName('change');

    document.getElementById('studentImg').src=hackers[0][hacker]['img'];


    for(var i = 0; i < els.length; i++){
        if(hackers[0][hacker][els[i].id]){
            els[i].innerHTML = hackers[0][hacker][els[i].id];
        }
    }


    
}

