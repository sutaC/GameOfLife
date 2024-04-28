# Game of Life

A simple implementation of [Conway's Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life).

## Technologies

-   JavaScript
-   JSDoc

## How to start?

You only need to serve static files

## Documentation

Documentation is located in [DOCS.md](./DOCS.md) file in root directory of a project.

It is generated with [jsdoc-to-markdown](https://github.com/jsdoc2md/jsdoc-to-markdown) package.

For generating documentation uou can run [document](./document) shell comand if running linux with bash.

Alternativelym, command for generating documentation is:

```
    jsdoc2md ./src/**/*.js > DOCS.md
```

(Make sure you are not using PowerShell with this command, becouse it causes encoding issues.)
