# Learning tracker

A static starter for learning React fundamentals, based on the approved design in `design/learning-tracker.png`.

## Run

```sh
npm install
npm run dev
```

Open the local URL printed by Vite. To create a production build, run `npm run build`. To inspect that build locally, run `npm run preview`.

## Stack

React 19, JavaScript with JSX, Tailwind CSS 4, and Vite. No component libraries, icon packages, routing, or external fonts.

## Components

Each component lives in `src/components/ComponentName/ComponentName.jsx`. Icon components live in `src/components/icons/IconName/IconName.jsx`.

- `App`: page composition, the plain heading element, and the initial `data` object.
- `TopicSearch`: title search field.
- `TopicFilters`: the five status filter buttons.
- `TopicList`: the list of three topics.
- `JsxTopic`, `ComponentsTopic`, `PropsTopic`: individual static topic cards.
- `LearningOverview`: total topics and counts for each status.
- `AddTopicForm`: title, note, status, and add button.
- `StatusOptions`: the four shared native select options.
- `icons/`: individual folders for the small inline SVG components.

## Deliberately static

There are no hooks, component props, event handlers, context, stores, or persistence. The `data` object inside `App` is intentionally not connected to the UI yet. The cards and overview contain matching static content.

The three card components deliberately repeat their markup so different topics can appear before the lesson on props. In that lesson, replace them with one `TopicItem` component and pass the data from `App`; then render the list with `map` and stable IDs.

Inputs and dropdowns use native browser behavior. Changing a dropdown does not update the data or overview. Typing in search does not filter topics yet. Filter, edit, delete, and add buttons do not change the application. The add button uses `type="button"` to avoid submitting the static form.

Subsequent lessons can connect props, derive the overview counts, introduce state, implement search and status filters, and add CRUD handlers.

## Layout

Two independent desktop columns keep the search and list on the left and the summary and form on the right. Adding rows to the left column does not push the right column down. On smaller screens the columns stack vertically. All interface text is in English.
