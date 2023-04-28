[Game](https://github.com/LukaHarambasic/cmpm120-rocket-patrol)

- as the assets shouldn't be transformed by Vite they live in `/public`
- to run this locally you first need to install the depedencies: `npm install`
- to start the game locally use: `npm run dev`
- graphics from: https://github.com/nathanaltice/RocketPatrol

## Points

### 5 Points: 3x5=15

- [] Track a high score that persists across scenes and display it in the UI (5)
- [] Add your own (copyright-free) background music to the Play scene (please be mindful of the volume) (5)
- [] Create a new scrolling tile sprite for the background (5)

### 10 Points: 4x10=40

- [] Create 4 new explosion sound effects and randomize which one plays on impact (10)
- [] Display the time remaining (in seconds) on the screen (10)
- [] Using a texture atlas, create a new animated sprite for the Spaceship enemies (10)
- [] Create a new title screen (e.g., new artwork, typography, layout) (10)

### 15 Points: 3x15=45

- [] Create a new enemy Spaceship type (w/ new artwork) that's smaller, moves faster, and is worth more points (15)
- [] Implement a new timing/scoring mechanism that adds time to the clock for successful hits (15)
- [] Implement mouse control for player movement and mouse click to fire (15)

## Todos

- [] Create/Find graphics
  - [x] Rocket -> Beer Tap
  - [x] Ships -> Wiggly empty beer glasses (Weizen)
  - [x] Beer hit animation -> Filling beer glasses (Weizen)
  - [x] Background -> baverian flag pattern
  - [] Alc free beer
- [] Find music
  - [] Background music - Schlager?
  - [] 4 beer filling sounds
- [] Adjust layout
  - [] Add clock
  - [x] Remove border
- [] Scenes
  - [] Disclaimer scene
  - [] Title scene
  - [] Highscore scene
- [] Prefab
  - [] New enemy (alcohol free beer)
- [] Logic
  - [] Add time after enemy got hit (game should also become quicker??)
  - [] Add mouse control for player movement and shooting
- UI
  - Add sprite to glasses
  - Add fill anitmation to glasses

## Credits

- Beer tap https://unsplash.com/photos/nY24KlqSBh4
- Beer glas https://unsplash.com/photos/8AC0YQJ2Fxc

- Full beer: Photo by Engin Akyurt: https://www.pexels.com/photo/beer-filled-mug-on-table-1552630/
- Empty class by Laura Amenda
- Beer tap: Image by https://www.freepik.com/free-photo/still-life-beer-brewing-elements_40474311.htm#query=beer%20tap&position=10&from_view=search&track=robertav1_2_sidr
- Counter top generated by Dreamlike Photoreal 2.0: https://diffusionart.co/
- Beer splash: https://unsplash.com/photos/1MqDCpA-2hU
