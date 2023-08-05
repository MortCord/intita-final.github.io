"use strict";

import events from '../json/event.json' assert {type: 'json'};



onload = function(){
    changeContent(this.localStorage.getItem('event'));
}

function changeContent(event){
    console.log(events[0][event]);

    if(event == null){
        event = 'prof';
    }

    const els = document.getElementsByClassName('change');


    document.getElementById(event).style="filter: blur(5px);"
    document.getElementById('eventImg').src=events[0][event]['eventImg'];
    document.getElementById('OrganImg1').src=events[0][event]['organImg1'];
    document.getElementById('OrganImg2').src=events[0][event]['organImg2'];
    document.getElementById('OrganImg3').src=events[0][event]['organImg3'];
    document.getElementById('OrganText1').innerHTML=events[0][event]['organText1'];
    document.getElementById('OrganText2').innerHTML=events[0][event]['organText2'];
    document.getElementById('OrganText3').innerHTML=events[0][event]['organText3'];

    for(var i = 0; i < els.length; i++){
        if(events[0][event][els[i].id]){
            els[i].innerHTML = events[0][event][els[i].id];
        }
    }


    
}