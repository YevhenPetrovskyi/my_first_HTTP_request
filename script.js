const postList = document.querySelector(".post-list");

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((json) => createMarkup(json))
  .catch((error) => console.log(error));

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

// function getPostsById(id) {
//   const userPosts = {};
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json())
//     .then((json) => {
//       const [{ name }] = json.filter(({ id: userId }) => userId === id);
//       userPosts.id = id;
//       userPosts.name = name;
//       fetch("https://jsonplaceholder.typicode.com/posts")
//         .then((response) => response.json())
//         .then((json) => {
//           userPosts.posts = json.filter(({ userId }) => userId === id);
//           userPosts.id = id;
//         });
//     })
//     .catch((error) => console.log(`No user found with this ${id}ID`));
//   return userPosts;
// }

// console.log(getPostsById(4));
