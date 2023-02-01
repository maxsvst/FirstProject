module.exports = {
  content: ["./src/**/*.{js, jsx}"],
  theme: {
    extend: {
      // padding: {
      //   '33.06px': '33.06px',
      //   '15px': '15px',
      //   '-85px' : '-85px',
      //   '85px' : '85px',
      // },
      fontFamily: {
        sans: ["Montserrat"],
        serif: ["Montserrat"],
        mono: ["Montserrat"],
        display: ["Montserrat"],
        body: ["Montserrat"],
      },
      fontSize: {
        'smaller': ["12px", "18px"],
        'small': ["14px", "21px"],
        xs: ["16px", "24px"],
        xl: ["20px", "30px"],
        "2xl": ["24px", "36px"],
        "3xl": ["32px", "48px"],
        "8xl": ["60px", "90px"],
      },
    },
  },
  plugins: [],
};
