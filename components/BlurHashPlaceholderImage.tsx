import React from 'react';
import {Animated, View} from 'react-native';
import {Blurhash} from 'react-native-blurhash';
import {useFadeInAnimation} from '../hooks/useFadeIn';
import {BlurHashPlaceholderImageProps} from '../types';
import ImagePlaceholderStyles from './ImagePlaceholder.styles';

const BlurHashPlaceholderImage: React.FC<BlurHashPlaceholderImageProps> = ({
  blurhash,
  width,
  height,
  containerStyle,
  ...imageProps
}) => {
  const {fadedIn, opacity, startFadeIn} = useFadeInAnimation();
  const imageDimensions = {width, height};

  return (
    <View style={containerStyle}>
      {!fadedIn && (
        <Blurhash
          blurhash={blurhash}
          decodeAsync={true}
          style={[styles.placeholder, imageDimensions, imageProps.style]}
        />
      )}
      <Animated.Image
        {...imageProps}
        {...imageDimensions}
        style={[imageDimensions, imageProps.style, {opacity: opacity}]}
        onLoad={(e) => {
          if (typeof imageProps.onLoad === 'function') {
            imageProps.onLoad(e);
          }
          startFadeIn();
        }}
      />
    </View>
  );
};

const styles = ImagePlaceholderStyles;

export default BlurHashPlaceholderImage;
