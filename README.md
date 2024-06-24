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

2. Initialize the project and install dependencies:

    ```sh
    npm install
    ```

3. Run the optimization script:

    ```sh
    npm run build
    ```

4. Open `index.html` in your browser to see the demo.

## Built With

- [Backbone.js](https://backbonejs.org/) - The JavaScript library used for building MV* applications
- [RequireJS](https://requirejs.org/) - The JavaScript file and module loader
- [r.js](https://requirejs.org/docs/optimization.html) - The optimizer used to compile the JavaScript files for production
