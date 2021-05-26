import background from './background.png';
import branch0 from './branch-0.png';
import branch1 from './branch-1.png';
import branch2 from './branch-2.png';
import branch3 from './branch-3.png';

export default {
  width: 1650,
  height: 1100,
  images: [
    {layer: background, speed: -1},
    {layer: branch0, speed: 1},
    {layer: branch1, speed: 2},
    {layer: branch2, speed: 3},
    {layer: branch3, speed: 4}
  ]
};