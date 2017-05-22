import landingScene from './scenes/01-landing';
import expositionScene from './scenes/02-exposition';
import pathScene from './scenes/03-path';
import staircaseScene from './scenes/04-staircase';
import caveScene from './scenes/05-cave';
import fieldScene from './scenes/06-field';
import treeScene from './scenes/07-tree';

export default landingScene;

landingScene.nextScene = expositionScene;
expositionScene.nextScene = pathScene;
expositionScene.prevScene = landingScene;
pathScene.nextScene = caveScene;
pathScene.prevScene = expositionScene;
caveScene.nextScene = fieldScene;
caveScene.prevScene = pathScene;
fieldScene.nextScene = treeScene;
fieldScene.prevScene = fieldScene;