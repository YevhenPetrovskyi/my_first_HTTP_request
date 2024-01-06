const usersList = document.querySelector(".users-list");
const input = document.querySelector(".input");

createMarkup();

input.addEventListener("input", filterUsersByUserName);

async function fetchUsers() {
  const result = await fetch("https://jsonplaceholder.typicode.com/users");

  return result.json();
}

async function createMarkup() {
  try {
    const users = await fetchUsers();
    const markup = users
      .map(({ name }) => {
        return `<li class="list-item">${name}</li>`;
      })
      .join("");
    usersList.insertAdjacentHTML("beforeend", markup);
  } catch (error) {
    console.log(error.message);
  }
}

function filterUsersByUserName(event) {
  const userListItem = document.getElementsByClassName("list-item");

  [...userListItem].forEach((user) => {
    const userCondition = !user.innerHTML
      .toLowerCase()
      .includes(event.target.value.toLowerCase());
    if (userCondition) {
      user.classList.add("hidden");
    } else {
      user.classList.remove("hidden");
    }
  });
}

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   })
//   .then((json) => {
//     const markup = json
//       .map(({ title, body }, i) => {
//         return `<li class="post-list-item">
//         <span class="post-index">${i + 1}</span>
//         <h4 class="post-title">${title}</h4>
//         <p class="post-text">${body}</p>
//         <a href="#" class="post-link">Read</a>
//       </li>`;
//       })
//       .join("");

//     postList.insertAdjacentHTML("afterbegin", markup);
//   })
//   .catch((error) => console.log(error));

// function getPostsById(id) {
//   const userPosts = {
//     id,
//     name: "",
//     posts: [],
//   };

//   return new Promise((resolve, reject) => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) => {
//         const foundUser = users.find(({ id: userId }) => userId === id);
//         userPosts.name = foundUser.name;
//         fetch("https://jsonplaceholder.typicode.com/posts")
//           .then((response) => response.json())
//           .then((users) => {
//             userPosts.posts = users.filter(({ userId }) => userId === id);
//             userPosts.id = id;

//             resolve(userPosts);
//           });
//       })
//       .catch((error) => console.log(`No user found with this ${id}ID`));
//   });
// }

// getPostsById(8).then((user) => console.log(user));
