const postList = document.querySelector(".post-list");

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((json) => createMarkup(json));

function createMarkup(posts) {
  const markup = posts
    .map(({ title, body }, i) => {
      return `<li class="post-list-item">
        <span class="post-index">${i + 1}</span>
        <h4 class="post-title">${title}</h4>
        <p class="post-text">${body}</p>
        <a href="#" class="post-link">Read</a>
      </li>`;
    })
    .join("");

  postList.insertAdjacentHTML("afterbegin", markup);
}
