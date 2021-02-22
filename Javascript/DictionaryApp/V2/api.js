
///set variables
//input fields & buttons
const api = "https://api.dictionaryapi.dev/api/v2/entries/";
const input = document.querySelector('#search')
const searchBtn = document.querySelector('#btn')
const langInp = document.querySelector('.tx4')
const audioLink = document.querySelector('#play-pause-button')

///HTML elements
let response = document.querySelector('#response')
let definitions = document.querySelector('#definitions-container')
let title = document.querySelector('.word-text')
let pron = document.querySelector('.pronunciation-text')


///code
///element creator function
const x = t => document.createElement(t)


///get data for input word
searchBtn.addEventListener('click', (e)=>{
    definitions.innerHTML = ""
    
    fetch(`${api}${langInp.value}/${input.value}`)
    .then(data=>data.json())
    .then(res=>{     
       
        title.innerText = res[0].word
        pron.innerText = res[0].phonetics[0].text
        let count = 0;

    ///splitting the data to managable pieces + making html
    for(y=0;y<res.length;y++){    
        for(i=0;i<res[y].meanings.length;i++){
            for(z=0;z<res[y].meanings[i].definitions.length;z++){

    // ///make HTML output
                    let container = x('div')
                    let row = x('div');
                    row.className = "row" 
                    row.style.borderTop = "solid 1px #e6e6e6"
                    row.style.padding = "10px 0"
        ///column 1
                    let col1 = x('div');
                    col1.className = "col-sm-1"
                    col1.style.padding = " 0px 15px"
        ////column 1 paragraph
                    let par = x('p');
                    par.className = "text-white bg-primary border text-center border-secondary defindex pl-1 pr-1"
                    par.innerText = `#${count}`
                    count++                    
        ////column2
                    let col2 = x('div')
                    col2.className = 'col-sm-10 my-auto text-white definition'
                    col2.style.padding = " 0px 15px"
        //definition ==> write function for the following to make code shorter
                    let defDiv = x('div');
                    defDiv.className = 'definitions mb-2 text-dark'
                    let defTittle = x('p')
                    defTittle.className = "text-white d-inline bg-dark p-1"
                    defTittle.innerText = 'Definition:'
                    defTittle.style.margin = "0px 0px 16px"
                    defTittle.style.padding = "4px"
                    let defTex = x('p')
                    defTex.className = 'values d-inline'
                    defTex.innerText = " " + res[y].meanings[i].definitions[z].definition
                    defTex.style.margin = "0px 0px 16px"
                    defDiv.appendChild(defTittle)
                    defDiv.appendChild(defTex)
        ///example
                    let exDiv = x('div')
                    exDiv.className = "examples mb-2 text-dark"
                    let exTittle = x('p')
                    exTittle.className = "text-white d-inline bg-dark p-1"
                    exTittle.innerText = 'Example:'
                    exTittle.style.margin = "0px 0px 16px"
                    exTittle.style.padding = "4px"
                    let exTex = x('p')
                    exTex.className = 'values d-inline p'
                    let ex = res[y].meanings[i].definitions[z].example
                    if(ex == undefined){
                        ex = "There is no example"
                    }
                    exTex.innerText = " " + ex
                    exTex.style.margin = "0px 0px 16px"
                    exDiv.appendChild(exTittle)
                    exDiv.appendChild(exTex)
        ////synonyms
                    let synDiv = x('div')
                    synDiv.className = "synonyms text-dark"
                    let synTittle = x('p')
                    synTittle.className = "text-white d-inline bg-dark p-1"
                    synTittle.innerText = 'Synonyms:'
                    synTittle.style.margin = "0px 0px 16px"
                    synTittle.style.padding = "4px"
                    let synTex = x('p')
                    synTex.className = 'values d-inline' 
                    let syn = res[y].meanings[i].definitions[z].synonyms
                    if(syn == undefined){
                        syn = "There are no synonyms"
                    }
                    synTex.innerText = " " + syn
                    synTex.style.margin = "0px 0px 16px"
                    synDiv.appendChild(synTittle)
                    synDiv.appendChild(synTex)

                   

        ///appendChild
                    col2.appendChild(defDiv)
                    col2.appendChild(exDiv)
                    col2.appendChild(synDiv)
                    col1.appendChild(par)
                    row.appendChild(col1)
                    row.appendChild(col2)
                    container.appendChild(row)
                    definitions.appendChild(container)
            }
        }   
    }
    })
})


///play audio
audioLink.addEventListener('click',()=>{
            ///play-pause icon
            audioLink.className="fa fa-pause"
            setTimeout(()=>{
            audioLink.className="fa fa-play"
            },4000)
            //get audio link + play
    fetch(`${api}${langInp.value}/${input.value}`)
    .then(data=>data.json())
    .then(res=>{
        var audio = new Audio(res[0].phonetics[0].audio)
        audio.play()
    })
})






    
    

                    
    