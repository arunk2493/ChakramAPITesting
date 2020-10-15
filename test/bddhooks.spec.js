import {describe,before,after} from "mocha";
var chakram = require('chakram'),
    expect = chakram.expect;
describe("BDD + Hooks", function () {
    let thingName;
    before("Before API", async () => {
        var response = await chakram.post("https://reqres.in/api/users",{
            name: "morpheus",
            job: "leader"
        });
        await expect(response).to.have.status(201);
        thingName = await response.body.id;
        console.log(thingName);
        await expect(response.body.name).to.equal('morpheus');
        await expect(response.body.id).to.not.equal(null);
        return chakram.wait();
    });


    it("should verify the added data", function () {
        const postedData = chakram.get("https://reqres.in/api/users/3");
        expect(postedData).to.have.status(200);
        return chakram.wait();
    });

    after("update dweet with result", function () {
        console.log('-----XXXX______------')
    });
});
