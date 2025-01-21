// function myBind(func, ctx) {
//   return function() {
//     return func.apply(ctx);
//   }
// }


// Improved
function myBind(func, ctx) {
  return function() {
    return func.apply(ctx);
  }
}