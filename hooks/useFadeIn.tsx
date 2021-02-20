import React, {useCallback} from 'react';
import {Animated, Easing} from 'react-native';

export function useFadeInAnimation(fadedInCallback?: () => void) {
  const [isFadeInFinished, toggleFadeInFinished] = React.useState(false);
  const animatedOpacityValue = React.useRef(new Animated.Value(0)).current;

  const startFadeIn = useCallback(() => {
    if (!isFadeInFinished) {
      Animated.timing(animatedOpacityValue, {
        toValue: 1,
        delay: 0,
        isInteraction: false,
        useNativeDriver: true,
        easing: Easing.in(Easing.ease),
      }).start(() => {
        toggleFadeInFinished(true);

        if (typeof fadedInCallback === 'function') {
          fadedInCallback();
        }
      });
    }
  }, [isFadeInFinished, animatedOpacityValue, fadedInCallback]);

  return {
    fadedIn: isFadeInFinished,
    opacity: animatedOpacityValue,
    startFadeIn,
  };
}
