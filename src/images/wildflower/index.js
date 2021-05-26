import background from './background.png';
import foreground from './foreground.png';
import mountains0 from './mountains0.png';
import mountains1 from './mountains1.png';
import mountains2 from './mountains2.png';
import clouds0 from './clouds0.png';
import clouds1 from './clouds1.png';

export default {
  width: 1200,
  height: 678,
  images: [
    {layer: background, speed: -1},
    {layer: clouds0, speed: 1},
    {layer: clouds1, speed: 1},
    {layer: mountains0, speed: 2},
    {layer: mountains1, speed: 4},
    {layer: mountains2, speed: 4},
    {layer: foreground, speed: 6},
  ]
};