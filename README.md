# 💰 Expense Tracker

A simple browser app to record your daily expenses, sort them into categories, and see your running total. Data is saved in the browser with `localStorage`, so your expenses are still there after a page refresh.

## Features

- Add an expense with a name, amount and category (Food, Rent, Utilities, Entertainment, Others)
- Edit or delete any expense
- Running total updates automatically
- Data persists between visits using `localStorage`
- Responsive layout with Bootstrap

## Tech stack

HTML · CSS · JavaScript (ES6, DOM API) · Bootstrap 4 · Web Storage API

## Run it locally

```bash
git clone https://github.com/Himu946/Expense-Tracker.git
cd Expense-Tracker/localStorage/expese_tracker
# open index.html in your browser
```

No build step or server is needed.

## Project structure

```
localStorage/expese_tracker/
├── index.html   # layout and form
├── index.css    # styles
└── index.js     # add / edit / delete logic and localStorage sync
```

## What I learned

- Manipulating the DOM and handling form events
- Event delegation for buttons inside a dynamic list
- Saving and loading state with `localStorage` and JSON
