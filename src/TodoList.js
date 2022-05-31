class TodoList {
    constructor() {
        this.id = 1
        this.items = []
    }

    create(description) {
        const TodoItem = {
            id: this.id++,
            text: description,
            date: new Date().toLocaleDateString(),
            status: 'incomplete'
        }
        this.items.push(TodoItem)

        return TodoItem
    }

    getAll() {
        return this.items
    }

    setComplete(id) {
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].id === id) {
                this.items[i].status = 'complete'
                return this.items[i]
            }
        }
        return "Todo item not found"
    }

    getAllIncomplete() {
        const incompleteItems = []
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].status === 'incomplete') {
                incompleteItems.push(this.items[i])
            }
        }
        return incompleteItems
    }

    getAllComplete() {
        const completeItems = []
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].status === 'complete') {
                completeItems.push(this.items[i])
            }
        }
        return completeItems
    }

    getTodoItemByID(id) {
        const foundItem = this.items.find(item => item.id === id)
        if (foundItem) {
            return foundItem
        }
        return "Todo item not found"
    }

    removeTodoItemByID(id) {
        const foundItem = this.items.find(item => item.id === id)
        if (foundItem) {
            const index = this.items.indexOf(foundItem)
            this.items.splice(index, 1)
            return this.items
        }
        return "Todo item not found"
    }

    getAllTodoItemsByDate(date) {
        const itemsOfTheDay = this.items.filter(item => item.date === date)
        if (itemsOfTheDay) {
            return itemsOfTheDay
        }
        return []
    }
}

module.exports = TodoList
