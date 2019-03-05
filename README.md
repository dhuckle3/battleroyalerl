# Battle Royale RL

## The game world map
    A single static map with the a couple of features/areas such as a village, forest, open field, farms, possiby a wizards tower.

## The mechanics of the game:
    A bunch of items and equipement sholud spawn on the map in random locations
    Players 'drop' into the world in a arbitrary locations.

## Enclosure algorithm:
    if there is no current circle:
        put the circle somewhere near the center of the map, with a radius of most of the map.

    start countdown
        while countdown > 0;

## Other things:
    A map view which shows the current circle

Tiles:
    town:
        Buildings
            Walls       |
            Doors       +
            Tables      T
            Chairs      h
            flooring    .
    farms
        Grass/Field     ,
        dirt road       =
    forest:
        Forest floor (e.g. pine needles, dirt, leaves)
        Tree - blocks line of sight
        Fallen Trees - slows movement
    
    Bush - blocks line of sight, moving through makes noise, hides player
    Cobblestone - faster movement speed

# The UI

## a mini map
    Randomly decreasing circles in the map
        draw a warning circle around the map Slowly shrink it to it
        every x turns, create a new warning circle

        Everywhere, 7, 13, 19, 25, 31, bigger...

Online Tools:
    xkcd rgb estimates  https://xkcd.com/color/rgb/
    hex <-> rgb         https://www.webfx.com/web-design/hex-to-rgb/
