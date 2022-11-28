import {FontSizes, FontWeight} from './fonts';

interface Typography {
  fontSize: FontSizes;
  fontWeight: FontWeight;
}

export interface ThemeTypography {
  h1: Typography;
  h2: Typography;
  h3: Typography;
  h4: Typography;
  h5: Typography;
  h6: Typography;
  h7: Typography;
  large: Typography;
  medium: Typography;
  small: Typography;
  caption: Typography;
}

export const typography: ThemeTypography = {
  // Caption
  caption: {
    fontSize: FontSizes._12,
    fontWeight: FontWeight.Bold,
  },
  // =====================================================================

  // Heading
  h1: {
    fontSize: FontSizes._32,
    fontWeight: FontWeight.Bold,
  },
  h2: {
    fontSize: FontSizes._24,
    fontWeight: FontWeight.Bold,
  },
  h3: {
    fontSize: FontSizes._20,
    fontWeight: FontWeight.Bold,
  },
  h4: {
    fontSize: FontSizes._16,
    fontWeight: FontWeight.Bold,
  },
  h5: {
    fontSize: FontSizes._14,
    fontWeight: FontWeight.Bold,
  },
  h6: {
    fontSize: FontSizes._12,
    fontWeight: FontWeight.Bold,
  },
  h7: {
    fontSize: FontSizes._10,
    fontWeight: FontWeight.Bold,
  },
  // =====================================================================

  // Body
  large: {
    fontSize: FontSizes._16,
    fontWeight: FontWeight.Regular,
  },
  medium: {
    fontSize: FontSizes._14,
    fontWeight: FontWeight.Regular,
  },
  small: {
    fontSize: FontSizes._12,
    fontWeight: FontWeight.Regular,
  },
  // =====================================================================
};
