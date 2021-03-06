# Chimes

## Background

This project will be a generative music sequencer, based on the Otomata music generator.  Sounds are generated by blocks that move back and forth across a 9 by 9 grid.  When a block hits a wall, it plays a note based on the position hit, and reverses direction.  When two blocks collide (move to the same grid square at the same time), they both rotate 90% and keep moving.  When two blocks are in adjacent squares, they do not collide but pass through each other.

## Inspiration

- [Otomata][otomata]
- [Shuffle][shuffle]
- [Patatap][patatap]
- [Touch Pianist][touchpianist]

[otomata]: http://www.earslap.com/page/otomata.html?q=4h4t5j7k444c1z3l2i7o631078051q8y
[shuffle]: http://www.shufffle.space/
[patatap]: http://patatap.com/
[touchpianist]: http://touchpianist.com/

This project will be based on Otomata, but with sound animations more similar to Shuffle or Touch Pianist.

## Functionality

Users will be able to:
- Click on a grid square to add a block
- Click on a block to change it's direction by 90%
- Click the play button to start the simulation
- Hear sounds when the blocks hit the walls
- Click a grid square to add a new block while the simulation is running
- Click the stop button
- Reset the grid

In addition, this project will include:
- Sound animations
- A production README

## Design Docs

[Wireframe][wireframe]

[wireframe]: ./wireframe.png

## Architecture and Technologies

- React
- Canvas
- Konva library
- HTML audio elements
- Webpack

This project will be structured with a webpack entry file, an index.html file, and the following scripts:
- block.js - contains the block class, with logic for moving and changing direction on collision
- grid.js - contains logic for adding blocks to the grid

## Implementation Timeline

Phase 1: Create block and grid components with logic for moving blocks

Phase 2: Add user controls in the browser

Phase 3: Add sounds

Phase 4: Add cool animations

## Bonus Features

- Alternative color schemes
- Controls for changing the tempo
- Controls for changing the scale/instrument
- Ability to record compositions
