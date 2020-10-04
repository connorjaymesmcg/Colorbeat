// for(var x = 0; x < 1000; x += 100){
//   for(var y = 0; y < 1000; y += 100) {

//     var myCircle = new Path.Circle(new Point(x, y), 10);
//     myCircle.fillColor = 'purple';
//   }
// }

// function onKeyDown(e) {
//   new Path.Circle(new Pointer(100, 100), 10).fillColor = 'yellow';
// }

// var maxPoint = new PointerEvent(view.size.width, view.size.height)

// var sound = new Howl({
//   src: ['sound.mp3']
// });

// sound.play();

var keyData = {
  a: {
    color: '#' + (function co(lor){   return (lor +=
      [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)])
      && (lor.length == 6) ?  lor : co(lor); })(''),
    sound: new Howl({
      src: ["./sounds/bubbles.mp3"]
    })
  },
  s: {
    color: 'green',
    sound: new Howl({
      src: ["./sounds/clay.mp3"]
    })
  },
  d: {
    color: 'yellow',
    sound: new Howl({
      src: ["./sounds/confetti.mp3"]
    })
  },
  f: {
    color: 'yellow',
    sound: new Howl({
      src: ["./sounds/corona.mp3"]
    })
  },
  g: {
    color: 'yellow',
    sound: new Howl({
      src: ["./sounds/dotted-spiral.mp3"]
    })
  },
  h: {
    color: 'yellow',
    sound: new Howl({
      src: ["./sounds/flash-1.mp3"]
    })
  },
  j: {
    color: 'yellow',
    sound: new Howl({
      src: ["./sounds/flash-2.mp3"]
    })
  },
  k: {
    color: 'yellow',
    sound: new Howl({
      src: ["./sounds/flash-3.mp3"]
    })
  },
  l: {
    color: 'yellow',
    sound: new Howl({
      src: ["./sounds/glimmer.mp3"]
    })
  },
  z: {
    color: 'yellow',
    sound: new Howl({
      src: ["./sounds/moon.mp3"]
    })
  },
  x: {
    color: 'yellow',
    sound: new Howl({
      src: ["./sounds/pinwheel.mp3"]
    })
  },
  c: {
    color: 'yellow',
    sound: new Howl({
      src: ["./sounds/piston-1.mp3"]
    })
  },
  v: {
    color: 'yellow',
    sound: new Howl({
      src: ["./sounds/piston-2.mp3"]
    })
  },
  b: {
    color: 'yellow',
    sound: new Howl({
      src: ["./sounds/piston-3.mp3"]
    })
  },
  n: {
    color: 'yellow',
    sound: new Howl({
      src: ["./sounds/prism-1.mp3"]
    })
  },
  m: {
    color: 'yellow',
    sound: new Howl({
      src: ["./sounds/prism-2.mp3"]
    })
  },
  q: {
    color: 'yellow',
    sound: new Howl({
      src: ["./sounds/prism-3.mp3"]
    })
  },
  w: {
    color: 'yellow',
    sound: new Howl({
      src: ["./sounds/splits.mp3"]
    })
  },
  e: {
    color: 'yellow',
    sound: new Howl({
      src: ["./sounds/squiggle.mp3"]
    })
  },
  r: {
    color: 'yellow',
    sound: new Howl({
      src: ["./sounds/strike.mp3"]
    })
  },
  t: {
    color: 'yellow',
    sound: new Howl({
      src: ["./sounds/suspension.mp3"]
    })
  },
  y: {
    color: 'yellow',
    sound: new Howl({
      src: ["./sounds/timer.mp3"]
    })
  },
  u: {
    color: 'yellow',
    sound: new Howl({
      src: ["./sounds/ufo.mp3"]
    })
  },
  i: {
    color: 'yellow',
    sound: new Howl({
      src: ["./sounds/veil.mp3"]
    })
  },
  o: {
    color: 'yellow',
    sound: new Howl({
      src: ["./sounds/wipe.mp3"]
    })
  },
  p: {
    color: 'yellow',
    sound: new Howl({
      src: ["./sounds/zig-zag.mp3"]
    })
  }
}


  var circles = [];

function onKeyDown(e) {
  if(keyData[e.key]) {
  var maxPoint = new Point(view.size.width, view.size.height)
  var randomPoint = Point.random();
  var point = maxPoint * randomPoint;
  var newCircle = new Path.Circle(point, 200);
  newCircle.fillColor = keyData[event.key].color
  keyData[e.key].sound.play();
  circles.push(newCircle)
  }
}
function onFrame(e) {
  for(var i = 0; i < circles.length; i++) {
    circles[i].fillColor.hue += 1
    circles[i].scale(.9)
  }
}
