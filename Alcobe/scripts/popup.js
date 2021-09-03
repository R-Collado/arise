function togglePopup(popup) {
    document.getElementById(popup + '-popup').classList.toggle("invisible");
    document.getElementById(popup + '-about').classList.toggle("invisible");
    document.getElementById(popup + '-about-btn').classList.add('active');
    document.getElementById('overlay').classList.toggle('invisible');
}

function closePopup(popup) {
    document.getElementById(popup + '-popup').classList.toggle("invisible");
    document.getElementById('overlay').classList.toggle('invisible');
    act = document.getElementsByClassName('active');

    for (i=0; i<act.length; i++) {
        act[0].classList.remove('active');
    }

    if (!document.getElementById(popup + '-about').classList.contains('invisible')) {
        document.getElementById(popup + '-about').classList.toggle('invisible');
    }

    if (!document.getElementById(popup + '-testimonials').classList.contains('invisible')) {
        document.getElementById(popup + '-testimonials').classList.toggle('invisible');
    }
    if (!document.getElementById(popup + '-booking').classList.contains('invisible')) {
        document.getElementById(popup + '-booking').classList.toggle('invisible');
    }

}

function toggleActive(destination) {
    act = document.getElementsByClassName('active');
    pages = document.getElementsByClassName('popup-page');
    dest = document.getElementById(destination);

    
    for (i=0; i<act.length; i++) {
        act[0].classList.remove('active');
    }

    for (i=0; i<pages.length; i++) {
        if(pages[i].id == dest.id) {
            pages[i].classList.remove('invisible');
            continue;
        }

        if (!pages[i].classList.contains('invisible')) {
            pages[i].classList.toggle('invisible');
        }
        
        
    }
    document.getElementById(destination + '-btn').classList.toggle('active');
}