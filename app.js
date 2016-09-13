
let people = [
    "https://randomuser.me/api/portraits/men/18.jpg",
    "https://randomuser.me/api/portraits/men/90.jpg",
    "https://randomuser.me/api/portraits/men/22.jpg",
    "https://randomuser.me/api/portraits/men/25.jpg",
    "https://randomuser.me/api/portraits/men/42.jpg",
    "https://randomuser.me/api/portraits/men/58.jpg",
    "https://randomuser.me/api/portraits/men/3.jpg",
    "https://randomuser.me/api/portraits/men/2.jpg",
    "https://randomuser.me/api/portraits/men/0.jpg",
    "https://randomuser.me/api/portraits/men/26.jpg",
    "https://randomuser.me/api/portraits/women/1.jpg",
    "https://randomuser.me/api/portraits/women/72.jpg",
    "https://randomuser.me/api/portraits/women/92.jpg",
    "https://randomuser.me/api/portraits/women/82.jpg",
    "https://randomuser.me/api/portraits/women/38.jpg",
    "https://randomuser.me/api/portraits/women/84.jpg",
    "https://randomuser.me/api/portraits/women/85.jpg",
    "https://randomuser.me/api/portraits/women/40.jpg",
    "https://randomuser.me/api/portraits/women/52.jpg",
    "https://randomuser.me/api/portraits/women/9.jpg",
]



function addUser() {
    let request = new XMLHttpRequest();
    request.open('GET', 'https://randomuser.me/api/');
    request.addEventListener('load', function () {
        let delivery = JSON.parse(request.responseText);
        let person = delivery.results[0];
        let x = person.name.first;
        let likebtn = document.createElement('button');
        likebtn.addEventListener('click', function () {
            console.log("user has liked" + x)
        })
        likebtn.setAttribute("id", "likez");
        likebtn.textContent = "Like";
        let nopebtn = document.createElement('button');
        nopebtn.addEventListener('click', function () {
            console.log("user has noped" + x)
        })
        nopebtn.setAttribute("id", "nopez");
        nopebtn.textContent = 'Nope';
        let pic = document.createElement('img');
        pic.src = people[Math.floor(Math.random() * people.length)];
        ;
        let user = document.createElement('p');
        user.textContent = x;
        let parent = document.getElementById('peepz');
        parent.appendChild(user);
        parent.appendChild(pic);
        parent.appendChild(likebtn);
        parent.appendChild(nopebtn);
    })
    request.send();
}

window.addEventListener('load', function () {
    // let startbtn = document.getElementById('start');
    // startbtn.addEventListener('click', function (){
    //     addUser();
    let iid = null; // interval id

    let startbtn = document.querySelector('#start');
    startbtn.addEventListener('click', function () {
        iid = setInterval(addUser, 2000);
    });
    let stopbtn = document.querySelector('#stop');
    stopbtn.addEventListener('click', function () {
        clearInterval(iid);
    })
    
    
}); 