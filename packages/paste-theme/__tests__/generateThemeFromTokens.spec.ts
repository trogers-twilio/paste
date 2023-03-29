import {generateThemeFromTokens} from '../src/generateThemeFromTokens';

describe('generateThemeFromTokens', () => {
  it('should generate a theme in the desired shape based on design tokens provided', () => {
    expect(
      generateThemeFromTokens({
        backgroundColors: {colorBackground: 'red'},
        borderColors: {colorBorder: 'blue'},
        borderWidths: {borderWidth0: '10px'},
        radii: {borderRadius0: '20px'},
        fonts: {fontFamilyCode: 'arial'},
        fontSizes: {fontSize100: '300px'},
        fontWeights: {fontWeightBold: '800'},
        lineHeights: {lineHeight0: '20px'},
        boxShadows: {shadow: 'grey'},
        sizings: {
          size0: '1px',
          size10: '1px',
          size20: '1px',
          size30: '1px',
          size40: '1px',
          size50: '1px',
          size60: '1px',
          size70: '1px',
          size80: '1px',
          size90: '1px',
          size100: '1px',
          size110: '1px',
          size120: '1px',
          sizeSquare0: '1px',
          sizeSquare10: '1px',
          sizeSquare20: '1px',
          sizeSquare25: '1px',
          sizeSquare30: '1px',
          sizeSquare40: '1px',
          sizeSquare50: '1px',
          sizeSquare60: '1px',
          sizeSquare70: '1px',
          sizeSquare80: '1px',
          sizeSquare90: '1px',
          sizeSquare100: '1px',
          sizeSquare110: '1px',
          sizeSquare120: '1px',
          sizeSquare130: '1px',
          sizeSquare140: '1px',
          sizeSquare150: '1px',
          sizeSquare160: '1px',
          sizeSquare170: '1px',
          sizeSquare180: '1px',
          sizeSquare190: '1px',
          sizeSquare200: '1px',
          sizeIcon10: '1px',
          sizeIcon20: '1px',
          sizeIcon30: '1px',
          sizeIcon40: '1px',
          sizeIcon50: '1px',
          sizeIcon60: '1px',
          sizeIcon70: '1px',
          sizeIcon80: '1px',
          sizeIcon90: '1px',
          sizeIcon100: '1px',
          sizeIcon110: '1px',
          sizeSidebar: '1px',
        },
        spacings: {space10: '28px'},
        textColors: {colorText: 'black'},
        zIndices: {zIndex0: '-20'},
        colors: {},
        dataVisualization: {
          colorDataVisualization1: 'red',
          colorDataVisualization2: 'blue',
          colorDataVisualization3: 'green',
        },
        colorSchemes: {
          colorScheme: 'dark',
        },
      })
    ).toMatchSnapshot();
  });
});
