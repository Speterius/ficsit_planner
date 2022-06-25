# Ficsit Planner

A WIP project to create a responsive UI to design factory layouts for the game Satisfactory.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Github Pages is used to deploy the app during its development stage.

## Scripts

In the project directory, you can run:

1. `npm start`

2. `npm run build`

3. `npm run deploy` or `npm run deploy -- -m "Custom commit message"`


## To-do list / features

- add node-based editor:
    - single click pops up a search bar
    - factory buildings can be placed in bulk (mouse scroll to increase # of nodes)
    - factory buildings can be connected in bulk (splitters & mergers simulated)
    - each edge shows a material flow
    - each group of factory buildings can be set to a specific recipe
    - incorrect edges into a recipe input are highlighted with red
    - allow the user to select edge limits (e.g. Mk3 -> 270 parts / min)
    - allow the user to choose a float amount of building (e.g. 3.5 -> 4 buildings where the last one is set to 50%) 

- Each graph in the editor is a blueprint with a fixed I/O bevaiour that can be reused.
    - store the blueprints in client-side storage (cookies or cache)
    - allow the user to download the blueprints and re-use them

- Parse the game's json file to produce recipes and stats.
