const base = {
  src: "./assets",
  dist: "./dist",
};

module.exports = {
  base: {
    src: base.src,
    dist: base.dist,
  },

  css: {
    src: {
      static: `${base.src}/scss/**/!(_)*.scss`,
      staticAll: `${base.src}/scss/**/*.scss`,
    },
    dist: {
      base: `${base.dist}/css`,
    },
  },

  js: {
    src: {
      static: `${base.src}/js/*.js`,
      staticAll: `${base.src}/js/**/*.{js,vue}`,
    },
    dist: {
      base: `${base.dist}/js`,
    },
  },

  img: {
    src: {
      all: `${base.src}/img/**/*.{svg,png,jpg,gif,webp}`,
      spritesheetDir: `${base.src}/sprites`,
    },
    dist: {
      base: `${base.dist}/img`,
    },
    spritesheet: {
      shape: {
        id: {
          separator: "-",
          whitespace: "-",
        },
      },
      mode: {
        symbol: {
          bust: false,
          dest: "./",
          sprite: `${base.dist}/img/sprite.svg`,
        },
      },
    },
  },

  fonts: {
    src: {
      all: `${base.src}/fonts/**/*.{svg,ttf,woff,woff2}`,
    },
    dist: {
      base: `${base.dist}/fonts`,
    },
  },

  vendors: {
    src: {
      all: `${base.src}/vendors/**/*.{css,js}`,
    },
    dist: {
      base: `${base.dist}/vendors`,
    },
  },

  clean: {
    base: base.dist,
    css: `${base.dist}/css`,
    js: `${base.dist}/js`,
    img: `${base.dist}/img`,
    fonts: `${base.dist}/fonts`,
  },
};
