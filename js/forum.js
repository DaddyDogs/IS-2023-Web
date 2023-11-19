window.onload = function (){
  setTimeout(hideGif, 3000)
  displayPosts()
}

function hideGif(){
  let gif = document.getElementsByClassName('preloader')[0];
  gif.style.display = 'none';
}

function getPosts() {
  return new Promise(function(resolve, reject) {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => { resolve(response.json()) })
      .catch(error => {console.log(error); reject(error)})
  });
}

function displayPosts(){
  let filteredPosts

  getPosts().
  then(posts => {filteredPosts = filterPosts(posts)}).
  then(() => renderPosts(filteredPosts)).
  catch(error => {
    let errorContainer = document.querySelector('.error')
    errorContainer.style.display = 'block';
    let errorText = document.createElement('p');
    errorText.textContent = "Что-то пошло не так: " + error.toString()
    errorText.classList.add('.errorText')

    errorContainer.appendChild(errorText)
  })
}

function filterPosts(posts){
  let random = (parseInt(String(Math.random() * 25 + 1)))
  console.log(random)
  return posts.filter(post => post.id % random === 0)
}

function renderPosts(posts){
  let postsContainer = document.querySelector('.posts')
  posts.forEach(post => {

    let postContainer = document.createElement('div');
    postContainer.classList.add('post');

    let title = document.createElement('h3');
    title.textContent = post.title;

    let body = document.createElement('p');
    body.textContent = post.body;

    postContainer.appendChild(title);
    postContainer.appendChild(body);

    postsContainer.appendChild(postContainer);
  });
  console.log(posts)
}
