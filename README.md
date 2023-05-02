# Beer Patrol

[Game](https://github.com/LukaHarambasic/cmpm120-rocket-patrol)

## Points

### 5 Points: 3x5=15

- [x] Track a high score that persists across scenes and display it in the UI (5)
- [x] Add your own (copyright-free) background music to the Play scene (please be mindful of the volume) (5)
- [x] Create a new scrolling tile sprite for the background (5)

### 10 Points: 4x10=40

- [x] Create 4 new explosion sound effects and randomize which one plays on impact (10)
- [x] Display the time remaining (in seconds) on the screen (10)
- [x] Using a texture atlas, create a new animated sprite for the Spaceship enemies (10)
- [x] Create a new title screen (e.g., new artwork, typography, layout) (10)

### 15 Points: 3x15=45

- [x] Create a new enemy Spaceship type (w/ new artwork) that's smaller, moves faster, and is worth more points (15)
- [x] Implement a new timing/scoring mechanism that adds time to the clock for successful hits (15)
- [x] Implement mouse control for player movement and mouse click to fire (15)

## Todos

- [x] Create/Find graphics
  - [x] Rocket -> Beer Tap
  - [x] Ships -> Wiggly empty beer glasses (Weizen)
  - [x] Beer hit animation -> Filling beer glasses (Weizen)
  - [x] Background -> baverian flag pattern
  - [x] Alc free beer
- [x] Find music
  - [x] Background music - Schlager?
  - [x] 4 beer filling sounds
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
- [x] UI
  - [x] Add sprite to glasses
  - [x] Add fill anitmation to glasses

## Credits

Graphics

- Beer tap: https://unsplash.com/photos/nY24KlqSBh4
- Beer glas: https://unsplash.com/photos/8AC0YQJ2Fxc
- Empty beer glas: Laura A.
- Bretzel: https://unsplash.com/photos/39cEDqW5_SY

Sounds

- Drinking sounds
  - https://pixabay.com/sound-effects/beerpour-91033/
  - https://pixabay.com/sound-effects/water-filled-cup-9901/
  - https://pixabay.com/sound-effects/drink-sip-and-swallow-6974/
  - https://pixabay.com/sound-effects/heavy-swallowwav-14682/
- Background
  - https://www.chosic.com/download-audio/27248/

## Development

- As the assets shouldn't be transformed by Vite they live in `/public`
- To run this locally you first need to install the depedencies: `npm install`
- To start the game locally use: `npm run dev`
