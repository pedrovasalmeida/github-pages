export const particleOptions = {
  fullScreen: {
    zIndex: 1,
  },
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: 'push',
      },
      onHover: {
        enable: true,
        mode: 'slow',
        parallax: {
          force: 60,
        },
      },
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 50,
        opacity: 0.8,
        size: 40,
      },
      grab: {
        distance: 10,
      },
      slow: {
        radius: 100,
      },
    },
  },
  particles: {
    color: {
      value: '#E2E8F0',
    },
    links: {
      color: {
        value: '#E2E8F0',
      },
      distance: 150,
      enable: true,
      opacity: 0.4,
    },
    move: {
      attract: {
        rotate: {
          x: 0,
          y: 1920,
        },
      },
      enable: true,
      path: {},
      speed: 4,
      spin: {},
    },
    number: {
      density: {
        enable: true,
      },
      value: 40,
    },
    opacity: {
      value: 0,
      animation: {
        speed: 1,
        minimumValue: 0.1,
      },
    },
    size: {
      value: {
        min: 1,
        max: 5,
      },
      animation: {
        speed: 40,
        minimumValue: 0.1,
      },
    },
  },
}
