import AsyncStorage from '@react-native-async-storage/async-storage';
type StoreProps = {
    key: string,
    [x: string]: any;
}
export const storeData = async ({ data, key}: StoreProps) => {
    try {
        const jsonValue = JSON.stringify(data);
        await AsyncStorage.setItem( key , jsonValue);
    } catch (e) {
        console.error(e)
    }
  };