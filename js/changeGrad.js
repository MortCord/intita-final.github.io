"use strict";

import grads from '../json/grad.json' assert {type: 'json'};



onload = function(){
    changeContent(this.localStorage.getItem('grad'));
    checkSocials(this.localStorage.getItem('grad'));

}

function checkSocials(grad){
    const socials = document.getElementsByClassName('soc');

    for(let i = 0;i < socials.length;i++){
        if(grads[0][grad][socials[i].id] == ""){
            socials[i].style = "display:none;";
        }else{
            socials[i].onclick = function(){
                window.location.href=grads[0][grad][socials[i].id];
            }
        }
    }

}

function changeContent(grad){
    console.log(grads[0][grad]);

    if(grad == null){
        hacker = 'sasha';
    }

    const els = document.getElementsByClassName('change');

    document.getElementById('gradImg').src=grads[0][grad]['img'];


    for(var i = 0; i < els.length; i++){
        if(grads[0][grad][els[i].id]){
            els[i].innerHTML = grads[0][grad][els[i].id];
        }
    }


    
}