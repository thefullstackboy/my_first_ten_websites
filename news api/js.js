const apiEndpoint = "https://jsonplaceholder.typicode.com/posts";

// Select DOC element
const getButton = document.querySelector("#getpost");
const createButton = document.querySelector("#createpost");
const updateButton = document.querySelector("#updatepost");
const patchButton = document.querySelector("#patchpost")
const deletebutton = document.querySelector("#degetpost");

//get posts

const getposts = async () => {
try {
    const respone = await fetch(apiEndpoint);    
    if(respone.status != 200){
        throw new Error(`Some Error, Status code:${respone.status}`)
    }
    const posts = await respone.json();
    return posts;
} catch(error) {
console.log(error)
}
};

getButton.addEventListener("click", async () => {
    const posts = await getposts();
    if(posts){


    console.log(posts);
     const table = `<table class="table">
     <thead>
     <tr>
     <th scope="col">#</th>
     <th scope="col">Title</th>
     </tr>
     </thead>
     <tbody>
     ${posts.map(
         (post) => `<tr>
         <th scope="row">${post.id}</th>
         <td>${post.title}</td>
         </tr>
         <tr>
         `
     )
    .join("\n")}
     </tbody>
     </table>`;

     document.querySelector('#table').innerHTML = table;
    }
     });
     





// fetch(apiEndpoint).then((respone) => {
//     respone.json().then((posts) => console.log(posts));
// })