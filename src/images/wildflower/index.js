import background from './background.png';
import foreground0 from './foreground0.png';
import foreground1 from './foreground1.png';
import foreground2 from './foreground2.png';
import mountains0 from './mountains0.png';
import mountains1 from './mountains1.png';
import mountains2 from './mountains2.png';
import clouds0 from './clouds0.png';
import clouds1 from './clouds1.png';
import clouds2 from './clouds2.png';
import clouds3 from './clouds3.png';

export default {
  width: 1200,
  height: 678,
  images: [
    {layer: background, speed: -1},
    {layer: clouds0, speed: 1},
    {layer: clouds1, speed: 1},
    {layer: clouds2, speed: 2},
    {layer: clouds3, speed: 3},
    {layer: mountains0, speed: 2},
    {layer: mountains1, speed: 4},
    {layer: mountains2, speed: 4},
    {layer: foreground0, speed: 6},
    {layer: foreground1, speed: 5},
    {layer: foreground2, speed: 6},
  ]
};