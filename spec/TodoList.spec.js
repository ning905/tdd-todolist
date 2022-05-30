const TodoList = require("../src/TodoList.js")

describe("TodoList", () => {
  it("creates a todo item", () => {
    // set up
    const todoList = new TodoList()
    const expected = {
      id: 1,
      text: "turn the heating on!",
      status: "incomplete"
    }
    // execute
    const result = todoList.create("turn the heating on!")
    // verify
    expect(result).toEqual(expected)
  })

  it("gets all todo items", () => {
    // set up
    const todoList = new TodoList()
    todoList.create("do laundry")
    todoList.create("make the bed")
    const expected = [
      { id: 1, text: "do laundry", status: "incomplete" },
      { id: 2, text: "make the bed", status: "incomplete" }]
    // execute
    const result = todoList.getAll()
    // verify
    expect(result).toEqual(expected)
  })

  it("sets existing todo item to complete", () => {
    // set up
    const todoList = new TodoList()
    todoList.create("do laundry")
    const expected = { id: 1, text: "do laundry", status: "complete" }
    // execute
    const result = todoList.setComplete(1)
    // verify
    expect(result).toEqual(expected)
  })

  it("sets non-existing todo item to complete", () => {
    // set up
    const todoList = new TodoList()
    todoList.create("do laundry")
    const expected = "Todo item not found"
    // execute
    const result = todoList.setComplete(2)
    // verify
    expect(result).toEqual(expected)
  })

  it("gets all incomplete todo items", () => {
    // set up
    const todoList = new TodoList()
    todoList.create("do laundry")
    todoList.create("make the bed")
    todoList.create("drink coffee")
    todoList.create("code")
    todoList.setComplete(2)
    todoList.setComplete(3)
    const expected = [
      { id: 1, text: "do laundry", status: "incomplete" },
      { id: 4, text: "code", status: "incomplete" }
    ]
    // execute
    const result = todoList.getAllIncomplete()
    // verify
    expect(result).toEqual(expected)
  })

  it("gets all complete todo items", () => {
    // set up
    const todoList = new TodoList()
    todoList.create("do laundry")
    todoList.create("make the bed")
    todoList.create("drink coffee")
    todoList.create("code")
    todoList.setComplete(2)
    todoList.setComplete(3)
    const expected = [
      { id: 2, text: "make the bed", status: "complete" },
      { id: 3, text: "drink coffee", status: "complete" }
    ]
    // execute
    const result = todoList.getAllComplete()
    // verify
    expect(result).toEqual(expected)
  })

  it("gets existing todo item by id", () => {
    // set up
    const todoList = new TodoList()
    todoList.create("do laundry")
    const expected = { id: 1, text: "do laundry", status: "incomplete" }
    // execute
    const result = todoList.getTodoItemByID(1)
    // verify
    expect(result).toEqual(expected)
  })

  it("gets non-existing todo item by id", () => {
    // set up
    const todoList = new TodoList()
    todoList.create("do laundry")
    const expected = "Todo item not found"
    // execute
    const result = todoList.getTodoItemByID(2)
    // verify
    expect(result).toEqual(expected)
  })

  it("removes existing todo item by id", () => {
    // set up
    const todoList = new TodoList()
    todoList.create("do laundry")
    todoList.create("make the bed")
    const expected = [{ id: 1, text: "do laundry", status: "incomplete" }]
    // execute
    const result = todoList.removeTodoItemByID(2)
    // verify
    expect(result).toEqual(expected)
  })

  it("removes non-existing todo item by id", () => {
    // set up
    const todoList = new TodoList()
    todoList.create("do laundry")
    todoList.create("make the bed")
    const expected = "Todo item not found"
    // execute
    const result = todoList.removeTodoItemByID(3)
    // verify
    expect(result).toEqual(expected)
  })
})
