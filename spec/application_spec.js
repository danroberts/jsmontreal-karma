describe('The application', function() {

  jasmine.getFixtures().fixturesPath = '/base/spec/fixtures';

  beforeEach(function() {
    appendLoadFixtures('todo_view.html')

    app.todos.localStorage = new Backbone.LocalStorage('test-todos-backbone')

    var a = new app.Todo({'title': 'Test1', completed: false, order:1})
    var b = new app.Todo({'title': 'Test2', completed: true, order: 2})
    var c = new app.Todo({'title': 'Test3', completed: true, order: 3})

    app.todos.add([a, b, c])
    a.save()
    b.save();
    c.save();

    app.todos.reset()

  })

  afterEach(function() {
   localStorage.removeItem("test-todos-backbone");
  })

  it('loads the saved todos', function() {
    app.todos.fetch()
    expect(app.todos.length).toBe(3)
  })


  it('adds them to the stage', function() {
    expect($("#todoapp").find('li.completed').length).toBe(2)
    expect($("#todoapp").find('li').length).toBe(3)
  })

  it('adds a new item to the list when it is created', function() {
    app.todos.create({title: "Newly Created",
                      order: app.todos.nextOrder(),
                      completed: false
    })

    expect($("#todoapp").find('li').length).toBe(4)

  })

  it('clears the completed todos', function() {
    app.todos.fetch()
    app.appView.clearCompleted()
    expect($("#todoapp").find('li.completed').length).toBe(0)
  })




})