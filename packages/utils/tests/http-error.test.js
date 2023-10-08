"use strict";
exports.__esModule = true;
var utils_1 = require("@qpjoy/utils");
describe("HTTPError tests", function () {
    test("creation", function () {
        var e = new utils_1.HTTPError({ status: 404, statusText: "Not Found" }, "Mock error for testing");
        expect(e.kind).toBe(utils_1.HTTPErrorKind.Client);
    });
});
