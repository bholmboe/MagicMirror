const helpers = require("./global-setup");

describe("Check configuration without modules", function () {
	beforeAll(function (done) {
		helpers.startApplication("tests/configs/without_modules.js");
		helpers.getDocument(done);
	});
	afterAll(function () {
		helpers.stopApplication();
	});

	it("Show the message MagicMirror title", function () {
		helpers.waitForElement("#module_1_helloworld .module-content").then((elem) => {
			expect(elem).not.toBe(null);
			expect(elem.textContent).toContain("Magic Mirror2");
		});
	});

	it("Show the text Michael's website", function () {
		helpers.waitForElement("#module_5_helloworld .module-content").then((elem) => {
			expect(elem).not.toBe(null);
			expect(elem.textContent).toContain("www.michaelteeuw.nl");
		});
	});
});
