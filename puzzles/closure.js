const closure = () => {
  let counter = 0;

  return () => {
    counter += 1;
    console.log('counter', counter)
  }
}

const fn = closure()
fn();
fn();
