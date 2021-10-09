document.getElementById('btn').addEventListener('click', showGIthub)

function showGIthub() {
    console.log("calling")

    let username = document.getElementById('Usernamee').value

    let url = 'https://api.github.com/users/'+username
    fetch(url).then(res=>res.json()).then (data=>{
        if(data.message) {
        document.getElementById( 'res').innerHTML=
       `<h3>Profile Not Found</h3>`
        }else{
        document.getElementById("res").innerHTML =
        `
        <img src="${data.avatar_url}" id="imgsize" style="height:250px;width:"250px;align-item:center">
        <p>${data.name} (${data.login})</p>
        <p>${data.bio})</p>
        `
        }
        }).catch(e=>{
        console.log(e)
        })
    }