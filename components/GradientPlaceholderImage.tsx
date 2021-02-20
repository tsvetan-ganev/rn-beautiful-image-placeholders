import React from 'react';
import {Animated, Easing, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {GradientPlaceholderImageProps} from '../types';

const GradientPlaceHolderImage: React.FC<GradientPlaceholderImageProps> = (
  props,
) => {
  const {
    colors,
    angle = 15,
    width,
    height,
    containerStyle,
    ...imageProps
  } = props;

  const [isFadeInFinished, toggleFadeInFinished] = React.useState(false);
  const imageDimensions = {width, height};

  const animatedOpacityValue = React.useRef(new Animated.Value(0)).current;

  return (
    <View style={containerStyle}>
      {!isFadeInFinished && (
        <LinearGradient
          colors={colors}
          style={[styles.gradient, imageDimensions, imageProps.style]}
          useAngle
          angle={angle}
        />
      )}
      <Animated.Image
        {...imageProps}
        {...imageDimensions}
        style={[
          imageDimensions,
          imageProps.style,
          {opacity: animatedOpacityValue},
        ]}
        onLoad={() => {
          if (isFadeInFinished) {
            return;
          }

          Animated.timing(animatedOpacityValue, {
            toValue: 1,
            delay: 0,
            isInteraction: false,
            useNativeDriver: true,
            easing: Easing.in(Easing.ease),
          }).start(() => toggleFadeInFinished(true));
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  gradient: {
    position: 'absolute',
    left: 0,
    top: 0,
  },
});

export default GradientPlaceHolderImage;
