const request = require("supertest");
const app = require("../src/app");
const User = require("../src/models/user");
const { userOne, userOneId, setupDatabase } = require("./fixtures/db");

beforeEach(setupDatabase);

test("should signup new user", async () => {
  await request(app)
    .post("/users")
    .send({
      name: "Anthony",
      email: "testing@example.com",
      password: "This13Testing",
    })
    .expect(201);
});

test("should login signed-up user", async () => {
  const response = await request(app)
    .post("/users/login")
    .send({ email: userOne.email, password: userOne.password })
    .expect(200);

  const user = await User.findById(userOneId);
  expect(response.body.token).toBe(user.tokens[1].token);
});

test("should not login none existent user", async () => {
  await request(app)
    .post("/users/login")
    .send({ email: !userOne.email, password: !userOne.password })
    .expect(400);
});

test("should get user profile", async () => {
  await request(app)
    .get("/users/me")
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200);
});
test("should not get user profile if not authorized", async () => {
  await request(app)
    .get("/users/me")

    .send()
    .expect(401);
});

test("should delete user account", async () => {
  await request(app)
    .delete("/users/me")
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200);
  const user = await User.findById(userOneId);
  expect(user).toBeNull();
});
test("should not delete user account if not authorized", async () => {
  await request(app)
    .delete("/users/me")

    .send()
    .expect(401);
});

test("should upload avatar", async () => {
  await request(app)
    .post("/users/me/avatar")
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .attach("avatar", "test/fixtures/philly.jpg")
    .expect(200);

  const user = await User.findById(userOneId);

  expect(user.avatar).toEqual(expect.any(Buffer));
});

test("should update valid usr fields", async () => {
  await request(app)
    .patch("/users/me")
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .send({ name: "Antoine" })
    .expect(200);

  const user = await User.findById(userOneId);

  expect(user.name).toBe("Antoine".toLowerCase());
});
test("should update valid usr fields", async () => {
  await request(app)
    .patch("/users/me")
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .send({ location: "Antoine" })
    .expect(404);
});
