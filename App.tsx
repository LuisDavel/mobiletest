// import * as  from '@env'
import { ThemeProvider } from 'styled-components/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import theme from './src/theme';
import { Routes } from './src/routes';
import 'react-native-get-random-values';
import { RealmProvider } from './src/lib/realm';
import { NetInfoProvider } from './src/hooks/netInfoContext';
import DrawerLayout from './src/components/DrawerLayout';
import { ModalProvider } from './src/hooks/modalOpenContext';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
       <SafeAreaProvider>
        <RealmProvider>
          <NetInfoProvider>
            <ModalProvider>
              <DrawerLayout>
                <Routes />
              </DrawerLayout>
            </ModalProvider>
          </NetInfoProvider>
        </RealmProvider>
       </SafeAreaProvider>
    </ThemeProvider>
  );
}
