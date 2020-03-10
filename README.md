# Toy Tales

You've got a friend in need! Again!
Andy has misplaced of his toys (again) and need your help to organize them.

For this lab, you will not be expected to `fetch` Andy's toy from a database. All the information about Andy's toys can be found in the 'data.js' file, which is being imported into the App component.

Before you start building out the application, the first step that you should take is to draw out your app hierarchy. This will tell you how components can speak to each other as well as where that information should be stored.

After drawing out the app hierarchy, you should hook up the data from the 'data.js' file to your React components. Given your component tree, think about which component should be responsible for the array. After you have put the data in the proper component, your next job is to render the ToyCard component on the page.

After the ToyCard components are on the page, consider building out the functionality for the ToyForm. Using the ideas of controlled form and inverse data-flow, think about how to render a new ToyCard for the toy that you created. If you want to generate unique id's, consider the NPM package [UUID](https://www.npmjs.com/package/uuid), which generates a unique ID for you.

After you have the create functionality built out, consider building out the delete functionality. When you click on the `Donate to Goodwill` button, the ToyCard that you clicked on should be removed from the DOM. Because we don't have a database, when you refresh the page, the deletion will not persist and that is fine.

After that, consider building out the like functionality. Clicking on the button should increase the number of likes on the DOM. Like the delete, there won't be a persistence because there's no fetch. 
