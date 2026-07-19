const schema = {
  type: "object",
  required: ["id", "created_at"],
  properties: {
    id: { type: "string" },
    created_at: { type: "string" }
  }
};

pm.test("Response matches expected schema", function () {
  pm.response.to.have.jsonSchema(schema);
});
