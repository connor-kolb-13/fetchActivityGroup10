// Part 1
// fetch("https://api.github.com/users/connor-kolb-13")
//   .then((response) => response.json())
//   .then((data) =>
// Log public repos
//   console.log(data)
// Log public repos
// console.log(data.public_repos)
// Log number of followers
//     console.log(data.followers)
//   );

// Log user id of followers
// fetch("https://api.github.com/users/connor-kolb-13/followers")
//   .then((response) => response.json())
//   .then((data) =>
//     data.forEach((follower) => {
//       console.log("Follower id: ", follower.id);
//     })
//   );

// Part 2
// feth API
// Log the number of comments
// fetch("https://jsonplaceholder.typicode.com/comments")
//   .then((response) => response.json())
//   .then((comments) => console.log("Number of comments - ", comments.length));

// Log the number of photos
// fetch("https://jsonplaceholder.typicode.com/photos")
//   .then((response) => response.json())
//   .then((photos) => console.log("Number of photos - ", photos.length));

// Log user info
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((users) =>
//     users.forEach((user) => {
//       console.log(user.name, " ", user.email);
//     })
//   );

// Log user info
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((users) =>
//     users.forEach((user) => {
//       console.log(user.name, " ", user.address.city);
//     })
//   );

// Log number of completed todos
// fetch("https://jsonplaceholder.typicode.com/todos?completed=true")
//   .then((response) => response.json())
//   .then((todos) => console.log("Todos completed - ", todos.length));

// Log details completed todos
// fetch("https://jsonplaceholder.typicode.com/todos?completed=true")
//   .then((response) => response.json())
//   .then((todos) =>
//     todos.forEach((todo) => {
//       console.log(todo.id, todo.title);
//     })
//   );

// Log name of  incompleted todos
// fetch("https://jsonplaceholder.typicode.com/todos?completed=false")
//   .then((response) => response.json())
//   .then((todos) =>
//     todos.forEach((todo) => {
//       fetch(`https://jsonplaceholder.typicode.com/users?id=${todo.userId}`)
//         .then((response) => response.json())
//         .then((user) => console.log(user[0].name));
//     })
//   );

// Log name of user with specified album
fetch("https://jsonplaceholder.typicode.com/albums?title=quidem molestiae enim")
  .then((response) => response.json())
  .then((album) =>
    fetch(`https://jsonplaceholder.typicode.com/users?id=${album[0].userId}`)
      .then((response) => response.json())
      .then((user) =>
        console.log("Owner of quidem molestiae enim - ", user[0].name)
      )
  );
