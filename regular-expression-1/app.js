let re;

re = /hello/;
//re = /hello/i; //case insensitive
//re = /hello/g; //global search

const result1 = re.exec('my best helo is you hello.');
// console.log(re);
// console.log(re.source);
// console.log(result);
// console.log(result.index);
// console.log(result.input);
// console.log(result[0]);
// console.log(result.groups);

const result2 = re.test('Hello world');
console.log(result2);

const str = 'Hello There';
const result3 = str.match(re);
console.log(result3);

const str2 = 'Hello there hello';
const result4 = str2.search(re);
console.log(result4);

const str3 = 'Hello there hello hello';
const result5 = str3.replace(re, 'Hi');
console.log(result5);

//exec()
//test()
//match()
//search()
//replace()
