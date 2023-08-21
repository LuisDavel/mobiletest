import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import theme from './src/theme';
import { Routes } from './src/routes';
import 'react-native-get-random-values';
import { RealmProvider } from './src/lib/realm';
import { NetInfoProvider } from './src/hooks/netInfoContext';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
       <SafeAreaProvider>
        <RealmProvider>
          <NetInfoProvider>
              <Routes />
          </NetInfoProvider>
        </RealmProvider>
       </SafeAreaProvider>
    </ThemeProvider>
  );
}
