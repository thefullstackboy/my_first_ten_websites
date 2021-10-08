// const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
// const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
// const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'

// const main = document.getElementById('main');
// const form = document.getElementById('form')
// const search = document.getElementById('search');

// // Get initial movies


// async function getMovies(url) {
//     const res = await fetch(url)
//     const data = await res.json()
//     console.log(res)
//     console.log(data)

//     showMovies(data.results)
// }

// getMovies(API_URL)

// function showMovies(movies) {
//     main.innerHTML = ''

//     movies.forEach((movie) => {
//         const { title, poster_path, vote_average, overview } = movie

//         const movieEl = document.createElement('div')
//         movieEl.classList.add('movie')


//         movieEl.innerHTML = `
//         <img src="${IMG_PATH + poster_path}" alt="${title}">
//         <div class="movie-info">
//       <h3>${title}</h3>
//       <span class="${getClassByRate(vote_average)}">${vote_average}</span>
//         </div>
//         <div class="overview">
//         <h3>Overview</h3>
//         ${overview}
//         `
//         main.appendChild(movieEl)
//     })
// }


// function getClassByRate(vote) {
//     if(vote >=8) {
//         return 'green'
//     } else if(vote >=5) {
//         return 'orange'
//     } else {
//         return 'red'
//     }
// }

// form.addEventListener('submit', (e) => {
//     e.preventDefault()

//     const searchTerm = search.value

//     if(searchTerm && searchTerm !== '') {
//         getMovies(SEARCH_API + searchTerm)

//         search.value = ''
//     } else {
//         window.location.reload()
//     }
// })

// function prom(a, b){
//     return  new  Promise(function(resolve, reject){
//         console.log("Fetching data, please wait.")
//         var c= a / b;
//         setTimeout(() => {
//             if(a,b){
//                 resolve(`Your answer :  ${c}`);
//             }else {
//                 reject("Failed to calculate.");
//             }
//         }, 2000)       
//     }); 
// }


// prom(5,0).then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.log(error);
// } );

// fetch("https://gorest.co.in/public/v1/comments")
// .then((response)=> response.json())
// .then((data) => {
//     console.log(data)
//     for(var x in data){
//         document.write(x);
//     }
// })
// .catch((error) => document.write("can't feach data"));


// let test = async () => "Hello";
// test().then((result) => {
//     console.log(result);
// });

async function test(){
    const response = await fetch("https://gorest.co.in/public/v1/comments");
    const students = await response.json();


    return students;
}

test().then((res) => {
    console.log(res);
}).catch((error) => {
    console.log(error);
});