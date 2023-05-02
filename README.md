[Game](https://github.com/LukaHarambasic/cmpm120-rocket-patrol)

- as the assets shouldn't be transformed by Vite they live in `/public`
- to run this locally you first need to install the depedencies: `npm install`
- to start the game locally use: `npm run dev`
- graphics from: https://github.com/nathanaltice/RocketPatrol

## Points

### 5 Points: 3x5=15

- [x] Track a high score that persists across scenes and display it in the UI (5)
- [] Add your own (copyright-free) background music to the Play scene (please be mindful of the volume) (5)
- [x] Create a new scrolling tile sprite for the background (5)

### 10 Points: 4x10=40

- [] Create 4 new explosion sound effects and randomize which one plays on impact (10)
- [x] Display the time remaining (in seconds) on the screen (10)
- [x] Using a texture atlas, create a new animated sprite for the Spaceship enemies (10)
- [x] Create a new title screen (e.g., new artwork, typography, layout) (10)

### 15 Points: 3x15=45

- [x] Create a new enemy Spaceship type (w/ new artwork) that's smaller, moves faster, and is worth more points (15)
- [x] Implement a new timing/scoring mechanism that adds time to the clock for successful hits (15)
- [] Implement mouse control for player movement and mouse click to fire (15)

## Todos

- [x] Create/Find graphics
  - [x] Rocket -> Beer Tap
  - [x] Ships -> Wiggly empty beer glasses (Weizen)
  - [x] Beer hit animation -> Filling beer glasses (Weizen)
  - [x] Background -> baverian flag pattern
  - [x] Alc free beer
- [] Find music
  - [] Background music - Schlager?
  - [] 4 beer filling sounds
- [x] Adjust layout
  - [x] Add clock
  - [x] Remove border
- [x] Scenes
  - [x] Menu scene
  - [x] Game scene
  - [x] Title scene
  - [x] Highscore scene
- [x] Prefab
  - [x] New enemy (alcohol free beer)
- [x] Logic
  - [x] Add time after enemy got hit (game should also become quicker??)
  - [x] Add mouse control for player movement and shooting
- UI
  - [x] Add sprite to glasses
  - [x] Add fill anitmation to glasses

## Credits

- Beer tap: https://unsplash.com/photos/nY24KlqSBh4
- Beer glas: https://unsplash.com/photos/8AC0YQJ2Fxc
- BretzeL: https://unsplash.com/photos/39cEDqW5_SY

- Full beer: Photo by Engin Akyurt: https://www.pexels.com/photo/beer-filled-mug-on-table-1552630/
- Empty class by Laura Amenda
- Beer tap: Image by https://www.freepik.com/free-photo/still-life-beer-brewing-elements_40474311.htm#query=beer%20tap&position=10&from_view=search&track=robertav1_2_sidr
- Counter top generated by Dreamlike Photoreal 2.0: https://diffusionart.co/
- Beer splash: https://unsplash.com/photos/1MqDCpA-2hU
