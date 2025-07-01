import { Dimensions, PixelRatio } from 'react-native';

/* IOS FONTSIZES
1 - 0.823
2 - 0.882
3 - 0.941
4 - 1.000
5 - 1.118
6 - 1.235
7 - 1.353
8 - 1.786
9 - 2.143
10 - 2.643
11 - 3.143
12 - 3.571
*/

const getFontSizeScale = (fontScale: number, fontsize: number, maxFontSize: number) => {
    let actualFontsize = fontsize;
    const scaleFactor = fontScale / 1;
    const additionalSize = Math.ceil((scaleFactor - 1) / 0.25);
    actualFontsize += additionalSize;
    if (actualFontsize < fontsize) actualFontsize = fontsize;
    if (actualFontsize > maxFontSize) actualFontsize = maxFontSize;
    return actualFontsize;
}

export enum JustifyContent {
    FLEX_START = 'flex-start',
    FLEX_END = 'flex-end',
    CENTER = 'center',
    SPACE_BETWEEN = 'space-between',
    SPACE_AROUND = 'space-around',
    SPACE_EVENLY = 'space-evenly',
}

export enum AlignItems {
    FLEX_START = 'flex-start',
    FLEX_END = 'flex-end',
    CENTER = 'center',
    BASELINE = 'baseline',
    STRETCH = 'stretch',
}

export const globalStyles = {
    // CORES //
    LARANJA: '#FF7200' as string,
    CINZA: '#3C3C3C' as string,
    IMAGE_LOADING: '#E8E8E8' as string,
    CINZA_CLARO: '#D5D5D5' as string,
    CINZA_ICONES: '#959595' as string,
    CINZA_BACKGROUND: '#F8F8F8' as string,
    CINZA_UNDEFINED: '#4A4A4A' as string,
    CINZA_MEDIO: '#333333' as string,
    CINZA_ESCURO: '#4A4A4A' as string,
    COR_CINZA_NEUTRO: '#9F9F9F' as string,
    BACKGROUND_COLOR: '#FFFEFA' as string,
    HEADER_BACKGROUND_COLOR: '#F3F3F3' as string,
    BRANCO: '#FFF' as string,
    PRETO: '#000' as string,
    TRANSPARENT: 'transparent',
    VERDE: '#559F32' as string,
    VERMELHAO: '#FF0000' as string,
    ESMAZIADO: 'rgba(0,0,0,0.5)' as string,
    LIGHTGREY: 'lightgrey',
    // DURATIONS //
    DURATION: 500 as number,

    // TIPOS DE FONTE //
    Inter100: 'Inter100' as string,
    Inter200: 'Inter200' as string,
    Inter300: 'Inter300' as string,
    Inter400: 'Inter400' as string,
    Inter500: 'Inter500' as string,
    Inter600: 'Inter600' as string,
    Inter700: 'Inter700' as string,
    Inter800: 'Inter800' as string,
    Inter900: 'Inter900' as string,

    // DIMENSÕES //
    HEIGHT: Dimensions.get('window').height as number,
    WIDTH: Dimensions.get('window').width as number,
    CEM_POR_CENTO: '100%' as any,
    CINQUENTA_POR_CENTO: '50%' as any,

    // TAMANHOS DE FONTE //
    FONTSIZE: getFontSizeScale(PixelRatio.getFontScale(), 16, 26),
    BIG_FONTSIZE: getFontSizeScale(PixelRatio.getFontScale(), 18, 28) as number,
    MIN_FONTSIZE_SCALE: Math.min(PixelRatio.getFontScale() * PixelRatio.getPixelSizeForLayoutSize(7), PixelRatio.getPixelSizeForLayoutSize(7)) as number,

    // JUSTIFY CONTENT TYPES //
    JUSTIFY_CENTER: JustifyContent.CENTER,
    JUSTIFY_SPACE_AROUND: JustifyContent.SPACE_AROUND,
    JUSTIFY_SPACE_BETWEEN: JustifyContent.SPACE_BETWEEN,
    JUSTIFY_SPACE_EVENLY: JustifyContent.SPACE_EVENLY,
    JUSTIFY_FLEX_START: JustifyContent.FLEX_START,
    JUSTIFY_FLEX_END: JustifyContent.FLEX_END,

    // ALIGN ITEMS TYPES //
    ALIGN_CENTER: AlignItems.CENTER,
    ALIGN_FLEX_START: AlignItems.FLEX_START,
    ALIGN_FLEX_END: AlignItems.FLEX_END,
    ALIGN_BASELINE: AlignItems.BASELINE,
    ALIGN_STRETCH: AlignItems.STRETCH,
    // BASE_URL: `https://sistema.varejoindoor.com.br/ords/vendas/usuario/`,
    // BASE_TOKEN_URL: 'https://sistema.varejoindoor.com.br/ords/vendas/oauth/token',
};