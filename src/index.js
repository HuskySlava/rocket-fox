import './styles.scss';
import { initCanvas } from './js/init';

const GAME_ROOT = document.getElementById('rocket-fox');
const canvas = document.createElement('canvas');
GAME_ROOT.after(canvas);

initCanvas(canvas);
