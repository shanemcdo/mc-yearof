function include_html(){
    let elements = document.getElementsByTagName('*'); // get all tags
    for(let i = 0; i < elements.length; i++){ // cycle through elements
        const element = elements[i]; // save the current element
        const file_name = element.getAttribute('include-html'); // get the filename
        if(file_name){ // if this tag has the include-html attribute as a truthy value
            fetch(file_name) // get the file
                .then(res=>res.text()) // convert it to text
                .then(res=>{
                    element.insertAdjacentHTML('afterend', res); // insert it after the element
                    element.remove(); // delete the element
                });
        }
    }
}
include_html();
