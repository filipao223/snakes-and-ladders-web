# SnakesAndLaddersWeb

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Details
Some details about the implementation:
 - Board component: 
        The board component is responsible for the drawing of the board and its pieces, to represent the players I draw a circle using embedded SVG elements in the component, chaning the coordinates according to the positions of each player we receive from the backend.
 - Player List component:
        This component is responsible for representing the player names and their current positions.
 - Roll component:
        This component is responsible for calling the backend API using two buttons, new game and roll dice.
 - Win Condition component:
        This component is responsible for showing which player won the game by checking a message queue, which will be populated if any of the players has reached position 100.

Issues yet to be resolved:
    - Player names and count is hardcoded, we could have a new component with Input fields to save the player names
    - Currently, player 1 always moves twice on the first roll.
    - The pieces on the board sometimes appear in the wrong position
    - There's a lack of feedback on the roll count