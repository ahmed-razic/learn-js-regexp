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
re = /he[ll]o/i;

re = /gr[ae]y/i;
re = /[GFK]ray/;
re = /[^GFK]ray/;
re = /[A-Z]ray/;
re = /[0-9]ray/;

re = /Hel{2}o/i;
re = /Hel{2-4}o/i;
re = /Hel{2,}o/i;

re = /([0-9]x){3}/i;

const str = '3x3x3x';

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
