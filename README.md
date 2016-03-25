# Ninteen Thirty-Four

UniCamp's WordPress theme

## Getting started

### Full install

Make sure you have Docker and Docker Compose installed. Simply run:

    docker-compose up

Then go to your http://dockerhost:8080, create an admin user, then enable the theme "Ninteen Thirty-Four".

### Already have wordpress

Put this directory in your `wp-content/themes/` and enable the theme "Ninteen Thirty-Four".

## Development
### Installation

1. Install Node/NPM
1. Run npm install

### Precompiling CSS
In this project, only CSS is precompiled. This is for a few reasons:

* To use SASS (with SCSS) syntax
* To use autoprefixer (so we don't have to worry about any browser prefixe)
* To minify (for performance)

You will only need to precopile if you make CSS changes:

* To **build once** run `npm run-script build`
* To **watch files** run `npm run-script watch`

## FAQ
### Why are you using a custom WordPress image?
The custom image only has one change — it disables PHP's cache. Since this is
just a development image, a cache tends to get in the way.
