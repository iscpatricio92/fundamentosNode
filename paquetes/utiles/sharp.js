const sharp = require('sharp')
sharp('image.png')
.resize(80)
.toFile('resized.png')