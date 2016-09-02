# Node.js-Boilerplate ![Node.js shield](https://img.shields.io/badge/Node.js-6.5.0-brightgreen.svg?style=flat) ![npm shield](https://img.shields.io/badge/npm-3.10.3-red.svg) ![License](https://img.shields.io/badge/license-MIT-blue.svg)
Minimal boilerplate for Node.js projects.

## Server-side Features
- Node.js + Express server
- Logging via [morgan](https://github.com/expressjs/morgan)
- Gzip compression via [compression](https://github.com/expressjs/compression)
- Static public folder via [serve-static](https://github.com/expressjs/serve-static) (Essentially acts as the "root directory")
- POST request handling via [body-parser](https://github.com/expressjs/body-parser)
- 404 catch-all redirect

## Server-side Quirks/Choices
- Template engine = [Handlebars](https://github.com/ericf/express-handlebars) (This is clearly replaceable)

## src/public Folders
Included in the src folder is a Grunt script that I use in all my projects (with modifications). The script can clearly be adjusted to fit your needs and preferences. The scripts for .js and .scss files creates a build folder at the beginning and deletes it at the end in order to store intermediate files. (This strongly implies that you should not have a folder called build inside the src folder) Specifically, the scripts do the following:
- .js files -- JSHint -> Concatenate all files -> UglifyJS -> Generate Modernizr.min.js in public folder
- .scss (SASS) files -- SASS compile -> Combine media queries -> cssmin -> Generate Modernizr.min.js in public folder
- .{png,jpg,gif,svg} files -- imagemin

## Thanks
[HTML5 Boilerplate](https://html5boilerplate.com/) for the front-end boilerplate code.
[Real Favicon Generator](https://realfavicongenerator.net/) for the favicon generation.
[Metatags.org](http://www.metatags.org/meta_tags_code_generator) for the meta tag generation.

## Contact Me
Email me @ [luu.david.c@gmail.com](mailto:luu.david.c@gmail.com) for suggestions/improvements/help!
