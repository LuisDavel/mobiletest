import AsyncStorage from '@react-native-async-storage/async-storage';
type StoreProps = {
    key: string,
}

export const getData = async ({key}: StoreProps) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? jsonValue : null;
    } catch (e) {
      console.error(e)
    }
  };