# json-logic-js-graphql

Exposes immutable useful functions from [Lodash](https://github.com/lodash/lodash) to [jsonLogic](https://github.com/jwadhams/json-logic-js)

## The Problem 
Unsupported GraphQL keys: `==`, `===`, `!=`, `!==`, `>`, `>=`, ` <`, `<=`, `!!`, ` !`, ` %`, ` +`, ` *`, ` -`, `/`

## The Solution
Use any of `_eq`, `_gt`, `_gte`, `_lt`, `_lte` etc from Lodash methods
 
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

## Support for some basic date functions using momentJs 

`_gteDate`, `_gtDate`, `_lteDate`, `_ltDate`, `_eqDate`

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

[_chunk](https://lodash.com/docs/#chunk)
[_compact](https://lodash.com/docs/#compact)
[_concat](https://lodash.com/docs/#concat)
[_difference](https://lodash.com/docs/#difference)
[_differenceBy](https://lodash.com/docs/#differenceBy)
[_differenceWith](https://lodash.com/docs/#differenceWith)
[_drop](https://lodash.com/docs/#drop)
[_dropRight](https://lodash.com/docs/#dropRight)
[_dropRightWhile](https://lodash.com/docs/#dropRightWhile)
[_dropWhile](https://lodash.com/docs/#dropWhile)
[_findIndex](https://lodash.com/docs/#findIndex)
[_findLastIndex](https://lodash.com/docs/#findLastIndex)
[_first](https://lodash.com/docs/#first)
[_flatten](https://lodash.com/docs/#flatten)
[_flattenDeep](https://lodash.com/docs/#flattenDeep)
[_flattenDepth](https://lodash.com/docs/#flattenDepth)
[_fromPairs](https://lodash.com/docs/#fromPairs)
[_head](https://lodash.com/docs/#head)
[_indexOf](https://lodash.com/docs/#indexOf)
[_initial](https://lodash.com/docs/#initial)
[_intersection](https://lodash.com/docs/#intersection)
[_intersectionBy](https://lodash.com/docs/#intersectionBy)
[_intersectionWith](https://lodash.com/docs/#intersectionWith)
[_join](https://lodash.com/docs/#join)
[_last](https://lodash.com/docs/#last)
[_lastIndexOf](https://lodash.com/docs/#lastIndexOf)
[_nth](https://lodash.com/docs/#nth)
[_slice](https://lodash.com/docs/#slice)
[_sortedIndex](https://lodash.com/docs/#sortedIndex)
[_sortedIndexBy](https://lodash.com/docs/#sortedIndexBy)
[_sortedIndexOf](https://lodash.com/docs/#sortedIndexOf)
[_sortedLastIndex](https://lodash.com/docs/#sortedLastIndex)
[_sortedLastIndexBy](https://lodash.com/docs/#sortedLastIndexBy)
[_sortedLastIndexOf](https://lodash.com/docs/#sortedLastIndexOf)
[_sortedUniq](https://lodash.com/docs/#sortedUniq)
[_sortedUniqBy](https://lodash.com/docs/#sortedUniqBy)
[_tail](https://lodash.com/docs/#tail)
[_take](https://lodash.com/docs/#take)
[_takeRight](https://lodash.com/docs/#takeRight)
[_takeRightWhile](https://lodash.com/docs/#takeRightWhile)
[_takeWhile](https://lodash.com/docs/#takeWhile)
[_union](https://lodash.com/docs/#union)
[_unionBy](https://lodash.com/docs/#unionBy)
[_unionWith](https://lodash.com/docs/#unionWith)
[_uniq](https://lodash.com/docs/#uniq)
[_uniqBy](https://lodash.com/docs/#uniqBy)
[_uniqWith](https://lodash.com/docs/#uniqWith)
[_unzip](https://lodash.com/docs/#unzip)
[_unzipWith](https://lodash.com/docs/#unzipWith)
[_without](https://lodash.com/docs/#without)
[_xor](https://lodash.com/docs/#xor)
[_xorBy](https://lodash.com/docs/#xorBy)
[_xorWith](https://lodash.com/docs/#xorWith)
[_zip](https://lodash.com/docs/#zip)
[_zipObject](https://lodash.com/docs/#zipObject)
[_zipObjectDeep](https://lodash.com/docs/#zipObjectDeep)
[_zipWith](https://lodash.com/docs/#zipWith)
[_countBy](https://lodash.com/docs/#countBy)
[_every](https://lodash.com/docs/#every)
[_filter](https://lodash.com/docs/#filter)
[_find](https://lodash.com/docs/#find)
[_findLast](https://lodash.com/docs/#findLast)
[_flatMap](https://lodash.com/docs/#flatMap)
[_flatMapDeep](https://lodash.com/docs/#flatMapDeep)
[_flatMapDepth](https://lodash.com/docs/#flatMapDepth)
[_groupBy](https://lodash.com/docs/#groupBy)
[_includes](https://lodash.com/docs/#includes)
[_invokeMap](https://lodash.com/docs/#invokeMap)
[_keyBy](https://lodash.com/docs/#keyBy)
[_map](https://lodash.com/docs/#map)
[_orderBy](https://lodash.com/docs/#orderBy)
[_partition](https://lodash.com/docs/#partition)
[_reduce](https://lodash.com/docs/#reduce)
[_reduceRight](https://lodash.com/docs/#reduceRight)
[_reject](https://lodash.com/docs/#reject)
[_sample](https://lodash.com/docs/#sample)
[_sampleSize](https://lodash.com/docs/#sampleSize)
[_shuffle](https://lodash.com/docs/#shuffle)
[_size](https://lodash.com/docs/#size)
[_some](https://lodash.com/docs/#some)
[_sortBy](https://lodash.com/docs/#sortBy)
[_now](https://lodash.com/docs/#now)
[_flip](https://lodash.com/docs/#flip)
[_negate](https://lodash.com/docs/#negate)
[_overArgs](https://lodash.com/docs/#overArgs)
[_partial](https://lodash.com/docs/#partial)
[_partialRight](https://lodash.com/docs/#partialRight)
[_rearg](https://lodash.com/docs/#rearg)
[_rest](https://lodash.com/docs/#rest)
[_spread](https://lodash.com/docs/#spread)
[_castArray](https://lodash.com/docs/#castArray)
[_clone](https://lodash.com/docs/#clone)
[_cloneDeep](https://lodash.com/docs/#cloneDeep)
[_cloneDeepWith](https://lodash.com/docs/#cloneDeepWith)
[_cloneDeep](https://lodash.com/docs/#cloneDeep)
[_conformsTo](https://lodash.com/docs/#conformsTo)
[_eq](https://lodash.com/docs/#eq)
[_gt](https://lodash.com/docs/#gt)
[_gte](https://lodash.com/docs/#gte)
[_isArguments](https://lodash.com/docs/#isArguments)
[_isArray](https://lodash.com/docs/#isArray)
[_isArrayBuffer](https://lodash.com/docs/#isArrayBuffer)
[_isArrayLike](https://lodash.com/docs/#isArrayLike)
[_isArrayLikeObject](https://lodash.com/docs/#isArrayLikeObject)
[_isBoolean](https://lodash.com/docs/#isBoolean)
[_isBuffer](https://lodash.com/docs/#isBuffer)
[_isDate](https://lodash.com/docs/#isDate)
[_isElement](https://lodash.com/docs/#isElement)
[_isEmpty](https://lodash.com/docs/#isEmpty)
[_isEqual](https://lodash.com/docs/#isEqual)
[_isEqualWith](https://lodash.com/docs/#isEqualWith)
[_isError](https://lodash.com/docs/#isError)
[_isFinite](https://lodash.com/docs/#isFinite)
[_isFunction](https://lodash.com/docs/#isFunction)
[_isInteger](https://lodash.com/docs/#isInteger)
[_isLength](https://lodash.com/docs/#isLength)
[_isMap](https://lodash.com/docs/#isMap)
[_isMatch](https://lodash.com/docs/#isMatch)
[_isMatchWith](https://lodash.com/docs/#isMatchWith)
[_isNaN](https://lodash.com/docs/#isNaN)
[_isNative](https://lodash.com/docs/#isNative)
[_isNil](https://lodash.com/docs/#isNil)
[_isNull](https://lodash.com/docs/#isNull)
[_isNumber](https://lodash.com/docs/#isNumber)
[_isObject](https://lodash.com/docs/#isObject)
[_isObjectLike](https://lodash.com/docs/#isObjectLike)
[_isPlainObject](https://lodash.com/docs/#isPlainObject)
[_isRegExp](https://lodash.com/docs/#isRegExp)
[_isSafeInteger](https://lodash.com/docs/#isSafeInteger)
[_isSet](https://lodash.com/docs/#isSet)
[_isString](https://lodash.com/docs/#isString)
[_isSymbol](https://lodash.com/docs/#isSymbol)
[_isTypedArray](https://lodash.com/docs/#isTypedArray)
[_isUndefined](https://lodash.com/docs/#isUndefined)
[_isWeakMap](https://lodash.com/docs/#isWeakMap)
[_isWeakSet](https://lodash.com/docs/#isWeakSet)
[_lt](https://lodash.com/docs/#lt)
[_lte](https://lodash.com/docs/#lte)
[_toArray](https://lodash.com/docs/#toArray)
[_toFinite](https://lodash.com/docs/#toFinite)
[_toInteger](https://lodash.com/docs/#toInteger)
[_toLength](https://lodash.com/docs/#toLength)
[_toNumber](https://lodash.com/docs/#toNumber)
[_toPlainObject](https://lodash.com/docs/#toPlainObject)
[_toSafeInteger](https://lodash.com/docs/#toSafeInteger)
[_toString](https://lodash.com/docs/#toString)
[_add](https://lodash.com/docs/#add)
[_ceil](https://lodash.com/docs/#ceil)
[_divide](https://lodash.com/docs/#divide)
[_floor](https://lodash.com/docs/#floor)
[_max](https://lodash.com/docs/#max)
[_maxBy](https://lodash.com/docs/#maxBy)
[_mean](https://lodash.com/docs/#mean)
[_meanBy](https://lodash.com/docs/#meanBy)
[_min](https://lodash.com/docs/#min)
[_minBy](https://lodash.com/docs/#minBy)
[_multiply](https://lodash.com/docs/#multiply)
[_round](https://lodash.com/docs/#round)
[_subtract](https://lodash.com/docs/#subtract)
[_sum](https://lodash.com/docs/#sum)
[_sumBy](https://lodash.com/docs/#sumBy)
[_clamp](https://lodash.com/docs/#clamp)
[_inRange](https://lodash.com/docs/#inRange)
[_random](https://lodash.com/docs/#random)
[_at](https://lodash.com/docs/#at)
[_entries](https://lodash.com/docs/#entries)
[_entriesIn](https://lodash.com/docs/#entriesIn)
[_findKey](https://lodash.com/docs/#findKey)
[_findLastKey](https://lodash.com/docs/#findLastKey)
[_functions](https://lodash.com/docs/#functions)
[_functionsIn](https://lodash.com/docs/#functionsIn)
[_get](https://lodash.com/docs/#get)
[_has](https://lodash.com/docs/#has)
[_hasIn](https://lodash.com/docs/#hasIn)
[_invert](https://lodash.com/docs/#invert)
[_invertBy](https://lodash.com/docs/#invertBy)
[_invoke](https://lodash.com/docs/#invoke)
[_keys](https://lodash.com/docs/#keys)
[_keysIn](https://lodash.com/docs/#keysIn)
[_mapKeys](https://lodash.com/docs/#mapKeys)
[_mapValues](https://lodash.com/docs/#mapValues)
[_omit](https://lodash.com/docs/#omit)
[_omitBy](https://lodash.com/docs/#omitBy)
[_pick](https://lodash.com/docs/#pick)
[_pickBy](https://lodash.com/docs/#pickBy)
[_result](https://lodash.com/docs/#result)
[_toPairs](https://lodash.com/docs/#toPairs)
[_toPairsIn](https://lodash.com/docs/#toPairsIn)
[_transform](https://lodash.com/docs/#transform)
[_values](https://lodash.com/docs/#values)
[_valuesIn](https://lodash.com/docs/#valuesIn)
[_camelCase](https://lodash.com/docs/#camelCase)
[_capitalize](https://lodash.com/docs/#capitalize)
[_deburr](https://lodash.com/docs/#deburr)
[_endsWith](https://lodash.com/docs/#endsWith)
[_escape](https://lodash.com/docs/#escape)
[_escapeRegExp](https://lodash.com/docs/#escapeRegExp)
[_kebabCase](https://lodash.com/docs/#kebabCase)
[_lowerCase](https://lodash.com/docs/#lowerCase)
[_lowerFirst](https://lodash.com/docs/#lowerFirst)
[_pad](https://lodash.com/docs/#pad)
[_padEnd](https://lodash.com/docs/#padEnd)
[_padStart](https://lodash.com/docs/#padStart)
[_parseInt](https://lodash.com/docs/#parseInt)
[_repeat](https://lodash.com/docs/#repeat)
[_replace](https://lodash.com/docs/#replace)
[_snakeCase](https://lodash.com/docs/#snakeCase)
[_split](https://lodash.com/docs/#split)
[_startCase](https://lodash.com/docs/#startCase)
[_startsWith](https://lodash.com/docs/#startsWith)
[_toLower](https://lodash.com/docs/#toLower)
[_toUpper](https://lodash.com/docs/#toUpper)
[_trim](https://lodash.com/docs/#trim)
[_trimEnd](https://lodash.com/docs/#trimEnd)
[_trimStart](https://lodash.com/docs/#trimStart)
[_truncate](https://lodash.com/docs/#truncate)
[_unescape](https://lodash.com/docs/#unescape)
[_upperCase](https://lodash.com/docs/#upperCase)
[_upperFirst](https://lodash.com/docs/#upperFirst)
[_words](https://lodash.com/docs/#words)
[_cond](https://lodash.com/docs/#cond)
[_conforms](https://lodash.com/docs/#conforms)
[_constant](https://lodash.com/docs/#constant)
[_defaultTo](https://lodash.com/docs/#defaultTo)
[_flow](https://lodash.com/docs/#flow)
[_flowRight](https://lodash.com/docs/#flowRight)
[_identity](https://lodash.com/docs/#identity)
[_iteratee](https://lodash.com/docs/#iteratee)
[_matches](https://lodash.com/docs/#matches)
[_matchesProperty](https://lodash.com/docs/#matchesProperty)
[_method](https://lodash.com/docs/#method)
[_methodOf](https://lodash.com/docs/#methodOf)
[_nthArg](https://lodash.com/docs/#nthArg)
[_over](https://lodash.com/docs/#over)
[_overEvery](https://lodash.com/docs/#overEvery)
[_overSome](https://lodash.com/docs/#overSome)
[_property](https://lodash.com/docs/#property)
[_propertyOf](https://lodash.com/docs/#propertyOf)
[_range](https://lodash.com/docs/#range)
[_rangeRight](https://lodash.com/docs/#rangeRight)
[_stubArray](https://lodash.com/docs/#stubArray)
[_stubFalse](https://lodash.com/docs/#stubFalse)
[_stubObject](https://lodash.com/docs/#stubObject)
[_stubString](https://lodash.com/docs/#stubString)
[_stubTrue](https://lodash.com/docs/#stubTrue)
[_times](https://lodash.com/docs/#times)
[_toPath](https://lodash.com/docs/#toPath)
[_uniqueId](https://lodash.com/docs/#uniqueId)


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
