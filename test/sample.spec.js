import {describe} from "mocha";
var chakram = require('chakram'),
    expect = chakram.expect;

describe("Chakram", function() {
    it("should provide HTTP specific assertions - Omdb", async () => {
        var response = await chakram.get("https://reqres.in/api/users/2");
        await expect(response).to.have.status(200);
            await expect(response).to.comprise.of.json(
                {
                    data: {
                        avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg",
                        email: "janet.weaver@reqres.in",
                        first_name: "Janet",
                        id: 2,
                        last_name: "Weaver"
                    },
                    ad: {
                        company: "StatusCode Weekly",
                        text: "A weekly newsletter focusing on software development, infrastructure, the server, performance, and the stack end of things.",
                        url: "http://statuscode.org/"
                    }
                }
            );
        return chakram.wait();

    });
    it("should provide HTTP specific assertions - 2", async () => {
        var response = await chakram.get("https://reqres.in/api/users/2");
        await expect(response).to.have.status(200);
        console.log(response.body);
        await expect(response).to.comprise.of.json(
            {
                data: {
                    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg",
                    email: "janet.weaver@reqres.in",
                    first_name: "Janet",
                    id: 2,
                    last_name: "Weaver"
                },
                ad: {
                    company: "StatusCode Weekly",
                    text: "A weekly newsletter focusing on software development, infrastructure, the server, performance, and the stack end of things.",
                    url: "http://statuscode.org/"
                }
            }
        );
        return chakram.wait();

    });
    it("should provide HTTP specific assertions - POST", async () => {
        var response = await chakram.post("https://reqres.in/api/users",{
            name: "morpheus",
            job: "leader"
        });
        await expect(response).to.have.status(201);
        console.log(response.body);
       await expect(response.body.name).to.equal('morpheus');
       await expect(response.body.id).to.not.equal(null);
        return chakram.wait();

    });
});
