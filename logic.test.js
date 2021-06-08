var jsonLogic = require("./logic.js");

var tests = [
  [{ equal: [1, 1] }, {}, true],
  [{ strictEqual: [1, 1] }, {}, true],
  [{ notEqual: [1, 2] }, {}, true],
  [{ strictNotEqual: [1, 2] }, {}, true],
  [{ greater: [2, 1] }, {}, true],
  [{ greaterOrEqual: [2, 1] }, {}, true],
  [{ less: [2, 1] }, {}, false],
  [{ lessOrEqual: [2, 1] }, {}, false],
  [{ booleanCasting: ["0"] }, {}, true],
  [{ not: [false] }, {}, true],
  [{ modulo: [1, 2] }, {}, 1],
  [{ add: [1, 1] }, {}, 2],
  [{ multiply: [3, 2] }, {}, 6],
  [{ substract: [2, 3] }, {}, -1],
  [{ divide: [1, 1] }, {}, 1],
];

for (var i = 0; i < tests.length; i++) {
  var test = tests[i];
  var title = Object.keys(test[0])[0].toString();
  it(`${title}`, () => {
    expect(jsonLogic.apply(test[0], test[1])).toBe(test[2]);
  });
}

it("using dateGreaterOrEqual", () => {
  var data = { from: "2020-10-01", to: "2021-10-01" };
  var rules = {
    dateGreaterOrEqual: [
      [{ var: "from" }, { var: "to" }],
      [364, "days"],
    ],
  };

  expect(jsonLogic.apply(rules, data)).toBe(true);
});
