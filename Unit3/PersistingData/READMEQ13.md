# Enhanced Todo List Application

## Overview
This is a simple and enhanced Todo List web application that allows users to manage their tasks effectively. It includes features like adding tasks, marking them as completed, removing tasks, searching in real-time, and persisting tasks with their completion status using `localStorage`.

---

## Features

1. **Add Tasks**  
   Type a task in the input box and press **Enter** to add it to the list.

2. **Mark Tasks as Completed**  
   Click on a task to toggle its completion status. Completed tasks appear with a strike-through style.

3. **Remove Tasks**  
   Click the **Remove** button next to a task to delete it from the list.

4. **Search Tasks**  
   Use the search bar to filter tasks in real-time. Only tasks that match the search text will be shown.

5. **Persistence with localStorage**  
   All tasks and their completion statuses are saved in the browser's `localStorage`. This means your tasks remain saved even after refreshing or closing the browser.

---

## How to Use

1. Open the `index.html` file in your web browser.
2. Use the input box at the top to add new tasks by typing and pressing **Enter**.
3. Click on any task text to mark it as completed or incomplete.
4. Use the **Remove** button to delete a task.
5. Use the search input to filter tasks as you type.
6. Your tasks will automatically be saved and loaded from localStorage.

---

## Technical Details

- Tasks are stored as an array of objects in `localStorage` with properties:
  - `id` (string): unique identifier for each task.
  - `text` (string): the task description.
  - `completed` (boolean): the completion status.

- The UI updates dynamically to reflect changes in tasks and search filtering.

---

## License

This project is open source and free to use.

---

## Author

Created by [Your Name].

