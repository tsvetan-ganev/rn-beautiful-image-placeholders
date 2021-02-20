import {ImageProps, ViewStyle} from 'react-native';

export interface GradientPlaceholderImageProps extends ImagePlaceholderProps {
  colors: string[];
  angle?: number;
}

export interface BlurHashPlaceholderImageProps extends ImagePlaceholderProps {
  blurhash: string;
}

/**
 * Common props shared for both components.
 */
export interface ImagePlaceholderProps extends ImageProps {
  width: number;
  height: number;
  containerStyle?: ViewStyle;
}
