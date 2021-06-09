# json-logic-js-graphql


This package adds support to [json-logic-js](https://github.com/jwadhams/json-logic-js) for GraphQL Query variable operators like `>` `===` and more

## Operation Alias:

| Name 	| Operation 	|
|-	|-	|
| equal 	| == 	|
| strictEqual 	| === 	|
| notEqual 	| != 	|
| strictNotEqual 	| !== 	|
| greater 	| > 	|
| greaterOrEqual 	| >= 	|
| less 	| < 	|
| lessOrEqual 	| <= 	|
| booleanCasting 	| !! 	|
| not 	| ! 	|
| modulo 	| % 	|
| add 	| + 	|
| multiply 	| * 	|
| substract 	| - 	|
| divide 	| / 	|

## List Operators 

List all available operators: 

```js
const jsonLogic = require('json-logic-js-graphql')
jsonLogic.list_operators()
```

## GraphQL 

The `rule` can be a jsonlogic object

```graphql
mutation {
  updateResource(
    id: "609ce9dbec9fb60004087784"
    rule: { strictEqual: [{ var: "foo" }, "bar"] }
  ) {
    id
  }
}

```

## Tests

Install dependencies with `yarn install` and then run the tests `yarn test`

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/msroot/json-logic-js-graphql. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## License

The library is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

## Code of Conduct

Everyone interacting in the json-logic-js-graphql project’s codebases, issue trackers, chat rooms and mailing lists is expected to follow the [code of conduct](https://github.com/msroot/json-logic-js-graphql/blob/master/CODE_OF_CONDUCT.md).