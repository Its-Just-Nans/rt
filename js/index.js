globalScope = {};
let basePage;
setResponsive();
window.onresize = setResponsive;

function checkStyleOfNav(){
    let navBlock = document.getElementsByTagName('nav')[0];
    if(navBlock.getElementsByTagName('ul')[0].style.display == 'none'){
        navBlock.getElementsByTagName('ul')[0].style.display = 'block';
    }else{
        navBlock.getElementsByTagName('ul')[0].style.display = 'none';
    }
}

function setResponsive(){
    if(window.innerWidth <= 1050){
        let navBlock = document.getElementsByTagName('nav')[0];
        navBlock.getElementsByTagName('ul')[0].style.display = 'none';
        navBlock.addEventListener('click', checkStyleOfNav, false);
    }else{
        if(document.getElementsByTagName('nav')[0].getElementsByTagName('ul')[0].style.display == 'none'){
            document.getElementsByTagName('nav')[0].getElementsByTagName('ul')[0].style.display = 'block';
        }
        document.getElementsByTagName('nav')[0].removeEventListener('click', checkStyleOfNav, false);
    }
}


displayNewPage();

function displayNewPage(link){
    window.onhashchange = function() {};
    let basePage;
    //check if it's in local
    if(window.location.origin === 'https://its-just-nans.github.io'){
        basePage = window.location.origin + '/rt/files/';
    }else{
        basePage = window.location.origin + '/files/';
    }
    if(window.location.hash == "" && !link){
        //if there is nothing, we load to the search page
        basePage += 'search.html';
    }else{
        if(link != window.location.hash){
            let linkToFile;
            if(!link){
                linkToFile = window.location.hash;
            }else{
                linkToFile = link;
            }
            if(linkToFile.startsWith('#readme-')){
                basePage += linkToFile.replace('#readme-', '') + '.md';
            }else{
                basePage += linkToFile.replace('#', '') + '.html';
            }
        }else{
            //to prevent useless request (when the user click on the link to the actual page)
            //smollPopUp({title : "You're dumb", content : 'Why are you clicking the same page ?!'}, 'ko');
            basePage = '';
        }
    }
    if(basePage != ''){
        loadNewPage(basePage);
    }
}


function loadNewPage(url){
    makeRequest('GET', url).then( function(response){
        if(window.location.hash.startsWith('#readme-')){
            //if it's a readme we need to render it
            document.getElementById('contenuMain').innerHTML = '<div id="globalReadMe"></div>';
            let render = function(){
                if(typeof showdown !== 'undefined'){
                    let converter = new showdown.Converter();
                    converter.setFlavor('github');
                    let html = converter.makeHtml(response);
                    document.getElementById('globalReadMe').innerHTML = html;
                    document.querySelectorAll('pre code').forEach((block) => {
                        hljs.highlightBlock(block);
                    });
                }else{
                    setTimeout(function(){
                        render();
                    }, 100);
                }
            }
            setTimeout(function(){
                render();
            }, 100);
        }else{
            document.getElementById('contenuMain').innerHTML = response;
            let allScripts = document.getElementById('contenuMain').getElementsByTagName('script');
            for(let script of allScripts){
                if(script.innerHTML == ''){
                    let number = document.getElementsByTagName('script').length;
                    let newScript = document.createElement('script');
                    document.getElementsByTagName('script')[number-1].after(newScript);
                    newScript.src = script.src;
                }else{
                    eval(script.innerHTML);
                }
            }
            let allStyle = document.getElementById('contenuMain').getElementsByTagName('style');
            for(let oneStyle of allStyle){
                if(oneStyle.innerHTML == ''){
                    let number = document.getElementsByTagName('style').length;
                    let newStyle = document.createElement('link');
                    document.getElementsByTagName('style')[number-1].after(newStyle);
                    newStyle.rel= "stylesheet";
                    let re = /src=".*"/;
                    let lien = oneStyle.outerHTML.match(re)[0];
                    lien = lien.substring(5, lien.length-1)
                    newStyle.href = lien;
                    
                }else{
                    //good ?
                }
            }
        }
        //we re-bind hash change (this allow us to loadpage when the user clicks on "back")
        window.onhashchange = function() {
            displayNewPage();
        }
    }).catch(function (error){
        console.log('log: ', error);
    });
}

const nav =  document.getElementsByTagName('nav');
const allLinks = nav[0].getElementsByTagName('a');
for(let element of allLinks){
    element.addEventListener('click', function () {
        let link = this.getAttribute('href');
        displayNewPage(link);
    });
}