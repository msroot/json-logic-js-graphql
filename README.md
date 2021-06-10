# jsonLogic GraphQL Query Keys


[![NPM](https://nodei.co/npm/json-logic-js-graphql.png?downloads=true)](https://nodei.co/npm/json-logic-js-graphql/)


Exposes immutable useful functions from [Lodash](https://github.com/lodash/lodash) to [jsonLogic](https://github.com/jwadhams/json-logic-js)

## The Problem 
Unsupported GraphQL keys: `==`, `===`, `!=`, `!==`, `>`, `>=`, ` <`, `<=`, `!!`, ` !`, ` %`, ` +`, ` *`, ` -`, `/`

## The Solution
Use any of `_eq`, `_gt`, `_gte`, `_lt`, `_lte` etc from Lodash methods


## Installation

```bash
# Yarn
$ yarn add json-logic-js-graphql

# NPM
$ npm install json-logic-js-graphql --save
```

 
## GraphQL 

jsonLogic's equal operator is `"==="` so it can't be used as a GraphQL key. 
We expose the `eq` lodash method as `_eq` to jsonLogic.

```graphql
mutation {
  updateResource(
    id: "609ce9dbec9fb60004087784"
    logic: { _eq: [{ var: "foo" }, "bar"] }
  ) {
    id
  }
}

```

>  All Lodash methods exposed with the `_` namespace to avoid overwriting the default jsonLogic's functionality 

## Date functions using momentJs 

`_gteDate`, `_gtDate`, `_lteDate`, `_ltDate`, `_eqDate`, `_getDate`

example: 

```javascript
   const rules = {
        _gteDate: [
          [{ var: 'from' }, { var: 'to' }],
          [364, 'days'],
        ],
      }
      const data = { from: '2020-10-01', to: '2021-10-01' }

      jsonLogic.apply(rules, data)
```

## Supported Lodash functions:

Can be found  [here:](https://github.com/msroot/json-logic-js-graphql/blob/main/src/operators.js#L5)

## Tests
Install dependencies with `yarn install` and then run the tests `yarn test`

## Inpired
Inpired from  [formio](https://github.com/formio/formio.js) utils

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/msroot/json-logic-js-graphql. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## License

The library is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

## Code of Conduct

Everyone interacting in the json-logic-js-graphql project’s codebases, issue trackers, chat rooms and mailing lists is expected to follow the [code of conduct](https://github.com/msroot/json-logic-js-graphql/blob/master/CODE_OF_CONDUCT.md).
