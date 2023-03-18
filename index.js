const list= [
    {
        id:1,
        title:"hello",
        body:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias nemo assumenda"
    },
    {
        id:2,
        title:"dear",
        body:"2Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias nemo assumenda maiores, voluptates voluptas impedit atque laboriosam incidunt doloremque fuga!"
    },
    {
        id:3,
        title:"how",
        body:"3Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias nemo assumenda maiores, voluptates "
    },
    {
        id:4,
        title:"are",
        body:"4Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias nemo assumenda maiores, voluptates voluptas impedit atque laboriosam incidunt doloremque fuga!"
    },
]

const bodyPill = document.querySelector('.bodypill');
function getBody(id){

    list.map(eachpill=>{
        if (eachpill.id === id){
            return bodyPill.innerHTML = `<div class="pill-body">${eachpill.body}</div>`
        }
    })
}

const containerPill = document.querySelector('.pill-container');
const getPill = list.map(each=>{
    console.log(each)
    return containerPill.innerHTML += `
    <div class="pill" onclick="getBody(${each.id})">${each.title}</div>
    `
});


