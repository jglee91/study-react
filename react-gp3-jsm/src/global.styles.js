import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap');

  :root {
    --font-family: 'Manrope', sans-serif;

    --gradient-text: linear-gradient(89.97deg, #AE67FA 1.84%, #F49867 102.67%);
    --gradient-bar: linear-gradient(103.22deg, #AE67FA -13.86%, #F49867 99.55%);
    
    --color-bg: #040C18;
    --color-footer: #031B34;
    --color-blog: #042c54;
    --color-text: #81AFDD;
    --color-subtext: #FF8A71;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    scroll-behavior: smooth;
  }

  body {
    background: var(--color-bg);
  }

  a {
    color: unset;
    text-decoration: none;
  }
`;
