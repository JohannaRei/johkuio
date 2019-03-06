// @flow
import { Platform } from 'react-native';

const isWeb = () => Platform.OS === 'web';
const isIOS = () => Platform.OS === 'ios';

export { isWeb, isIOS };
