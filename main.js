//Home
var homeMenubutton = document.querySelector('.home_button');
var home_dropdown_menu = document.querySelector('.home_dropdown_menu');

//Resources
var resourcesMenubutton = document.querySelector('.resources_button');
var resources_dropdown_menu = document.querySelector('.resources_dropdown_menu')

//CPP
var cppMenubutton = document.querySelector('.cpp_button');
var cpp_dropdown_menu = document.querySelector('.cpp_dropdown_menu')

//HTML
var htmlMenubutton = document.querySelector('.html_button');
var html_dropdown_menu = document.querySelector('.html_dropdown_menu')

//Python
var pyMenubutton = document.querySelector('.python_button');
var py_dropdown_menu = document.querySelector('.py_dropdown_menu')

//CSS
var cssMenubutton = document.querySelector('.css_button');
var css_dropdown_menu = document.querySelector('.css_dropdown_menu')

//GIS
var gisMenubutton = document.querySelector('.gis_button');
var gis_dropdown_menu = document.querySelector('.gis_dropdown_menu')

//Bools used to determine what menus are open
let homeMenuOpen = false;
let resourceMenuOpen = false;
let cppMenuOpen = false;
let htmlMenuOpen = false;
let pyMenuOpen = false;
let cssMenuOpen = false;
let gisMenuOpen = false;

function toggleHomeNav() {
    if (!homeMenuOpen)
    {
        home_dropdown_menu.classList.add('open');
        homeMenuOpen = true;
        if (resourceMenuOpen)
        {
            resources_dropdown_menu.classList.remove('open');
            resourceMenuOpen = false;
        }
        if (cppMenuOpen)
        {
            cpp_dropdown_menu.classList.remove('open');
            cppMenuOpen = false;
        }
        if (htmlMenuOpen)
        {
            html_dropdown_menu.classList.remove('open');
            htmlMenuOpen = false;
        }
        if (pyMenuOpen)
        {
            py_dropdown_menu.classList.remove('open');
            pyMenuOpen = false;
        }
        if (cssMenuOpen)
        {
            css_dropdown_menu.classList.remove('open');
            cssMenuOpen = false;
        }
        if (gisMenuOpen)
        {
            gis_dropdown_menu.classList.remove('open');
            gisMenuOpen = false;
        }
            
    }
    else if (homeMenuOpen)
    {
        home_dropdown_menu.classList.remove('open');
        homeMenuOpen = false;
    }
}

function toggleResourceNav() {
    if (!resourceMenuOpen)
    {
        resources_dropdown_menu.classList.add('open');
        resourceMenuOpen = true;
        if (homeMenuOpen)
        {
            home_dropdown_menu.classList.remove('open');
            homeMenuOpen = false;
        }
        if (cppMenuOpen)
        {
            cpp_dropdown_menu.classList.remove('open');
            cppMenuOpen = false;
        }
        if (htmlMenuOpen)
        {
            html_dropdown_menu.classList.remove('open');
            htmlMenuOpen = false;
        }
        if (pyMenuOpen)
        {
            py_dropdown_menu.classList.remove('open');
            pyMenuOpen = false;
        }
        if (cssMenuOpen)
        {
            css_dropdown_menu.classList.remove('open');
            cssMenuOpen = false;
        }
        if (gisMenuOpen)
        {
            gis_dropdown_menu.classList.remove('open');
            gisMenuOpen = false;
        }
            
    }
    else if (resourceMenuOpen)
    {
        resources_dropdown_menu.classList.remove('open');
        resourceMenuOpen = false; 
    }
}

function toggleHtmlNav() {
    if (!htmlMenuOpen)
    {
        html_dropdown_menu.classList.add('open');
        htmlMenuOpen = true;
        if (homeMenuOpen)
        {
            home_dropdown_menu.classList.remove('open');
            homeMenuOpen = false;
        }
        if (resourceMenuOpen)
        {
            resources_dropdown_menu.classList.remove('open');
            resourceMenuOpen = false;
        }
        if (cppMenuOpen)
        {
            cpp_dropdown_menu.classList.remove('open');
            cppMenuOpen = false;
        }
        if (pyMenuOpen)
        {
            py_dropdown_menu.classList.remove('open');
            pyMenuOpen = false;
        }
        if (cssMenuOpen)
        {
            css_dropdown_menu.classList.remove('open');
            cssMenuOpen = false;
        }
        if (gisMenuOpen)
        {
            gis_dropdown_menu.classList.remove('open');
            gisMenuOpen = false;
        }
            
    }
    else if (htmlMenuOpen)
    {
        html_dropdown_menu.classList.remove('open');
        htmlMenuOpen = false; 
    }
}

function toggleCppNav() {
    if (!cppMenuOpen)
    {
        cpp_dropdown_menu.classList.add('open');
        cppMenuOpen = true;
        if (homeMenuOpen)
        {
            home_dropdown_menu.classList.remove('open');
            homeMenuOpen = false;
        }
        if (resourceMenuOpen)
        {
            resources_dropdown_menu.classList.remove('open');
            resourceMenuOpen = false;
        }
        if (htmlMenuOpen)
        {
            html_dropdown_menu.classList.remove('open');
            htmlMenuOpen = false;
        }
        if (pyMenuOpen)
        {
            py_dropdown_menu.classList.remove('open');
            pyMenuOpen = false;
        }
        if (cssMenuOpen)
        {
            css_dropdown_menu.classList.remove('open');
            cssMenuOpen = false;
        }
        if (gisMenuOpen)
        {
            gis_dropdown_menu.classList.remove('open');
            gisMenuOpen = false;
        }
            
    }
    else if (cppMenuOpen)
    {
        cpp_dropdown_menu.classList.remove('open');
        cppMenuOpen = false; 
    }
}

function togglePyNav() {
    if (!pyMenuOpen)
    {
        py_dropdown_menu.classList.add('open');
        pyMenuOpen = true;
        if (homeMenuOpen)
        {
            home_dropdown_menu.classList.remove('open');
            homeMenuOpen = false;
        }
        if (resourceMenuOpen)
        {
            resources_dropdown_menu.classList.remove('open');
            resourceMenuOpen = false;
        }
        if (htmlMenuOpen)
        {
            html_dropdown_menu.classList.remove('open');
            htmlMenuOpen = false;
        }
        if (cppMenuOpen)
        {
            cpp_dropdown_menu.classList.remove('open');
            cppMenuOpen = false;
        }
        if (cssMenuOpen)
        {
            css_dropdown_menu.classList.remove('open');
            cssMenuOpen = false;
        }
        if (gisMenuOpen)
        {
            gis_dropdown_menu.classList.remove('open');
            gisMenuOpen = false;
        }
            
    }
    else if (pyMenuOpen)
    {
        py_dropdown_menu.classList.remove('open');
        pyMenuOpen = false; 
    }
}

function toggleCssNav() {
    if (!cssMenuOpen)
    {
        css_dropdown_menu.classList.add('open');
        cssMenuOpen = true;
        if (homeMenuOpen)
        {
            home_dropdown_menu.classList.remove('open');
            homeMenuOpen = false;
        }
        if (resourceMenuOpen)
        {
            resources_dropdown_menu.classList.remove('open');
            resourceMenuOpen = false;
        }
        if (htmlMenuOpen)
        {
            html_dropdown_menu.classList.remove('open');
            htmlMenuOpen = false;
        }
        if (pyMenuOpen)
        {
            py_dropdown_menu.classList.remove('open');
            pyMenuOpen = false;
        }
        if (cppMenuOpen)
        {
            cpp_dropdown_menu.classList.remove('open');
            cppMenuOpen = false;
        }
        if (gisMenuOpen)
        {
            gis_dropdown_menu.classList.remove('open');
            gisMenuOpen = false;
        }
            
    }
    else if (cssMenuOpen)
    {
        css_dropdown_menu.classList.remove('open');
        cssMenuOpen = false; 
    }
}

function toggleGisNav() {
    if (!gisMenuOpen)
    {
        gis_dropdown_menu.classList.add('open');
        gisMenuOpen = true;
        if (homeMenuOpen)
        {
            home_dropdown_menu.classList.remove('open');
            homeMenuOpen = false;
        }
        if (resourceMenuOpen)
        {
            resources_dropdown_menu.classList.remove('open');
            resourceMenuOpen = false;
        }
        if (htmlMenuOpen)
        {
            html_dropdown_menu.classList.remove('open');
            htmlMenuOpen = false;
        }
        if (pyMenuOpen)
        {
            py_dropdown_menu.classList.remove('open');
            pyMenuOpen = false;
        }
        if (cssMenuOpen)
        {
            css_dropdown_menu.classList.remove('open');
            cssMenuOpen = false;
        }
        if (cppMenuOpen)
        {
            cpp_dropdown_menu.classList.remove('open');
            cppMenuOpen = false;
        }
            
    }
    else if (gisMenuOpen)
    {
        gis_dropdown_menu.classList.remove('open');
        gisMenuOpen = false; 
    }
}

homeMenubutton.addEventListener('click', toggleHomeNav);
resourcesMenubutton.addEventListener('click', toggleResourceNav);
cppMenubutton.addEventListener('click', toggleCppNav);
cppMenubutton.addEventListener('click', toggleCppNav);
htmlMenubutton.addEventListener('click', toggleHtmlNav);
pyMenubutton.addEventListener('click', togglePyNav);
cssMenubutton.addEventListener('click', toggleCssNav);
gisMenubutton.addEventListener('click', toggleGisNav);