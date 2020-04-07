import AsyncStorage from '@react-native-community/async-storage';

// react-native known issue: https://github.com/react-native-community/react-native-async-storage/issues/10
export const getItemSafely = async function(key: string): Promise<string|object> {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(key).then(
      value => {
        resolve(value);
      },
      () => {
        // Couldn't read row 0, col 0 from CursorWindow
        resolve({}); // Force not to break
      },
    );
  });
}

export const storeData = async (key: string, value: any) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    throw new Error('Error saving in session');
  }
}

// export const subscribe = async function(store: any) {
//   store.subscribe(async () => {
//     try {
//       await AsyncStorage.setItem(
//         '@Store',
//         JSON.stringify(store.getState()),
//       );
//     } catch (e) {
//       // saving error
//       console.log('Error saving store', e);
//     }
//   });
// }
