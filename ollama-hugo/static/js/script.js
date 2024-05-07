

function get_data(){
    var outputElement = document.getElementById("the_output");
    const loader = document.getElementById("loader");
    loader.style.display = "block";
    const the_input = document.getElementById("the_input").value;
    const model_type = document.getElementById("model_type").value;
    const data = `{\n  "model": "${model_type}",\n  "prompt": "${the_input}",\n  "stream": false\n}`;
    let xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.open('POST', 'http://localhost:11434/api/generate');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    
    xhr.onload = function() {
    const resp = JSON.parse(xhr.response);
    console.log(resp);
    loader.style.display = "none";
    var content = '<br><br>'+'model: '+resp.model+'<br>'+'tid: '+resp.created_at+'<br>'+resp.response
    outputElement.insertAdjacentHTML('afterbegin',content)
};

    xhr.send(data);
}