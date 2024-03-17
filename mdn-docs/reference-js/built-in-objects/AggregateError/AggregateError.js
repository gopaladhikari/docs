Promise.any([
  Promise.reject(new Error("Multiple errors 1")),
  Promise.reject(new Error("Multiple errors 2")),
]).catch((err) => {
  console.log(err instanceof AggregateError);
  console.log(err.message);
});

try {
  throw new AggregateError(
    [new Error("Multiple errors"), new Error("Multiple erros 2")],
    "Hello"
  );
} catch (error) {
  console.log(error.errors);
}
