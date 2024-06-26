# Backbone and RequireJS Demo

This project serves as a template and demonstration of using Backbone.js with RequireJS to build a modular and maintainable JavaScript application. It includes a basic setup with a single router and a view, showcasing the capabilities of these libraries in structuring a web application. Additionally, it demonstrates the use of r.js for optimizing and compiling JavaScript files for production.

## Description

This repository is intended to provide a starting point for developers interested in using Backbone.js and RequireJS together. Backbone.js provides the structure and models necessary for building dynamic web applications, while RequireJS offers a modular approach to managing JavaScript dependencies. This demo highlights:

- The basic setup and configuration of Backbone.js and RequireJS.
- An example of organizing code into models, views, routers, and main application files.
- The use of r.js to compile and optimize JavaScript files for production.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have the following software installed:

- [Node.js](https://nodejs.org/)
- [Git](https://git-scm.com/)

### Installing

1. Clone the repository:

    ```sh
    git clone https://github.com/RussellAbraham/backbone-requirejs-demo.git
    cd backbone-requirejs-demo
    ```

2. To install node_modules - copies have been included in src/vendor/ to simplify the build:

    ```sh
    npm install
    ```

3. Test any changes made to the unbuilt application by running the development server

    ```sh
    npm start
    ```
    A taskrunner is included to restart the server when changes are made, the browser will still need to be refreshed for changes to display.

    ```sh
    npm run dev
    ```

4. Run the optimization script:

    ```sh
    npm run build
    ```

5. Open `index.html` in your browser to see the demo. After running build, a server should no longer be required to to load templates with `requirejs-text`

## Built With

- [Backbone.js](https://backbonejs.org/) - The JavaScript library used for building MV* applications
- [RequireJS](https://requirejs.org/) - The JavaScript file and module loader
- [r.js](https://requirejs.org/docs/optimization.html) - The optimizer used to compile the JavaScript files for production

### Notes

A note about `Underscore.js`. The version installed with npm will not be exposed to the global environment when included in `config.js`. 

You will have to define underscore as a dependency in all the modules you need to use the library in. This may have a better memory footprint. 

```javascript
define(['underscore'], function(_) {
    var tasks = [
        { id: 1, title: 'Task 1', completed: false, priority: 'high', dueDate: '2024-06-25' },
        { id: 2, title: 'Task 2', completed: true, priority: 'low', dueDate: '2024-06-20' },
        { id: 3, title: 'Task 3', completed: false, priority: 'medium', dueDate: '2024-06-22' },
        { id: 4, title: 'Task 4', completed: true, priority: 'high', dueDate: '2024-06-21' },
        { id: 5, title: 'Task 5', completed: false, priority: 'low', dueDate: '2024-06-23' }
    ];

    var defaultTask = { completed: false, priority: 'medium' };

    var filterIncompleteTasks = _.partial(_.where, _, { completed: false });
    var isTaskEqual = _.partial(_.isEqual, defaultTask);
    var prioritizeTasks = _.compose(_.sortBy, _.property('dueDate'));
    var capitalizeTitle = function(task) { return _.extend(task, { title: task.title.toUpperCase() }); };
    
    var memoizedCount = _.memoize(function(tasks) {
        return _.size(tasks);
    });

    var result = _.chain(tasks)
        .defaults(defaultTask)
        .filter(filterIncompleteTasks)
        .map(capitalizeTitle)
        .sortBy('dueDate')
        .groupBy('priority')
        .mapObject(function(tasks, priority) {
            return {
                priority: priority,
                tasks: tasks,
                count: memoizedCount(tasks)
            };
        })
        .pairs()
        .sortBy(0)
        .value();

    var taskTemplate = _.template(`
        <h2>Incomplete Tasks by Priority</h2>
        <% _.each(result, function(group) { %>
            <h3>Priority: <%= group[1].priority %> (<%= group[1].count %>)</h3>
            <ul class="list-group">
                <% _.each(group[1].tasks, function(task) { %>
                    <li class="list-group-item">
                        <%= task.title %> - Due: <%= task.dueDate %>
                    </li>
                <% }); %>
            </ul>
        <% }); %>
    `);

    var renderedHtml = taskTemplate({ result: result });
    document.getElementById('task-list').innerHTML = renderedHtml;
});
```
For ease, inside of src/vendor/underscore is a different version of underscore that will be scoped within the global environemt when add to the `congig.js` script. 

### Todo

- Add support for css modules that `r.js` can bundle together with the application
- Setup task runner to restart the dev server when changes are made
- Include an icon pack or api/mapping of html/css entities