db.createUser({
  user: "asteroid",
  pwd: "passwerd",
  roles: [
    {
      role: "dbOwner",
      db: "fs-todo",
    },
  ],
});

db.createCollection("todos");

db.todos.insert({ text: "Write code", done: true });
db.todos.insert({ text: "Learn about containers", done: false });
