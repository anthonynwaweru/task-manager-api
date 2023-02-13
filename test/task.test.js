const request = require("supertest");
const Task = require("../src/models/tasks");
const app = require("../src/app");
const {
  userOne,
  userTwo,
  userTwoId,
  userOneId,
  taskOne,
  taskTwo,
  taskThree,
  taskFour,
  setupDatabase,
} = require("./fixtures/db");

beforeEach(setupDatabase);

test("should first", async () => {
  const response = await request(app)
    .post("/tasks")
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .send({
      description: "Get a full-time job",
    })
    .expect(201);

  const task = await Task.findById(response.body._id);
  expect(task).not.toBeNull();
  expect(task.completed).toEqual(false);
});

test("should get all user tasks", async () => {
  const response = await request(app)
    .get("/tasks")
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200);

  expect(response.body.length).toEqual(2);
});

test('should not delete that doesn"t belong to them', async () => {
  const response = await request(app)
    .delete(`/tasks/${taskThree._id}`)
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(404);
});
