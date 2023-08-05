onload = function(){


checkMobile();


      
}






function checkMobile(){
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){

        console.log("mobile device");
        window.location.href = "./hacker-page-mobile.html"
      }else{

        console.log("not mobile device");
      }
}

function hoverMoreArrowLocation(el,isTrue){
    if(isTrue){
        el.src="./img/arrow-location-hover.png";
    }else{
        el.src="./img/location-arrow.png";
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
        'event': "Academy events with student's participation",
        'eventName': "IT-weekend",
        'eventDesc': "A wonderful Sunday holiday from the teachers of the academy. Warm company, goodies and board games awaited the students. Thank you to everyone who participated and had a good time in our society. We hope you will come to our other future events as well.",
        'studentsText': "Students",
        'moreStudent': "More",
        'diplomas':"Diplomas/Certificates",
        'ContactUs': "Contact Us",
        'inputName': "Write your name...",
        'inputSurname': "Write your surname...",
        'inputPhone': "Phone number",
        'timeCall': "A convenient time for you",
        'sendCall': "Send",
        'graduatesText': "Graduates",
        'achivment': "Acvivments:",
        'moreGraduates': "More",
        'locationText': "Location",
        'email': "email: intitavn@gmail.com",
        'groupa':"Group:",
        'feedback':"Feedback about training",
        'creed':"Creed"

    },
    
    ua: {
        'golovna': "Головна",
        'graduates': "Випускники",
        'students': "Студенти",
        'contacts': "Контакти",
        'about':"Про академію",
        'academy': "ВІННИЦЬКА IT-АКАДЕМІЯ",
        'learn': "Навчайся разом з нами",
        'reach': "Досягай професійного успіху - гарантовано!",
        'toCall': "Зателефонувати",
        'event': "Заходи академії з участю студента",
        'eventName': "Айтішний вікенд",
        'eventDesc': "Чудове недільне свято від викладачів академії. На студентів чекала тепла компанія, смаколики та настільні ігри. Дякуємо усім, хто взяв участь та гарно провів час у нашому товаристві. Сподіваємось, ви завітаєте і на інші наші подальші заходи.",
        'studentsText': "Студенти",
        'moreStudent': 'Більше',
        'diplomas':"Дипломи/Сертифікати",
        'ContactUs': "Зв’язатись з нами",
        'inputName': "Введіть ім’я...",
        'inputSurname': "Введіть прізвище...",
        'inputPhone': "Номер телефону",
        'timeCall': "Зручний для вас час",
        'sendCall': "Надіслати",
        'graduatesText': "Випускники",
        'achivment': "Досягнення:",
        'moreGraduates': "Більше",
        'locationText': "Локація",
        'email': "пошта: intitavn@gmail.com",
        'groupa':"Група:",
        'feedback':"Відгук про навчання",
        'creed':"Кредо"




    }
};

function setLang(lang){
    if(lang == 'en'){
        const el = document.getElementsByClassName('lang');
        document.getElementById('Flag').src='./img/USflag.png'
        for(var i = 0; i < el.length; i++){
            if (txt[lang][el[i].id]) {
                el[i].innerHTML = txt[lang][el[i].id];
            }
        }
    }
    if(lang == 'ua'){
        const el = document.getElementsByClassName('lang');
        document.getElementById('Flag').src='./img/UAflag.jpg'
        for(var i = 0; i < el.length; i++){
            if (txt[lang][el[i].id]) {
                el[i].innerHTML = txt[lang][el[i].id];
            }
        }
    }
}