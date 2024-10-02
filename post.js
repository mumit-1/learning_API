function load(){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => okX(data))
}
function okX(data){
    const sec = document.getElementById('first-sec')
    for(const value of data){
        const div = document.createElement('div')
        div.classList.add('style');
       div.innerHTML = `
       
        <h4> id - ${value.id}</h4>
        <h3>titile - ${value.title}</h3>
        <h4>description - ${value.body}</h4>
       `
       sec.append(div);
    }
}
load();