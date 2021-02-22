const api = "https://jsonplaceholder.typicode.com/posts"
let response = document.querySelector('#response');
let temp = [];
let modalTitle = document.querySelector(".modal-title")
let modalBody = document.querySelector(".modal-body")


fetch(api)
.then(ap=>ap.json())
.then(res=>{
  for(i=0;i<res.length;i++){ 
    let html = `<a class="link" data-toggle="modal" href="#myModal">${res[i].title}</a><br><br>`
    temp.push(html) 
  }
 response.innerHTML = temp.join("")
})

response.addEventListener('click',e=>{
   if(e.target.className == 'link'){
     fetch(api)
     .then(ap=>ap.json())
     .then(res=>{
       for(i=0;i<res.length;i++){
         if (res[i].title == e.target.innerHTML){
          modalTitle.innerText = res[i].title
          modalBody.innerText = res[i].body
         }
       }
     })
   }
})

