# Far Away

Far Away is a simple, responsive packing-list app for organizing the items you
need for a trip. Add items with quantities, keep track of what is packed, and
see your packing progress at a glance.

## Features

- Add an item with a quantity from 1 to 20
- Mark items as packed or unpacked
- Sort the list by entry order, item description, or packed status
- Delete individual items or clear the entire list
- View a summary of packed items and overall progress
- Use the app on desktop or mobile screens

## Getting started

### Requirements

- [Node.js](https://nodejs.org/) and npm

### Install and run

```bash
npm install
npm start
```

The development server opens the app at [http://localhost:3000](http://localhost:3000).

## Available scripts

| Command         | Description                                             |
| --------------- | ------------------------------------------------------- |
| `npm start`     | Start the development server                            |
| `npm test`      | Run the test suite in watch mode                        |
| `npm run build` | Create an optimized production build in `build/`        |
| `npm run eject` | Eject the Create React App configuration (irreversible) |

## How to use

1. Choose a quantity and enter an item description.
2. Select **Add** to put it on the packing list.
3. Check an item when it is packed. Use the sort menu to reorganize the list.
4. Delete individual entries or choose **Clear list** to start over.

The list is held in the app's current session and is not saved between page
reloads.

## Built with

- React
- Create React App (`react-scripts`)
- CSS

## Project structure

```text
src/
  App.js       # Packing-list UI and interactions
  index.css    # App styles and responsive layout
  index.js     # React entry point
public/        # Static assets and HTML template
```
