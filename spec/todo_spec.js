
xdescribe('a todo', function() {
  var todo;
  jasmine.getFixtures().fixturesPath = '/base/spec/fixtures';


  beforeEach(function() {
    appendLoadFixtures('todo_view.html')
    todo = new app.Todo()
    app.todos.localStorage = new Backbone.LocalStorage('test-todos-backbone')

    var a = new app.Todo({'title': 'Test1', order:1})
    var b = new app.Todo({'title': 'Test2', completed: true, order: 2})
    var c = new app.Todo({'title': 'Test3', completed: true, order: 3})

    app.todos.add([a, b, c])
    a.save()
    b.save();
    c.save();
    app.todos.reset();

  });

  afterEach(function() {
   localStorage.removeItem("test-todos-backbone");
  })

  xit('returns a list of completed values', function() {
    app.todos.fetch();
    var completed = app.todos.completed()
    expect(completed.length).toBe(2)
  })

  xit('returns a list of remaining items to complete', function() {
    app.todos.fetch();
    var remaining = app.todos.remaining();
    expect(remaining.length).toBe(1);

  })

  xit('returns the next Order', function() {
    app.todos.fetch();
    expect(app.todos.nextOrder()).toBe(4)
  })



})