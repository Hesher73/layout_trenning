var buttonActive = true;
function buttActive(){ buttonActive = true;}
function setDisplayNone(slideActive){
    if(slideActive.className == 'slider_slide_block'){
        slideActive.classList.remove('slider_slide_block');
        slideActive.classList.add('slider_slide_none');
    }
    else{
        slideActive.classList.remove('slider_slide_none');
        slideActive.classList.add('slider_slide_block');
    }
}

function slideChange(sliderID, slideDirection, slideAnimationActive, slideAnimationInactive){
    var currentSlider = document.getElementById(sliderID);
    var sliders = currentSlider.getElementsByClassName('slider_slide');

    if (buttonActive == true) {
        buttonActive = false;
        for (var i = 0; i < sliders.length; i++) {
            if (sliders[i].classList.contains(slideAnimationActive)) {
                sliders[i].classList.remove(slideAnimationActive);
                sliders[i].classList.add(slideAnimationInactive);
                setTimeout(setDisplayNone, 500, sliders[i]);
                if (slideDirection == 'left') {
                    if (i == 0) {
                        i = sliders.length - 1;
                    } else {
                        i--;
                    }
                } else {
                    if (i == sliders.length - 1) {
                        i = 0;
                    } else {
                        i++;
                    }
                }
                sliders[i].classList.remove(slideAnimationInactive);
                sliders[i].classList.add(slideAnimationActive);
                setTimeout(setDisplayNone, 500, sliders[i]);
                break;
            }
        }
        setTimeout(buttActive, 500, buttonActive);
    }
}

function ValidMail(){
    var re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    var eMail = document.getElementById('email');
    let labelEMail = document.getElementById('labelEMail');
    var valid = re.test(eMail.value);
    if (!valid){
        labelEMail.textContent = 'Введите корректный eMail';
        eMail.classList.add('redWarning');
        validInputs[0] = false;
        return false;
    }
    else{
        labelEMail.innerHTML = '&nbsp;';
        eMail.classList.remove('redWarning');
        validInputs[0] = true;
        return true;
    }
}