let re;

re = /hello/;
re = /hello/i;
re = /^hel/i;
re = /world$/i;
re = /^hello$/i;
re = /h.llo/i;
re = /h*llo/i;
re = /hel?b?lo/i;
re = /hello\?/i;

const str = 'Hello?';

const result = re.exec(str);
console.log(result);

function reTest(re, str) {
  if (re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} does NOT matches ${re.source}`);
  }
}

reTest(re, str);
