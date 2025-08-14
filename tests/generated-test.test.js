```javascript
import { test, expect } from '@jest/globals'

describe('script.js', () => {
    beforeEach(() => {
        // Reset the DOM state before each test
        document.body.innerHTML = `<div><form class="add"></form><ul class="tasks"></ul><input type="submit" value="Clear All" name="clear"></div><form class="search"><input type="text" name="task"></form>`
    })

    it('Empty Input: Empty input triggers no addition and maintains counter', () => {
        const addForm = document.querySelector(".add")
        const tasks = document.querySelector(".tasks")
        const message = document.querySelector(".message p")

        expect(tasks.children.length).toBe(0)
        expect(message.textContent).toBe('You have 0 pending tasks')

        // Submit the form with an empty input field
        addEventListeners(addTaskEvent, submitEvent)
        submitEvent.preventDefault()

        expect(tasks.children.length).toBe(0)
        expect(message.textContent).toBe('You have 0 pending tasks')
    })
})

// Helper functions to simulate events for testing
const addTaskEvent = () => {}
const submitEvent = () => {}
```