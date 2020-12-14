function makeRequest (method, url) {
    return new Promise(function (resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.open(method, url);
      xhr.onload = function () {
        if (this.status >= 200 && this.status < 300) {
          resolve(xhr.response);
        } else {
          reject({
            status: this.status,
            statusText: xhr.statusText
          });
        }
      };
      xhr.onerror = function () {
        reject({
          status: this.status,
          statusText: xhr.statusText
        });
      };
      xhr.send();
    });
  }

function copy(param){
    let copieur = document.createElement('textarea');
    copieur.value = param;
    copieur.innerHTML = param;
    copieur.style.width = '1px';
    copieur.style.height = '1px';
    document.body.appendChild(copieur);
    copieur.focus();
    copieur.select();
    document.execCommand('copy');
    try{window.getSelection().removeAllRanges();}catch(e){}
}