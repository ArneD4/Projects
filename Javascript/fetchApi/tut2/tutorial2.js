const api = "https://jsonplaceholder.typicode.com/posts"

const input = document.querySelector("#input")
const submit = document.querySelector("#submit")
const response = document.querySelector(".response")
const modal = document.querySelector("#myModal");
let modalTitle = document.querySelector(".modal-title")
let modalBody = document.querySelector(".modal-body")

submit.addEventListener('click',(e)=>{
    e.preventDefault();
    temp = input.value
    
    
    fetch(api)
    .then(data=>data.json())
    .then(res=>res.filter((e)=>{
    return e.id == temp
    }))
    .then(result=>makeModal(result))


})




function makeModal(result) {
    modal.style.display = "block";
    modalTitle.innerHTML=result[0].title
    modalBody.innerHTML=result[0].body

  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }



// `<div class="modal" tabindex="-1" role="dialog">
//         <div class="modal-dialog" role="document">
//           <div class="modal-content">
//             <div class="modal-header">
//               <h5 class="modal-title">${result}</h5>
//               <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//                 <span aria-hidden="true">&times;</span>
//               </button>
//             </div>
//             <div class="modal-body">
//               <p>Modal body text goes here.</p>
//             </div>
//             <div class="modal-footer">
//               <button type="button" class="btn btn-primary">Save changes</button>
//               <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
//             </div>
//           </div>
//         </div>
//       </div>`