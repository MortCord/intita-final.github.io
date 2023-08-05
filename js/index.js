

onload = function(){
    checkMobile();

    var swiper = new Swiper(".swiper-event", {
        effect: "cards",
        grabCursor: true,
      });

      var elms = document.getElementsByClassName( 'splide-ttb' );
      for ( var i = 0, len = elms.length; i < len; i++ ) {
        new Splide( elms[ i ],{rewind:false, direction: 'ttb', width: 666, height: '100%', gap: 0} ).mount();
      }

      var swiper = new Swiper(".mySwiper2", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });





}






function checkMobile(){
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){

        console.log("mobile device");
        window.location.href = "index-mobile.html";
        return true;
      }else{

        console.log("not mobile device");
        return false;
      }
}




function hoverMoreArrowLocation(el,isTrue){
    if(isTrue){
        el.src="./img/arrow-location-hover.png";
    }else{
        el.src="./img/location-arrow.png";
    }
}

function search() {

    var searchText = document.getElementById("input").value;
    

    if (searchText.trim() !== "") {

      var regex = new RegExp(searchText, "gi");
      

      var elements = document.getElementsByTagName("p");
      

      for (var i = 0; i < elements.length; i++) {
        var element = elements[i];

        for (var j = 0; j < element.childNodes.length; j++) {
          var node = element.childNodes[j];
          if (node.nodeType === 3 && regex.test(node.textContent)) {

            var highlightedNode = document.createElement("span");
            highlightedNode.className = "highlight";
            var newText = node.textContent.replace(regex, function(match) {
              return "<span class='highlight'>" + match + "</span>";
            });
            highlightedNode.innerHTML = newText;
            element.replaceChild(highlightedNode, node);
          }
        }
      }
    }
  }

var txt = {
    en: {
        'golovna': "Main Page",
        'graduates': "Graduates",
        'students': "Students",
        'contacts': "Contacts",
        'about':"About academy",
        'academy': "VINNITSIA IT ACADEMY",
        'learn': "Learn with us",
        'reach': "Achieve professional success - guaranteed!",
        'toCall': "Call",
        'events': "Events of the academy",
        'eventName': "IT-weekend",
        'eventDesc': "A wonderful Sunday holiday from the teachers of the academy. Warm company, goodies and board games awaited the students. Thank you to everyone who participated and had a good time in our society. We hope you will come to our other future events as well.",
        'studentsText': "Students",
        'moreStudent': "More",
        'diplomas':"Diplomas",
        'ContactUs': "We will contact you",
        'inputName': "Write your name...",
        'inputSurname': "Write your surname...",
        'inputPhone': "Phone number",
        'timeCall': "A convenient time for you",
        'sendCall': "Send",
        'graduatesText': "Graduates",
        'achivment': "Acvivments:",
        'moreGraduates': "More",
        'locationText': "Location",
        'email': "email: intitavn@gmail.com"

    },
    
    ua: {
        'golovna': "Головна",
        'graduates': "Випускники",
        'students': "Студенти",
        'contacts': "Контакти",
        'academy': "ВІННИЦЬКА IT-АКАДЕМІЯ",
        'about':"Про академію",
        'learn': "Навчайся разом з нами",
        'reach': "Досягай професійного успіху - гарантовано!",
        'toCall': "Зателефонувати",
        'events': "Заходи академії",
        'eventName': "Айтішний вікенд",
        'eventDesc': "Чудове недільне свято від викладачів академії. На студентів чекала тепла компанія, смаколики та настільні ігри. Дякуємо усім, хто взяв участь та гарно провів час у нашому товаристві. Сподіваємось, ви завітаєте і на інші наші подальші заходи.",
        'studentsText': "Студенти",
        'moreStudent': 'Більше',
        'diplomas':"Дипломи",
        'ContactUs': "Зв’яжемось з вами",
        'inputName': "Введіть ім’я...",
        'inputSurname': "Введіть прізвище...",
        'inputPhone': "Номер телефону",
        'timeCall': "Зручний для вас час",
        'sendCall': "Надіслати",
        'graduatesText': "Випускники",
        'achivment': "Досягнення:",
        'moreGraduates': "Більше",
        'locationText': "Локація",
        'email': "пошта: intitavn@gmail.com"




    }
};

function setLang(lang){
    if(lang == 'en'){
        const el = document.getElementsByClassName('lang');
        document.getElementById('Flag').src='./img/USflag.png'
        document.getElementById('inputName').placeholder = txt[lang]['inputName'];
        document.getElementById('inputSurname').placeholder= txt[lang]['inputSurname'];
        document.getElementById('inputPhone').placeholder= txt[lang]['inputPhone'];
        for(var i = 0; i < el.length; i++){
            if (txt[lang][el[i].id]) {
                el[i].innerHTML = txt[lang][el[i].id];
            }
        }
    }
    if(lang == 'ua'){
        const el = document.getElementsByClassName('lang');
        document.getElementById('Flag').src='./img/UAflag.jpg'
        document.getElementById('inputName').placeholder = txt[lang]['inputName'];
        document.getElementById('inputSurname').placeholder= txt[lang]['inputSurname'];
        document.getElementById('inputPhone').placeholder= txt[lang]['inputPhone'];
        for(var i = 0; i < el.length; i++){
            if (txt[lang][el[i].id]) {
                el[i].innerHTML = txt[lang][el[i].id];
            }
        }
    }
}

function changeFirstTime(el){
  document.getElementById('firstTime').innerHTML=el.textContent;
}


function changeSecondTime(el){
  document.getElementById('secondTime').innerHTML=el.textContent;
}

function changeEvent(el){
  if(el.id == "num3"){
    document.getElementById('eventName').innerHTML="IT-camp";
    document.getElementById('eventDesc').innerHTML="- змістовний та активний відпочинок<br>- повноцінне оздоровлення<br>- різноманітні квести та веселощі";
    document.getElementById('eventImg1').src="./img/campImg1.png";
    document.getElementById('eventImg2').src="./img/campImg2.png";
    document.getElementById('eventImg3').src="./img/campImg3.png";
    document.getElementById('visNum1').innerHTML="02";
    document.getElementById('visNum2').innerHTML="08";
    document.getElementById('visNum3').innerHTML="21";
    document.getElementById('sliderMore').onclick = function(){
      localStorage.setItem('event','camp');
      window.location.href='event.html';
    }
    document.getElementById('dateWindow').style="display:none";
  }

  if(el.id == "num2"){
    document.getElementById('eventName').innerHTML="Айтішний вікенд";
    document.getElementById('eventDesc').innerHTML="Чудове недільне свято від викладачів академії. На студентів чекала тепла компанія, смаколики та настільні ігри. Дякуємо усім, хто взяв участь та гарно провів час у нашому товаристві. Сподіваємось, ви завітаєте і на інші наші подальші заходи. ";
    document.getElementById('eventImg1').src="./img/weekImg1.png";
    document.getElementById('eventImg2').src="./img/weekImg2.png";
    document.getElementById('eventImg3').src="./img/weekImg3.png";
    document.getElementById('visNum1').innerHTML="12";
    document.getElementById('visNum2').innerHTML="03";
    document.getElementById('visNum3').innerHTML="23";
    document.getElementById('sliderMore').onclick = function(){
      localStorage.setItem('event','holiday');
      window.location.href='event.html';
    }
    document.getElementById('dateWindow').style="display:none";
  }

  if(el.id == "num1"){
    document.getElementById('eventName').innerHTML="ProfIT Day";
    document.getElementById('eventDesc').innerHTML="- презентації передових компаній<br>- змістовні тренінги та майстер-класи<br>- можливість пройти співбесіду та отримати роботу в ІТ";
    document.getElementById('eventImg1').src="./img/slide.png";
    document.getElementById('eventImg2').src="./img/Slide2.png";
    document.getElementById('eventImg3').src="./img/slide3.png";
    document.getElementById('visNum1').innerHTML="03";
    document.getElementById('visNum2').innerHTML="12";
    document.getElementById('visNum3').innerHTML="21";
    document.getElementById('sliderMore').onclick = function(){
      localStorage.setItem('event','prof');
      window.location.href='event.html';
    }
    document.getElementById('dateWindow').style="display:none";
  }
}

function changeDis(){
  document.getElementById('dateWindow').style="display:flex";
}





  
  




