import background from './background.png';
import foreground from './foreground.png';
import mountains0 from './mountains0.png';
import mountains1 from './mountains1.png';
import mountains2 from './mountains2.png';
import clouds0 from './clouds0.png';
import clouds1 from './clouds1.png';

export default [
    {layer: background, speed: -5},
    {layer: foreground, speed: 5},
    {layer: clouds0, speed: -1},
    {layer: clouds1, speed: 1},
    {layer: mountains0, speed: 8},
    {layer: mountains1, speed: -8},
    {layer: mountains2, speed: 6},
  ];