const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');

const userName = process.env.MONGOUSER;
const password = process.env.MONGOPASSWORD;
const hostname = process.env.MONGOHOSTNAME;

const url = `mongodb+srv://${userName}:${password}@${hostname}`;

const client = new MongoClient(url);
const userCollection = client.db('startup').collection('user');
const taskCollection = client.db('startup').collection('task');

async function createUser(name, password) {
    // Hash the password before we insert it into the database
    const passwordHash = await bcrypt.hash(password, 10);
  
    const user = {
      name: name,
      password: passwordHash,
      token: uuid.v4(),
    };
    await userCollection.insertOne(user);
  
    return user;
}

function getUserByToken(token) {
    return userCollection.findOne({ token: token });
}

function addTask(task) {
  taskCollection.insertOne(task);

  // const newTask = {
  //   course: task.course,
  //   assignment: task.name,
  //   date: task.date,
  //   completed: task.completed,
  //   user: task.user,
  // };
  //taskCollection.insertOne(newTask);
}

function getTasks() {
  const query = {};
  const options = {};
  const cursor = taskCollection.find(query, options);
  return cursor.toArray();
}

function getUser(name) {
  return userCollection.findOne({name: name});
}

  module.exports = {
    createUser,
    getUserByToken,
    getUser,
    addTask,
    getTasks,
  };