
let clOptions=document.querySelectorAll('.cloptions');
let rightSide=document.getElementById('righthand');

let hostname='http://127.0.0.1'
let port=3000

clOptions.forEach(b=>{
    b.addEventListener('click', e=>{
        rightSide.innerHTML='';
        console.log(`${hostname}:${port}/${b.innerHTML.toLowerCase()}`)
        fetch(`${hostname}:${port}/${b.innerHTML.toLowerCase()}`)
        .then(res=>res.ok?res.json():null)
        .then(data=>{
            console.log(data)
            data.forEach(cl=>{
                rightSide.innerHTML+=`<h3>${cl.color} ${cl.type}</h3>`;
            })
        })
    })
})