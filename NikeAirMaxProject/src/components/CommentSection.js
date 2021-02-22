import React from 'react'

function CommentSection() {




    let comments = document.querySelector('.comments'); // for comments section 
    let name = document.getElementById('name') //input value
    let message = document.getElementById('message') // input value  
    let save = document.querySelector('.save') // button  

    let favCount = 0;
    let favorite = document.querySelector('.favorite');
    function like() {
        favCount++;
        favorite.innerHTML = ` ${favCount}`
    }



    function comment() {
        comments.innerHTML += `
        <i class="fa fa-user" aria-hidden="true"></i> ${name.value}: 
                    <p class="card-text">${message.value}</p>
        `
    }





    return (
        <div>
            <i class="fa fa-heart favorite" onClick={() => like()} id="favorite" aria-hidden="true">0</i>
            <hr class="my-2" />
            <i class="fa fa-comment" aria-hidden="true"></i>
            <div class="card-footer comments">
            </div>
            <div class="card-footer">
                <div class="form-group">
                    <label for="">name:</label>
                    <input type="text" class="form-control bg-dark" name="" id="name" aria-describedby="helpId" placeholder="Name" />
                </div>
                <div class="form-group">
                    <label for="">Your comment</label>
                    <textarea class="form-control bg-dark text-white" name="" id="message" rows="3"></textarea>
                </div>
                <button type="button" class="btn btn-danger save" id="save">Save comment</button>
            </div>
        </div>
    )
}

export default CommentSection
