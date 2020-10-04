# Colorbeat
A Patatap clone built with basic HTML, CSS, vanilla JS (along with Howler.js and Paper.js libraries) and some jQuery sprinkled in. 

I built this in order to get more acquainted with jQuery event listeners and to get some practice with Javscript libraries - plus, experimenting with sound and color is just always a great time. 

Fun, noisy, and pretty neat to look at.

[Click here to play](https://connorjaymesmcg.github.io/Colorbeat/ "Colorbeat")

To play:
1) Boot up the Colorbeat application 
2) Press keys A-Z in any order
3) Make cool noises and enjoy the lightshow

The color palette is randomized via 
```javascript
'#'+Math.floor(Math.random()*16777215).toString(16)
```
...so if you want a new set of colors to play with, just refresh the page! Random every time. 
