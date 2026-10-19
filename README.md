# Far Away

A focused, responsive packing-list application built with React. **Far Away** makes trip preparation easy: add essentials, track quantities, check off packed items, organize the list, and see progress at a glance.

## Highlights

- Add packing items with quantities from 1 to 20
- Mark items as packed or unpacked
- Sort items by creation order, name, or packing status
- Remove a single item or clear the entire list with a confirmation prompt
- View live packing progress and completion status
- Use on desktop and mobile layouts
- Navigate core controls with labeled, accessible form inputs

> **Note:** The list lives in React state for the current browser session. Reloading the page restores the starter list; items are not persisted to local storage or a backend.

## Tech stack

- [React](https://react.dev/)
- [Create React App](https://create-react-app.dev/)
- Modern CSS with responsive layout rules

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- npm (included with Node.js)

### Installation

```bash
git clone <your-repository-url>
cd far-away
npm install
```

### Run locally

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The development server reloads automatically as you edit the project.

## Available scripts

| Command | Purpose |
| --- | --- |
| `npm start` | Starts the local development server. |
| `npm test` | Launches the test runner in watch mode. |
| `npm run build` | Creates an optimized production build in `build/`. |
| `npm run eject` | Exposes the Create React App configuration. This cannot be undone. |

## How it works

1. Select the quantity and enter an item description.
2. Choose **Add** to include it on the list.
3. Tick an item when it is packed.
4. Use the sort control to organize the list, or delete items you no longer need.
5. Check the footer for your current packing progress.

## Project structure

```text
far-away/
├── public/                 # HTML template and static assets
├── src/
│   ├── components/
│   │   ├── App.js          # Application state and event handlers
│   │   ├── Form.js         # Add-item form
│   │   ├── Item.js         # Individual packing-list item
│   │   ├── Logo.js         # Application heading
│   │   ├── PackingList.js  # Sortable list and clear action
│   │   └── Stats.js        # Packing-progress summary
│   ├── index.css           # Global and responsive styles
│   └── index.js            # React entry point
├── package.json
└── README.md
```
