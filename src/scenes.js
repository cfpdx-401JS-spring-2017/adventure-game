import landingScene from './scenes/01-landing';
import expositionScene from './scenes/02-exposition';
import pathScene from './scenes/03-path';
import staircaseScene from './scenes/04-staircase';
import caveScene from './scenes/05-cave';
import fieldScene from './scenes/06-field';
import treeScene from './scenes/07-tree';
import battleScene from './scenes/08-villain-battle';
import victoryScene from './scenes/victory';
import napScene from './scenes/naptime';

landingScene.nextScene = expositionScene;
expositionScene.nextScene = pathScene;
expositionScene.prevScene = landingScene;
pathScene.nextScene = staircaseScene;
pathScene.nextScene2 = fieldScene;
pathScene.prevScene = expositionScene;

staircaseScene.nextScene = caveScene;
staircaseScene.prevScene = pathScene;
caveScene.prevScene = staircaseScene;

fieldScene.nextScene = treeScene;
fieldScene.prevScene = pathScene;

treeScene.nextScene = battleScene;
treeScene.prevScene = fieldScene;

battleScene.prevScene = treeScene;
battleScene.nextScene = victoryScene;

napScene.nextScene = landingScene;
victoryScene.nextScene = landingScene;

export default landingScene;
