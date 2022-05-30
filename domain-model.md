// Add your domain model below

Method:totalCost(basket)
Input:basket(@Item[])
Data:Item(@Object), properties: name(@String), price(@Number), quantity(@Number))
Scenario:If there are items
Output:@Number


class TodoList
- properties
  - nextId: Int
  - items: Array of TodoItem

- method: create(description)
  - Input: description(@string)
  - Output: TodoItem(@object), properties: id(@number), description(@string), status(@string, default: 'incomplete')

- method: getAll()
  - Input: empty
  - Output: items(@TodoItem[])

- method: setComplete(id)
  - Input: id(@number)
  - Scenario 1: If TodoItem with the given id exists
  - Output 1: TodoItem(@object), properties: id(@number), description(@string), status(@string, 'complete')
  - Scenario 2: If TodoItem with the given id does not exist
  - Output: (@string, "Todo item not found")

- method: getAllIncomplete()
  - Input: empty
  - Output: incompleteItems(@TodoItem[])

- method: getAllComplete()
  - Input: empty
  - Output: completeItems(@TodoItem[])

- method: getTodoItemByID(id)
  - Input: id(@number)
  - Scenario 1: If TodoItem with the given id exists
  - Output 1: TodoItem(@object), properties: id(@number), description(@string), status(@string, 'complete')
  - Scenario 2: If TodoItem with the given id does not exist
  - Output: (@string, "Todo item not found")

- method: removeTodoItemByID(id)
  - Input: id(@number)
  - Scenario 1: If TodoItem with the given id exists
  - Output 1: items(@TodoItem[])
  - Scenario 2: If TodoItem with the given id does not exist
  - Output: (@string, "Todo item not found")
