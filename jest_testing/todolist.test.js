const Todo = require('./todo');
const TodoList = require('./todolist');

describe('TodoList', () => {
  let todo1;
  let todo2;
  let todo3;
  let list;

  beforeEach(() => {
    todo1 = new Todo('Buy milk');
    todo2 = new Todo('Clean room');
    todo3 = new Todo('Go to the gym');

    list = new TodoList("Today's Todos");
    list.add(todo1);
    list.add(todo2);
    list.add(todo3);
    console.log(list)
  });

  // your tests go here
  test(`todo list has a size of 3`, () => {
    expect(list.size()).toBe(3);
  });

  test('calling toArray returns the list in array form', () => {
    expect(list.toArray()).toEqual([todo1, todo2, todo3]);
  });

  test('calling first returns the first item from the list', () => {
    expect(list.first()).toEqual(todo1);
  });

  test('calling last returns the last item from the list', () => {
    expect(list.last()).toEqual(todo3);
  });

  test('calling shift removes and returns the first item from the list', () => {
    expect(list.shift()).toEqual(todo1);
    expect(list.size()).toBe(2);
    expect(list.toArray()).toEqual([todo2, todo3]);
  });

  test('calling pop removes and returns the last item from the list', () => {
    expect(list.pop()).toEqual(todo3);
    expect(list.size()).toBe(2);
    expect(list.toArray()).toEqual([todo1, todo2]);
  });

  test('calling isDone return false if not all list items are done', () => {
    expect(list.isDone()).toBe(false);
  });

  test('calling add when attempting to add an item that isnt a Todo object results in a TypeError', () => {
    expect(() => list.add('take a shower')).toThrow(TypeError)
  });

  test('calling itemAt if we secify an index with no element will raise a ReferenceError', () => {
    expect(() => list.itemAt(3)).toThrow(ReferenceError)
  });

  test('calling markDoneAt marks the item done at a given index', () => {
    expect(() => list.markDoneAt(3)).toThrow(ReferenceError);

    list.markDoneAt(1);
    expect(todo1.isDone()).toBe(false);
    expect(todo2.isDone()).toBe(true);
    expect(todo3.isDone()).toBe(false);
  });

  test('calling markUndoneAt marks the item undone (false) at a given index', () => {
    expect(() => list.markUndoneAt(3)).toThrow(ReferenceError);
    
    list.markUndoneAt(1);
    expect(todo1.isDone()).toBe(false);
  });

  test(`calling markAllDone marks all items done`, () => {
    
    list.markAllDone();

    expect(todo1.isDone()).toBe(true);
    expect(todo2.isDone()).toBe(true);
    expect(todo3.isDone()).toBe(true);
  });

  test(`removes list item at given index`, () => {
    expect(() => list.removeAt(3)).toThrow(ReferenceError);
    expect(list.removeAt(2)).toEqual([todo3]);
    expect(list.toArray()).toEqual([todo1, todo2]);
  })

});