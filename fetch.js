function loaddata(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json()) // ".json" is like JSON.parse
      .then(json => console.log(json))
}
function loaddata2(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json()) // ".json" is like JSON.parse
      .then(data => console.log(data))
}
function users(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json()) // ".json" is like JSON.parse
      .then(data => perUser(data))
}
function perUser(data){
    const firstDiv = document.getElementById('first-div');
    const getUl = document.getElementById('first-ul');
    firstDiv.append(getUl)
    for(const value of data){
        // console.log((value.name));
        const madeLi = document.createElement('li')
        madeLi.innerText = value.name;
        getUl.append(madeLi)
    }
}