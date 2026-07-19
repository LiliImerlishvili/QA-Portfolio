const response = pm.response.json();

pm.test("Resource ID exists", function () {
  pm.expect(response.id).to.be.a("string").and.not.empty;
});

pm.collectionVariables.set("resourceId", response.id);
