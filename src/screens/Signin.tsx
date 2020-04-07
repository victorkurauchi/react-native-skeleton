import * as React from 'react';
import { View, TextInput, Button } from 'react-native';
import { useSelector } from 'react-redux';
import { Layout, Text } from '@ui-kitten/components';

import ContentView from '@/layouts/auth/signin';

const SignInScreen = ({ navigation }): React.ReactElement => (
  <ContentView navigation={navigation}/>
);

export default SignInScreen;
// export default function SignInScreen() {
//   const [username, setUsername] = React.useState('');
//   const [password, setPassword] = React.useState('');

//   // const { signIn } = React.useContext(AuthContext);

//   return (
//     <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <Text category='h1'>HOME</Text>
//       <View>
//         <TextInput
//           placeholder="Username"
//           value={username}
//           onChangeText={setUsername}
//         />
//         <TextInput
//           placeholder="Password"
//           value={password}
//           onChangeText={setPassword}
//           secureTextEntry
//         />
//         <Button title="Sign in" onPress={() => {}} />
//       </View>
//     </Layout>
//   );
// }
