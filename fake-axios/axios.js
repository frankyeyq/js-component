class Axios {
    constructor() {
        this.xhr = new XMLHttpRequest();
    }
    get(url) {
        let xhr = this.xhr;
        let p = new Promise((resolve, reject) => {
            xhr.open('GET', url, true);
            xhr.send();
            xhr.onreadystatechange = function() {
                if(xhr.readyState == 4) {
                    if(xhr.status == 200) {
                        resolve(xhr.responseText);
                    } else {
                        reject(xhr.status);
                    }
                }
            }
        });
        return p;
    }
    post() {
        
    }
}