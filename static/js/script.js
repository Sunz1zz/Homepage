// console.log('%cCopyright © 2024 zyyo.net',
//     'background-color: #ff00ff; color: white; font-size: 24px; font-weight: bold; padding: 10px;'
// );
// console.log('%c   /\\_/\\', 'color: #8B4513; font-size: 20px;');
// console.log('%c  ( o.o )', 'color: #8B4513; font-size: 20px;');
// console.log(' %c  > ^ <', 'color: #8B4513; font-size: 20px;');
// console.log('  %c /  ~ \\', 'color: #8B4513; font-size: 20px;');
// console.log('  %c/______\\', 'color: #8B4513; font-size: 20px;');

document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
});

function handlePress(event) {
    this.classList.add('pressed');
}

function handleRelease(event) {
    this.classList.remove('pressed');
}

function handleCancel(event) {
    this.classList.remove('pressed');
}

var buttons = document.querySelectorAll('.projectItem');
buttons.forEach(function (button) {
    button.addEventListener('mousedown', handlePress);
    button.addEventListener('mouseup', handleRelease);
    button.addEventListener('mouseleave', handleCancel);
    button.addEventListener('touchstart', handlePress);
    button.addEventListener('touchend', handleRelease);
    button.addEventListener('touchcancel', handleCancel);
});

function toggleClass(selector, className) {
    var elements = document.querySelectorAll(selector);
    elements.forEach(function (element) {
        element.classList.toggle(className);
    });
}

function pop(imageURL) {
    var tcMainElement = document.querySelector(".tc-img");
    if (imageURL) {
        tcMainElement.src = imageURL;
    }
    toggleClass(".tc-main", "active");
    toggleClass(".tc", "active");
}

var tc = document.getElementsByClassName('tc');
var tc_main = document.getElementsByClassName('tc-main');
tc[0].addEventListener('click', function (event) {
    pop();
});
tc_main[0].addEventListener('click', function (event) {
    event.stopPropagation();
});



function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1, cookie.length);
        }
        if (cookie.indexOf(nameEQ) == 0) {
            return cookie.substring(nameEQ.length, cookie.length);
        }
    }
    return null;

}



// var closeButton = document.querySelector('.close-button');
// var box = document.querySelector('.tc');

// closeButton.addEventListener('click', function() {
//   box.style.display = 'none';
// });

// var openButten = document.querySelector('#page222');
// openButten.addEventListener('click',function(){
//     box.style.display='flex';
// });

var View_Info_page=document.querySelector('.Info_Page');
var Content_pdf=document.querySelector('.pdfpage');
var Button_CV_CN=document.querySelector('#CV_CN');
var Button_CV_EN=document.querySelector('#CV_EN');
var Button_Close_Info_page=document.querySelector('#close_Info_Page');



Button_CV_CN.addEventListener('click',function(){
    closeAllwindow();
    View_Info_page.style.display='flex';
    Button_Close_Info_page.style.display='flex';
    Content_pdf.style.display='flex';
    Content_pdf.src='./static/pdf/CV_CN.pdf';
    
});
Button_CV_EN.addEventListener('click',function(){
    closeAllwindow();    
    View_Info_page.style.display='flex';
    Button_Close_Info_page.style.display='flex';
    Content_pdf.style.display='flex';
    Content_pdf.src='./static/pdf/CV_EN.pdf';
});
Button_Close_Info_page.addEventListener('click',function(){
    closeAllwindow();
});


var View_imgpage=document.querySelector('.imgpage');
var Content_PIC=document.querySelector('#picture');
var Button_undergraduate=document.querySelector('#undergraduate');
var Button_master=document.querySelector('#master');

Button_undergraduate.addEventListener('click',function(){
    closeAllwindow(); 
    View_Info_page.style.display='flex';
    Button_Close_Info_page.style.display='flex';
    View_imgpage.style.display='flex';
    Content_PIC.style.display='flex';
    Content_PIC.src='./static/img/transcript1.jpg';
});
Button_master.addEventListener('click',function(){
    closeAllwindow(); 
    View_Info_page.style.display='flex';
    Button_Close_Info_page.style.display='flex';
    View_imgpage.style.display='flex';
    Content_PIC.style.display='flex';
    Content_PIC.src='./static/img/transcript2.jpg';
});

var Button_certificate1=document.querySelector('#certificate1');
var Button_certificate2=document.querySelector('#certificate2');
var Button_certificate3=document.querySelector('#certificate3');
Button_certificate1.addEventListener('click',function(){
    closeAllwindow();
    View_Info_page.style.display='flex';
    Button_Close_Info_page.style.display='flex';
    View_imgpage.style.display='flex';
    Content_PIC.style.display='flex';
    Content_PIC.src='./static/img/certificate1.jpg';
});
Button_certificate2.addEventListener('click',function(){
    closeAllwindow();
    View_Info_page.style.display='flex';
    Button_Close_Info_page.style.display='flex';
    View_imgpage.style.display='flex';
    Content_PIC.style.display='flex';
    Content_PIC.src='./static/img/certificate2.jpg';
});
var Button_paper1=document.querySelector('#paper1');
var Button_paper2=document.querySelector('#paper2');
var Button_paper3=document.querySelector('#paper3');
Button_paper1.addEventListener('click',function(){
    closeAllwindow();    
    View_Info_page.style.display='flex';
    Button_Close_Info_page.style.display='flex';
    Content_pdf.style.display='flex';
    Content_pdf.src='./static/pdf/Paper1.pdf';
});
Button_paper2.addEventListener('click',function(){
    closeAllwindow();    
    View_Info_page.style.display='flex';
    Button_Close_Info_page.style.display='flex';
    Content_pdf.style.display='flex';
    Content_pdf.src='./static/pdf/Paper2.pdf';
});

function closeAllwindow(){
    View_Info_page.style.display='none';
    // console.log('ssss')
    Content_pdf.src='';
    Content_pdf.style.display='none';
    Content_PIC.src='';
    View_imgpage.style.display='none';

    Button_Close_Info_page.style.display='none';//dont sure

}

document.addEventListener('DOMContentLoaded', function () {






    var html = document.querySelector('html');
    var themeState = getCookie("themeState") || "Light";
    var tanChiShe = document.getElementById("tanChiShe");






    function changeTheme(theme) {
        tanChiShe.src = "./static/svg/snake-" + theme + ".svg";
        html.dataset.theme = theme;
        setCookie("themeState", theme, 365);
        themeState = theme;
    }







    var Checkbox = document.getElementById('myonoffswitch')
    Checkbox.addEventListener('change', function () {
        if (themeState == "Dark") {
            changeTheme("Light");
        } else if (themeState == "Light") {
            changeTheme("Dark");
        } else {
            changeTheme("Dark");
        }
    });



    if (themeState == "Dark") {
        Checkbox.checked = false;
    }

    changeTheme(themeState);

















   

    var fpsElement = document.createElement('div');
    fpsElement.id = 'fps';
    fpsElement.style.zIndex = '10000';
    fpsElement.style.position = 'fixed';
    fpsElement.style.left = '0';
    document.body.insertBefore(fpsElement, document.body.firstChild);

    var showFPS = (function () {
        var requestAnimationFrame = window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (callback) {
                window.setTimeout(callback, 1000 / 60);
            };

        var fps = 0,
            last = Date.now(),
            offset, step, appendFps;

        step = function () {
            offset = Date.now() - last;
            fps += 1;

            if (offset >= 1000) {
                last += offset;
                appendFps(fps);
                fps = 0;
            }

            requestAnimationFrame(step);
        };

        appendFps = function (fpsValue) {
            fpsElement.textContent = 'FPS: ' + fpsValue;
        };

        step();
    })();
    
    
    
    //pop('./static/img/tz.jpg')
    
    
    
});




var pageLoading = document.querySelector("#Sunzzz-loading");
window.addEventListener('load', function() {
    setTimeout(function () {
        pageLoading.style.opacity = '0';
        console.log('windowloaded');
        // pageLoading.style.='1';
    }, 300);
});

