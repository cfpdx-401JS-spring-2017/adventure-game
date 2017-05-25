# Tea Party 2k17
## An Adventure Game

You're hosting a fun tea with your friends, who you haven't seen in a long time. Suddenly, an evil guy stole all of your tea! 

Workflow:
- Landing Page w/ enter name and [START]
  * Nice photo of someone drinking tea or nice table set for tea
- Opening Screen: Friendly scene with tea; changed to the villian with some text: "I STOLE YOUR TEA!"
- 2nd Opening Screen: Collect three teas, state the goal of the game.
- Game Map:
  * Five Scenes: Character can explore from scene to scene.
  * Fight with Villian
- First Game Screen:
  * Visual idicator of 'Teas Recovered'

Components:
User:
  - Name
  - Health/Caffeinated (100/100)
  - Tea

Scenes: 

Features:
- Collect good and rare tea to complete the game
- Villian: Evil guy from Big Trouble in Little China
- Start with no tea, villian stole it all
- Interaction: Battle or trade
  - What is reward? Do you get weapons? What are your choices?
- 5 Teas to Collect
- You can be damaged in battle, and also rated on how many teas you find/win.
- BEST:
   - You collect all of the tea
   - You get the winning screen where you get tea with your friends
   - Gold teapot!
- WORST:
   - You die :(
   - 

Requirements:
- We have _at least_ three areas that the player can move between. 
- Have at least one item that the player can interact with.
- Monsters and good/evil tea traders are available for the player to defeat or interact with.
- You need to provide ways for user to specify what they want to do (button, input, etc) 
- If it makes sense, persist the data in localStorage to survive a browser refresh
- You haven't yet learned how to use things like a router or some of the higher level state management techniques available in React. Just use what you know plus JavaScript know-how to orchestrate changes through the game.