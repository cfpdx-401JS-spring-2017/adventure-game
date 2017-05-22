import expositionImg from '../img/villain.jpg';
import landingScene from './01-landing';
import pathScene from './03-path';

export default {
  backgroundUrl: expositionImg,
  headerText: 'Your plan to throw a tea party has been thrown off course...',
  bodyText: 'It\'s the weekend! You were planning on throwing a fun tea party for all of your friends, when suddenly a wizard comes in and steals all of your tea! Fight the wizard and retrieve your tea so that your tea party can move on. Make sure you find it all before you run out of caffeine and get so sleepy that you need to take a nap. Explore your village and use weapons to fight the wizard and drink more little teas to keep yourself caffeinated.',
  buttonText: 'Ready? Let\'s Play'
};

// create scenes module that 'keys' or wires up the sequencing of the different scenes to avoid circular referencing which breaks the back functionality