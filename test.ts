import * as _ from 'underscore'

interface Data {
  key: string
  value: string
}

var d: Data = {key: 'abc', value: '10'}
console.log(d.value)

var s = [2, 3]
var total = _.reduce(s, (p, c: number) => p + c, 0);
console.log(total);