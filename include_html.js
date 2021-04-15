function include_html(){
    let elements = document.getElementsByTagName('*');
    for(let i = 0; i < elements.length; i++){
        const element = elements[i];
        const file_name = element.getAttribute('include-html');
        if(file_name){
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4) {
                    if(this.status == 200)
                        element.insertAdjacentHTML('afterend', this.responseText);
                    element.remove();
                }
            }
            xhttp.open("GET", file_name, true);
            xhttp.send();
        }
    }
}
include_html();
