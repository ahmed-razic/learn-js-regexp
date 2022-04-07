try {
  //null.myFunction();
  //myFunction();
  const user = { userName: 'Ahmed' };

  if (!user.email) {
    throw new SyntaxError('User has no email');
  }
} catch (error) {
  console.log(error);
  console.log(error.message);
  console.log(error.name);
  console.log(error instanceof ReferenceError);
  console.log(error instanceof EvalError);
  console.log(error instanceof RangeError);
  console.log(error instanceof ErrorEvent);
  console.log(error instanceof OverconstrainedError);
  console.log(error instanceof TypeError);
} finally {
  console.log('Finally runs regardless...');
}

console.log('Program continues...');
