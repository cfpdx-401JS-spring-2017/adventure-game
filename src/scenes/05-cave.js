import caveImg from '../img/cave.jpg';
import staircaseScene from './04-staircase';

function foundTea() {
  alert('You found a Taiwanese Oolong!');
}

export default {
  backgroundUrl: caveImg,
  callback: foundTea,
  headerText: 'The Cave',
  bodyText: 'At the bottom of the stairs lies a mysterious and deep cave; you cannot enter, but there is just enough space for you to reach inside. You see something at the bottom of the small crevasse.',
  buttonText: 'Peer into Cave',
  items: []
};