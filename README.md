# 3d Thumbstick Controls in Construct 3

This project showcases how to create a simple and effective thumbstick controller for 3D objects in Construct 3.

With 4 events, and some clever setting, the game can set the thumbstick controller, that can be used in any touch-screen device.

## How it works:

The entire system relies on the interaction of 2 different Construct objects:
- The sprite named **thumbstick01**
- The 8 instances of the sprite named **directionMarker**

The **thumbstick01** has the *"Drag and Drop"* behavior and can be moved on the screen by the player.

The 8 **directionMarker** sprites are set in a circle around **thumbstick01** at 45 degrees inclination difference. 

Each **directionMarker** has 2 *Instance Variables:* vx and vy. These variables have 3 possible values: -1, 0, and 1. Each combination indicates the movement in the x and y direction that every **directionMarker** represents.

When the player moves **thumbstick01**, C3 determines which **directionMarker** is closest and uses the vx and vy variables to calculate the correct movement direction for the 3D object **Player3D**:

In the third event, C3 takes the *Instance Variable* vx, multiplies it by the speedPlayer variable, and assigns the result to **Player3D**’s *8Direction* Vector X.
The same process is repeated with vy, producing the value for **Player3D**’s *8Direction* Vector Y.

Together, these two values define the movement direction of the **Player3D** object.


## Changes:
- [x] The `Basic Version` folder includes two builds that focus exclusively on thumbstick functionality, with slopes and other refinements removed. These streamlined versions are designed for easier integration into other games

- [x] Moved all the html files to the `html export files` folder for easier project navigation

- [x] Basic thumbstick functionality

- [x] Added tiled background to highlight 3D object movement

- [x] Improved the rotation of the 3D object reflecting the thumbstick movement

- [x] Added solid objects. This is to showcase the basics of a possible 3D based game using the thumbstick

- [x] Added basic 3D slopes functionalities.
> The initial 3D slopes projects can be found at: https://github.com/hielo777/3DSlopes

- [x] Eliminated the older Player object out of the screen to make it less intrusive

- [x] Re created the exported game files

- [x] Adding basic camera support, allowing the player to change the distance of the camera to the Player3D object, and also to change the altitude of the camera

- [x] Adding a minimum distance and height for the camera controls to avoid weird angles and keep the game playable

## To Do
- [ ] Add second thumbstick functionality. Perhaps to control the camera to orbit the 3D object representing the main character
- [ ] Add comments to the .c3p document to clarify functionality