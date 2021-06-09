// source: https://github.com/jwadhams/json-logic-js/tree/master/tests

var jsonLogic = require("../logic.js");

var defaultTests = [
  "#dateGreaterOrEqual",
  [
    {
      dateGreaterOrEqual: [
        [{ var: "from" }, { var: "to" }],
        [364, "days"],
      ],
    },
    { from: "2020-10-01", to: "2021-10-01" },
    true,
  ],

  "# Non-rules get passed through",
  [true, {}, true],
  [false, {}, false],
  [17, {}, 17],
  [3.14, {}, 3.14],
  ["apple", {}, "apple"],
  [null, {}, null],
  [["a", "b"], {}, ["a", "b"]],

  "# Single operator tests",
  [{ "==": [1, 1] }, {}, true],
  [{ "==": [1, "1"] }, {}, true],
  [{ "==": [1, 2] }, {}, false],
  [{ "===": [1, 1] }, {}, true],
  [{ "===": [1, "1"] }, {}, false],
  [{ "===": [1, 2] }, {}, false],
  [{ "!=": [1, 2] }, {}, true],
  [{ "!=": [1, 1] }, {}, false],
  [{ "!=": [1, "1"] }, {}, false],
  [{ "!==": [1, 2] }, {}, true],
  [{ "!==": [1, 1] }, {}, false],
  [{ "!==": [1, "1"] }, {}, true],
  [{ ">": [2, 1] }, {}, true],
  [{ ">": [1, 1] }, {}, false],
  [{ ">": [1, 2] }, {}, false],
  [{ ">": ["2", 1] }, {}, true],
  [{ ">=": [2, 1] }, {}, true],
  [{ ">=": [1, 1] }, {}, true],
  [{ ">=": [1, 2] }, {}, false],
  [{ ">=": ["2", 1] }, {}, true],
  [{ "<": [2, 1] }, {}, false],
  [{ "<": [1, 1] }, {}, false],
  [{ "<": [1, 2] }, {}, true],
  [{ "<": ["1", 2] }, {}, true],
  [{ "<": [1, 2, 3] }, {}, true],
  [{ "<": [1, 1, 3] }, {}, false],
  [{ "<": [1, 4, 3] }, {}, false],
  [{ "<=": [2, 1] }, {}, false],
  [{ "<=": [1, 1] }, {}, true],
  [{ "<=": [1, 2] }, {}, true],
  [{ "<=": ["1", 2] }, {}, true],
  [{ "<=": [1, 2, 3] }, {}, true],
  [{ "<=": [1, 4, 3] }, {}, false],
  [{ "!": [false] }, {}, true],
  [{ "!": false }, {}, true],
  [{ "!": [true] }, {}, false],
  [{ "!": true }, {}, false],
  [{ "!": 0 }, {}, true],
  [{ "!": 1 }, {}, false],
  [{ or: [true, true] }, {}, true],
  [{ or: [false, true] }, {}, true],
  [{ or: [true, false] }, {}, true],
  [{ or: [false, false] }, {}, false],
  [{ or: [false, false, true] }, {}, true],
  [{ or: [false, false, false] }, {}, false],
  [{ or: [false] }, {}, false],
  [{ or: [true] }, {}, true],
  [{ or: [1, 3] }, {}, 1],
  [{ or: [3, false] }, {}, 3],
  [{ or: [false, 3] }, {}, 3],
  [{ and: [true, true] }, {}, true],
  [{ and: [false, true] }, {}, false],
  [{ and: [true, false] }, {}, false],
  [{ and: [false, false] }, {}, false],
  [{ and: [true, true, true] }, {}, true],
  [{ and: [true, true, false] }, {}, false],
  [{ and: [false] }, {}, false],
  [{ and: [true] }, {}, true],
  [{ and: [1, 3] }, {}, 3],
  [{ and: [3, false] }, {}, false],
  [{ and: [false, 3] }, {}, false],
  [{ "?:": [true, 1, 2] }, {}, 1],
  [{ "?:": [false, 1, 2] }, {}, 2],
  [{ in: ["Bart", ["Bart", "Homer", "Lisa", "Marge", "Maggie"]] }, {}, true],
  [
    { in: ["Milhouse", ["Bart", "Homer", "Lisa", "Marge", "Maggie"]] },
    {},
    false,
  ],
  [{ in: ["Spring", "Springfield"] }, {}, true],
  [{ in: ["i", "team"] }, {}, false],
  [{ cat: "ice" }, {}, "ice"],
  [{ cat: ["ice"] }, {}, "ice"],
  [{ cat: ["ice", "cream"] }, {}, "icecream"],
  [{ cat: [1, 2] }, {}, "12"],
  [{ cat: ["Robocop", 2] }, {}, "Robocop2"],
  [
    { cat: ["we all scream for ", "ice", "cream"] },
    {},
    "we all scream for icecream",
  ],
  [{ "%": [1, 2] }, {}, 1],
  [{ "%": [2, 2] }, {}, 0],
  [{ "%": [3, 2] }, {}, 1],
  [{ max: [1, 2, 3] }, {}, 3],
  [{ max: [1, 3, 3] }, {}, 3],
  [{ max: [3, 2, 1] }, {}, 3],
  [{ max: [1] }, {}, 1],
  [{ min: [1, 2, 3] }, {}, 1],
  [{ min: [1, 1, 3] }, {}, 1],
  [{ min: [3, 2, 1] }, {}, 1],
  [{ min: [1] }, {}, 1],

  [{ "+": [1, 2] }, {}, 3],
  [{ "+": [2, 2, 2] }, {}, 6],
  [{ "+": [1] }, {}, 1],
  [{ "+": ["1", 1] }, {}, 2],
  [{ "*": [3, 2] }, {}, 6],
  [{ "*": [2, 2, 2] }, {}, 8],
  [{ "*": [1] }, {}, 1],
  [{ "*": ["1", 1] }, {}, 1],
  [{ "-": [2, 3] }, {}, -1],
  [{ "-": [3, 2] }, {}, 1],
  [{ "-": [3] }, {}, -3],
  [{ "-": ["1", 1] }, {}, 0],
  [{ "/": [4, 2] }, {}, 2],
  [{ "/": [2, 4] }, {}, 0.5],
  [{ "/": ["1", 1] }, {}, 1],

  "# Alias operator tests",
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

  "Substring",
  [{ substr: ["jsonlogic", 4] }, null, "logic"],
  [{ substr: ["jsonlogic", -5] }, null, "logic"],
  [{ substr: ["jsonlogic", 0, 1] }, null, "j"],
  [{ substr: ["jsonlogic", -1, 1] }, null, "c"],
  [{ substr: ["jsonlogic", 4, 5] }, null, "logic"],
  [{ substr: ["jsonlogic", -5, 5] }, null, "logic"],
  [{ substr: ["jsonlogic", -5, -2] }, null, "log"],
  [{ substr: ["jsonlogic", 1, -5] }, null, "son"],

  "Merge arrays",
  [{ merge: [] }, null, []],
  [{ merge: [[1]] }, null, [1]],
  [{ merge: [[1], []] }, null, [1]],
  [{ merge: [[1], [2]] }, null, [1, 2]],
  [{ merge: [[1], [2], [3]] }, null, [1, 2, 3]],
  [{ merge: [[1, 2], [3]] }, null, [1, 2, 3]],
  [{ merge: [[1], [2, 3]] }, null, [1, 2, 3]],
  "Given non-array arguments, merge converts them to arrays",
  [{ merge: 1 }, null, [1]],
  [{ merge: [1, 2] }, null, [1, 2]],
  [{ merge: [1, [2]] }, null, [1, 2]],

  "Too few args",
  [{ if: [] }, null, null],
  [{ if: [true] }, null, true],
  [{ if: [false] }, null, false],
  [{ if: ["apple"] }, null, "apple"],

  "Simple if/then/else cases",
  [{ if: [true, "apple"] }, null, "apple"],
  [{ if: [false, "apple"] }, null, null],
  [{ if: [true, "apple", "banana"] }, null, "apple"],
  [{ if: [false, "apple", "banana"] }, null, "banana"],

  "Empty arrays are falsey",
  [{ if: [[], "apple", "banana"] }, null, "banana"],
  [{ if: [[1], "apple", "banana"] }, null, "apple"],
  [{ if: [[1, 2, 3, 4], "apple", "banana"] }, null, "apple"],

  "Empty strings are falsey, all other strings are truthy",
  [{ if: ["", "apple", "banana"] }, null, "banana"],
  [{ if: ["zucchini", "apple", "banana"] }, null, "apple"],
  [{ if: ["0", "apple", "banana"] }, null, "apple"],

  "You can cast a string to numeric with a unary + ",
  [{ "===": [0, "0"] }, null, false],
  [{ "===": [0, { "+": "0" }] }, null, true],
  [{ if: [{ "+": "0" }, "apple", "banana"] }, null, "banana"],
  [{ if: [{ "+": "1" }, "apple", "banana"] }, null, "apple"],

  "Zero is falsy, all other numbers are truthy",
  [{ if: [0, "apple", "banana"] }, null, "banana"],
  [{ if: [1, "apple", "banana"] }, null, "apple"],
  [{ if: [3.1416, "apple", "banana"] }, null, "apple"],
  [{ if: [-1, "apple", "banana"] }, null, "apple"],

  "Truthy and falsy definitions matter in Boolean operations",
  [{ "!": [[]] }, {}, true],
  [{ "!!": [[]] }, {}, false],
  [{ and: [[], true] }, {}, []],
  [{ or: [[], true] }, {}, true],

  [{ "!": [0] }, {}, true],
  [{ "!!": [0] }, {}, false],
  [{ and: [0, true] }, {}, 0],
  [{ or: [0, true] }, {}, true],

  [{ "!": [""] }, {}, true],
  [{ "!!": [""] }, {}, false],
  [{ and: ["", true] }, {}, ""],
  [{ or: ["", true] }, {}, true],

  [{ "!": ["0"] }, {}, false],
  [{ "!!": ["0"] }, {}, true],
  [{ and: ["0", true] }, {}, true],
  [{ or: ["0", true] }, {}, "0"],

  "If the conditional is logic, it gets evaluated",
  [{ if: [{ ">": [2, 1] }, "apple", "banana"] }, null, "apple"],
  [{ if: [{ ">": [1, 2] }, "apple", "banana"] }, null, "banana"],

  "If the consequents are logic, they get evaluated",
  [
    { if: [true, { cat: ["ap", "ple"] }, { cat: ["ba", "na", "na"] }] },
    null,
    "apple",
  ],
  [
    { if: [false, { cat: ["ap", "ple"] }, { cat: ["ba", "na", "na"] }] },
    null,
    "banana",
  ],

  "If/then/elseif/then cases",
  [{ if: [true, "apple", true, "banana"] }, null, "apple"],
  [{ if: [true, "apple", false, "banana"] }, null, "apple"],
  [{ if: [false, "apple", true, "banana"] }, null, "banana"],
  [{ if: [false, "apple", false, "banana"] }, null, null],

  [{ if: [true, "apple", true, "banana", "carrot"] }, null, "apple"],
  [{ if: [true, "apple", false, "banana", "carrot"] }, null, "apple"],
  [{ if: [false, "apple", true, "banana", "carrot"] }, null, "banana"],
  [{ if: [false, "apple", false, "banana", "carrot"] }, null, "carrot"],

  [{ if: [false, "apple", false, "banana", false, "carrot"] }, null, null],
  [
    { if: [false, "apple", false, "banana", false, "carrot", "date"] },
    null,
    "date",
  ],
  [
    { if: [false, "apple", false, "banana", true, "carrot", "date"] },
    null,
    "carrot",
  ],
  [
    { if: [false, "apple", true, "banana", false, "carrot", "date"] },
    null,
    "banana",
  ],
  [
    { if: [false, "apple", true, "banana", true, "carrot", "date"] },
    null,
    "banana",
  ],
  [
    { if: [true, "apple", false, "banana", false, "carrot", "date"] },
    null,
    "apple",
  ],
  [
    { if: [true, "apple", false, "banana", true, "carrot", "date"] },
    null,
    "apple",
  ],
  [
    { if: [true, "apple", true, "banana", false, "carrot", "date"] },
    null,
    "apple",
  ],
  [
    { if: [true, "apple", true, "banana", true, "carrot", "date"] },
    null,
    "apple",
  ],

  "# Compound Tests",
  [{ and: [{ ">": [3, 1] }, true] }, {}, true],
  [{ and: [{ ">": [3, 1] }, false] }, {}, false],
  [{ and: [{ ">": [3, 1] }, { "!": true }] }, {}, false],
  [{ and: [{ ">": [3, 1] }, { "<": [1, 3] }] }, {}, true],
  [{ "?:": [{ ">": [3, 1] }, "visible", "hidden"] }, {}, "visible"],

  "# Data-Driven",
  [{ var: ["a"] }, { a: 1 }, 1],
  [{ var: ["b"] }, { a: 1 }, null],
  [{ var: ["a"] }, null, null],
  [{ var: "a" }, { a: 1 }, 1],
  [{ var: "b" }, { a: 1 }, null],
  [{ var: "a" }, null, null],
  [{ var: ["a", 1] }, null, 1],
  [{ var: ["b", 2] }, { a: 1 }, 2],
  [{ var: "a.b" }, { a: { b: "c" } }, "c"],
  [{ var: "a.q" }, { a: { b: "c" } }, null],
  [{ var: ["a.q", 9] }, { a: { b: "c" } }, 9],
  [{ var: 1 }, ["apple", "banana"], "banana"],
  [{ var: "1" }, ["apple", "banana"], "banana"],
  [{ var: "1.1" }, ["apple", ["banana", "beer"]], "beer"],
  [
    {
      and: [
        { "<": [{ var: "temp" }, 110] },
        { "==": [{ var: "pie.filling" }, "apple"] },
      ],
    },
    { temp: 100, pie: { filling: "apple" } },
    true,
  ],
  [
    {
      var: [
        { "?:": [{ "<": [{ var: "temp" }, 110] }, "pie.filling", "pie.eta"] },
      ],
    },
    { temp: 100, pie: { filling: "apple", eta: "60s" } },
    "apple",
  ],
  [
    { in: [{ var: "filling" }, ["apple", "cherry"]] },
    { filling: "apple" },
    true,
  ],
  [{ var: "a.b.c" }, null, null],
  [{ var: "a.b.c" }, { a: null }, null],
  [{ var: "a.b.c" }, { a: { b: null } }, null],
  [{ var: "" }, 1, 1],
  [{ var: null }, 1, 1],
  [{ var: [] }, 1, 1],

  "Missing",
  [{ missing: [] }, null, []],
  [{ missing: ["a"] }, null, ["a"]],
  [{ missing: "a" }, null, ["a"]],
  [{ missing: "a" }, { a: "apple" }, []],
  [{ missing: ["a"] }, { a: "apple" }, []],
  [{ missing: ["a", "b"] }, { a: "apple" }, ["b"]],
  [{ missing: ["a", "b"] }, { b: "banana" }, ["a"]],
  [{ missing: ["a", "b"] }, { a: "apple", b: "banana" }, []],
  [{ missing: ["a", "b"] }, {}, ["a", "b"]],
  [{ missing: ["a", "b"] }, null, ["a", "b"]],

  [{ missing: ["a.b"] }, null, ["a.b"]],
  [{ missing: ["a.b"] }, { a: "apple" }, ["a.b"]],
  [{ missing: ["a.b"] }, { a: { c: "apple cake" } }, ["a.b"]],
  [{ missing: ["a.b"] }, { a: { b: "apple brownie" } }, []],
  [{ missing: ["a.b", "a.c"] }, { a: { b: "apple brownie" } }, ["a.c"]],

  "Missing some",
  [{ missing_some: [1, ["a", "b"]] }, { a: "apple" }, []],
  [{ missing_some: [1, ["a", "b"]] }, { b: "banana" }, []],
  [{ missing_some: [1, ["a", "b"]] }, { a: "apple", b: "banana" }, []],
  [{ missing_some: [1, ["a", "b"]] }, { c: "carrot" }, ["a", "b"]],

  [{ missing_some: [2, ["a", "b", "c"]] }, { a: "apple", b: "banana" }, []],
  [{ missing_some: [2, ["a", "b", "c"]] }, { a: "apple", c: "carrot" }, []],
  [
    { missing_some: [2, ["a", "b", "c"]] },
    { a: "apple", b: "banana", c: "carrot" },
    [],
  ],
  [
    { missing_some: [2, ["a", "b", "c"]] },
    { a: "apple", d: "durian" },
    ["b", "c"],
  ],
  [
    { missing_some: [2, ["a", "b", "c"]] },
    { d: "durian", e: "eggplant" },
    ["a", "b", "c"],
  ],

  "Missing and If are friends, because empty arrays are falsey in JsonLogic",
  [
    { if: [{ missing: "a" }, "missed it", "found it"] },
    { a: "apple" },
    "found it",
  ],
  [
    { if: [{ missing: "a" }, "missed it", "found it"] },
    { b: "banana" },
    "missed it",
  ],

  "Missing, Merge, and If are friends. VIN is always required, APR is only required if financing is true.",
  [
    {
      missing: { merge: ["vin", { if: [{ var: "financing" }, ["apr"], []] }] },
    },
    { financing: true },
    ["vin", "apr"],
  ],

  [
    {
      missing: { merge: ["vin", { if: [{ var: "financing" }, ["apr"], []] }] },
    },
    { financing: false },
    ["vin"],
  ],

  "Filter, map, all, none, and some",
  [{ filter: [{ var: "integers" }, true] }, { integers: [1, 2, 3] }, [1, 2, 3]],
  [{ filter: [{ var: "integers" }, false] }, { integers: [1, 2, 3] }, []],
  [
    { filter: [{ var: "integers" }, { ">=": [{ var: "" }, 2] }] },
    { integers: [1, 2, 3] },
    [2, 3],
  ],
  [
    { filter: [{ var: "integers" }, { "%": [{ var: "" }, 2] }] },
    { integers: [1, 2, 3] },
    [1, 3],
  ],

  [
    { map: [{ var: "integers" }, { "*": [{ var: "" }, 2] }] },
    { integers: [1, 2, 3] },
    [2, 4, 6],
  ],
  [{ map: [{ var: "integers" }, { "*": [{ var: "" }, 2] }] }, null, []],
  [
    { map: [{ var: "desserts" }, { var: "qty" }] },
    {
      desserts: [
        { name: "apple", qty: 1 },
        { name: "brownie", qty: 2 },
        { name: "cupcake", qty: 3 },
      ],
    },
    [1, 2, 3],
  ],

  [
    {
      reduce: [
        { var: "integers" },
        { "+": [{ var: "current" }, { var: "accumulator" }] },
        0,
      ],
    },
    { integers: [1, 2, 3, 4] },
    10,
  ],
  [
    {
      reduce: [
        { var: "integers" },
        { "+": [{ var: "current" }, { var: "accumulator" }] },
        0,
      ],
    },
    null,
    0,
  ],
  [
    {
      reduce: [
        { var: "integers" },
        { "*": [{ var: "current" }, { var: "accumulator" }] },
        1,
      ],
    },
    { integers: [1, 2, 3, 4] },
    24,
  ],
  [
    {
      reduce: [
        { var: "integers" },
        { "*": [{ var: "current" }, { var: "accumulator" }] },
        0,
      ],
    },
    { integers: [1, 2, 3, 4] },
    0,
  ],
  [
    {
      reduce: [
        { var: "desserts" },
        { "+": [{ var: "accumulator" }, { var: "current.qty" }] },
        0,
      ],
    },
    {
      desserts: [
        { name: "apple", qty: 1 },
        { name: "brownie", qty: 2 },
        { name: "cupcake", qty: 3 },
      ],
    },
    6,
  ],

  [
    { all: [{ var: "integers" }, { ">=": [{ var: "" }, 1] }] },
    { integers: [1, 2, 3] },
    true,
  ],
  [
    { all: [{ var: "integers" }, { "==": [{ var: "" }, 1] }] },
    { integers: [1, 2, 3] },
    false,
  ],
  [
    { all: [{ var: "integers" }, { "<": [{ var: "" }, 1] }] },
    { integers: [1, 2, 3] },
    false,
  ],
  [
    { all: [{ var: "integers" }, { "<": [{ var: "" }, 1] }] },
    { integers: [] },
    false,
  ],
  [
    { all: [{ var: "items" }, { ">=": [{ var: "qty" }, 1] }] },
    {
      items: [
        { qty: 1, sku: "apple" },
        { qty: 2, sku: "banana" },
      ],
    },
    true,
  ],
  [
    { all: [{ var: "items" }, { ">": [{ var: "qty" }, 1] }] },
    {
      items: [
        { qty: 1, sku: "apple" },
        { qty: 2, sku: "banana" },
      ],
    },
    false,
  ],
  [
    { all: [{ var: "items" }, { "<": [{ var: "qty" }, 1] }] },
    {
      items: [
        { qty: 1, sku: "apple" },
        { qty: 2, sku: "banana" },
      ],
    },
    false,
  ],
  [
    { all: [{ var: "items" }, { ">=": [{ var: "qty" }, 1] }] },
    { items: [] },
    false,
  ],

  [
    { none: [{ var: "integers" }, { ">=": [{ var: "" }, 1] }] },
    { integers: [1, 2, 3] },
    false,
  ],
  [
    { none: [{ var: "integers" }, { "==": [{ var: "" }, 1] }] },
    { integers: [1, 2, 3] },
    false,
  ],
  [
    { none: [{ var: "integers" }, { "<": [{ var: "" }, 1] }] },
    { integers: [1, 2, 3] },
    true,
  ],
  [
    { none: [{ var: "integers" }, { "<": [{ var: "" }, 1] }] },
    { integers: [] },
    true,
  ],
  [
    { none: [{ var: "items" }, { ">=": [{ var: "qty" }, 1] }] },
    {
      items: [
        { qty: 1, sku: "apple" },
        { qty: 2, sku: "banana" },
      ],
    },
    false,
  ],
  [
    { none: [{ var: "items" }, { ">": [{ var: "qty" }, 1] }] },
    {
      items: [
        { qty: 1, sku: "apple" },
        { qty: 2, sku: "banana" },
      ],
    },
    false,
  ],
  [
    { none: [{ var: "items" }, { "<": [{ var: "qty" }, 1] }] },
    {
      items: [
        { qty: 1, sku: "apple" },
        { qty: 2, sku: "banana" },
      ],
    },
    true,
  ],
  [
    { none: [{ var: "items" }, { ">=": [{ var: "qty" }, 1] }] },
    { items: [] },
    true,
  ],

  [
    { some: [{ var: "integers" }, { ">=": [{ var: "" }, 1] }] },
    { integers: [1, 2, 3] },
    true,
  ],
  [
    { some: [{ var: "integers" }, { "==": [{ var: "" }, 1] }] },
    { integers: [1, 2, 3] },
    true,
  ],
  [
    { some: [{ var: "integers" }, { "<": [{ var: "" }, 1] }] },
    { integers: [1, 2, 3] },
    false,
  ],
  [
    { some: [{ var: "integers" }, { "<": [{ var: "" }, 1] }] },
    { integers: [] },
    false,
  ],
  [
    { some: [{ var: "items" }, { ">=": [{ var: "qty" }, 1] }] },
    {
      items: [
        { qty: 1, sku: "apple" },
        { qty: 2, sku: "banana" },
      ],
    },
    true,
  ],
  [
    { some: [{ var: "items" }, { ">": [{ var: "qty" }, 1] }] },
    {
      items: [
        { qty: 1, sku: "apple" },
        { qty: 2, sku: "banana" },
      ],
    },
    true,
  ],
  [
    { some: [{ var: "items" }, { "<": [{ var: "qty" }, 1] }] },
    {
      items: [
        { qty: 1, sku: "apple" },
        { qty: 2, sku: "banana" },
      ],
    },
    false,
  ],
  [
    { some: [{ var: "items" }, { ">=": [{ var: "qty" }, 1] }] },
    { items: [] },
    false,
  ],

  "EOF",
].filter(function (test) {
  return typeof test !== "string";
});

var ruleLike = [
  "Pattern checks for type",
  [1, "number", true],
  ["falafel", "number", false],
  [[], "number", false],
  [{ var: "a" }, "number", false],

  [1, "string", false],
  ["falafel", "string", true],
  [[], "string", false],
  [{ var: "a" }, "string", false],

  [1, "array", false],
  ["falafel", "array", false],
  [[], "array", true],
  [[1], "array", true],
  [[1, 2], "array", true],
  [{ var: "a" }, "array", false],

  "Wildcards",
  [1, "@", true],
  ["falafel", "@", true],
  [[], "@", true],
  [{ var: "a" }, "@", true],
  [{ cat: "falafel" }, { "@": "falafel" }, true],
  [{ cat: "kebab" }, { "@": "falafel" }, false],
  [{ cat: "kebab" }, { "@": "@" }, true],

  "Pattern literally matches a primitive in the rule",
  [1, 1, true],
  [1, 2, false],
  [1, "falafel", false],
  ["falafel", "falafel", true],
  ["falafel", "kebab", false],

  "Array content matches",
  [[1, 2, 3], [1, 2, 3], true],
  [[1, 2, 69], [1, 2, 3], false],
  "Array order matters",
  [[1, 2, 3], [3, 2, 1], false],

  "Arrays of types",
  [[1], ["number"], true],
  [[1], ["string"], false],
  [["falafel"], ["string"], true],
  [[1, "falafel", []], ["number", "string", "array"], true],

  "Taxes, rules of different specificity",
  [{ "*": [0.01, { var: "goods" }] }, { "*": ["number", "@"] }, true],
  [{ "*": [0.01, { var: "goods" }] }, { "*": ["number", { "@": "@" }] }, true],
  [{ "*": [0.01, { var: "goods" }] }, { "*": ["number", { var: "@" }] }, true],
  [{ "*": [0.01, 5000] }, { "*": ["number", { var: "@" }] }, false],
  [
    { "*": [0.01, { "+": [{ var: "goods" }, { var: "services" }] }] },
    { "*": ["number", { "+": "@" }] },
    true,
  ],
  [
    { "*": [0.01, { "+": [{ var: "goods" }, { var: "services" }] }] },
    { "*": ["number", { "+": "array" }] },
    true,
  ],

  "EOF, I like this so I don't have to think about trailing commas",
].filter(function (test) {
  return typeof test !== "string";
});

QUnit.test("applyRunner Total:" + defaultTests.length, function (assert) {
  defaultTests.map((test) => {
    var rule = test[0];
    var data = test[1];
    var expected = test[2];

    assert.deepEqual(
      jsonLogic.apply(rule, data),
      expected,
      "jsonLogic.apply(" +
        JSON.stringify(rule) +
        "," +
        JSON.stringify(data) +
        ") === " +
        JSON.stringify(expected)
    );
  });
});

QUnit.test("ruleLike Total:" + ruleLike.length, function (assert) {
  ruleLike.map((test) => {
    var rule = test[0];
    var pattern = test[1];
    var expected = test[2];

    assert.deepEqual(
      jsonLogic.rule_like(rule, pattern),
      expected,
      "jsonLogic.rule_like(" +
        JSON.stringify(rule) +
        "," +
        JSON.stringify(pattern) +
        ") === " +
        JSON.stringify(expected)
    );
  });
});


QUnit.test("Bad operator", function (assert) {
  assert.throws(function () {
    jsonLogic.apply({ fubar: [] });
  }, /Unrecognized operation/);
});

QUnit.test("logging", function (assert) {
  var last_console;
  console.log = function (logged) {
    last_console = logged;
  };
  assert.equal(jsonLogic.apply({ log: [1] }), 1);
  assert.equal(last_console, 1);
});

QUnit.test("edge cases", function (assert) {
  assert.equal(jsonLogic.apply(), undefined, "Called with no arguments");

  assert.equal(jsonLogic.apply({ var: "" }, 0), 0, "Var when data is 'falsy'");
  assert.equal(
    jsonLogic.apply({ var: "" }, null),
    null,
    "Var when data is null"
  );
  assert.equal(
    jsonLogic.apply({ var: "" }, undefined),
    undefined,
    "Var when data is undefined"
  );

  assert.equal(
    jsonLogic.apply({ var: ["a", "fallback"] }, undefined),
    "fallback",
    "Fallback works when data is a non-object"
  );
});

QUnit.test("Expanding functionality with add_operator", function (assert) {
  // Operator is not yet defined
  assert.throws(function () {
    jsonLogic.apply({ add_to_a: [] });
  }, /Unrecognized operation/);

  // Set up some outside data, and build a basic function operator
  var a = 0;
  var add_to_a = function (b) {
    if (b === undefined) {
      b = 1;
    }
    return (a += b);
  };
  jsonLogic.add_operation("add_to_a", add_to_a);
  // New operation executes, returns desired result
  // No args
  assert.equal(jsonLogic.apply({ add_to_a: [] }), 1);
  // Unary syntactic sugar
  assert.equal(jsonLogic.apply({ add_to_a: 41 }), 42);
  // New operation had side effects.
  assert.equal(a, 42);

  var fives = {
    add: function (i) {
      return i + 5;
    },
    subtract: function (i) {
      return i - 5;
    },
  };

  jsonLogic.add_operation("fives", fives);
  assert.equal(jsonLogic.apply({ "fives.add": 37 }), 42);
  assert.equal(jsonLogic.apply({ "fives.subtract": [47] }), 42);

  // Calling a method with multiple var as arguments.
  jsonLogic.add_operation("times", function (a, b) {
    return a * b;
  });
  assert.equal(
    jsonLogic.apply({ times: [{ var: "a" }, { var: "b" }] }, { a: 6, b: 7 }),
    42
  );

  // Remove operation:
  jsonLogic.rm_operation("times");

  assert.throws(function () {
    jsonLogic.apply({ times: [2, 2] });
  }, /Unrecognized operation/);

  // Calling a method that takes an array, but the inside of the array has rules, too
  jsonLogic.add_operation("array_times", function (a) {
    return a[0] * a[1];
  });
  assert.equal(
    jsonLogic.apply(
      { array_times: [[{ var: "a" }, { var: "b" }]] },
      { a: 6, b: 7 }
    ),
    42
  );
});

QUnit.test("Control structures don't eval depth-first", function (assert) {
  // Depth-first recursion was wasteful but not harmful until we added custom operations that could have side-effects.

  // If operations run the condition, if truthy, it runs and returns that consequent.
  // Consequents of falsy conditions should not run.
  // After one truthy condition, no other condition should run
  var conditions = [];
  var consequents = [];
  jsonLogic.add_operation("push.if", function (v) {
    conditions.push(v);
    return v;
  });
  jsonLogic.add_operation("push.then", function (v) {
    consequents.push(v);
    return v;
  });
  jsonLogic.add_operation("push.else", function (v) {
    consequents.push(v);
    return v;
  });

  jsonLogic.apply({
    if: [
      { "push.if": [true] },
      { "push.then": ["first"] },
      { "push.if": [false] },
      { "push.then": ["second"] },
      { "push.else": ["third"] },
    ],
  });
  assert.deepEqual(conditions, [true]);
  assert.deepEqual(consequents, ["first"]);

  conditions = [];
  consequents = [];
  jsonLogic.apply({
    if: [
      { "push.if": [false] },
      { "push.then": ["first"] },
      { "push.if": [true] },
      { "push.then": ["second"] },
      { "push.else": ["third"] },
    ],
  });
  assert.deepEqual(conditions, [false, true]);
  assert.deepEqual(consequents, ["second"]);

  conditions = [];
  consequents = [];
  jsonLogic.apply({
    if: [
      { "push.if": [false] },
      { "push.then": ["first"] },
      { "push.if": [false] },
      { "push.then": ["second"] },
      { "push.else": ["third"] },
    ],
  });
  assert.deepEqual(conditions, [false, false]);
  assert.deepEqual(consequents, ["third"]);

  jsonLogic.add_operation("push", function (arg) {
    i.push(arg);
    return arg;
  });
  var i = [];

  i = [];
  jsonLogic.apply({ and: [{ push: [false] }, { push: [false] }] });
  assert.deepEqual(i, [false]);
  i = [];
  jsonLogic.apply({ and: [{ push: [false] }, { push: [true] }] });
  assert.deepEqual(i, [false]);
  i = [];
  jsonLogic.apply({ and: [{ push: [true] }, { push: [false] }] });
  assert.deepEqual(i, [true, false]);
  i = [];
  jsonLogic.apply({ and: [{ push: [true] }, { push: [true] }] });
  assert.deepEqual(i, [true, true]);

  i = [];
  jsonLogic.apply({ or: [{ push: [false] }, { push: [false] }] });
  assert.deepEqual(i, [false, false]);
  i = [];
  jsonLogic.apply({ or: [{ push: [false] }, { push: [true] }] });
  assert.deepEqual(i, [false, true]);
  i = [];
  jsonLogic.apply({ or: [{ push: [true] }, { push: [false] }] });
  assert.deepEqual(i, [true]);
  i = [];
  jsonLogic.apply({ or: [{ push: [true] }, { push: [true] }] });
  assert.deepEqual(i, [true]);
});
