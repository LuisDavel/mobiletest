import 'react-native-get-random-values'
// import * as  from '@env'
import { ThemeProvider } from 'styled-components/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import theme from './src/theme';
import { Routes } from './src/routes';
import { RealmProvider } from './src/lib/realm';
import { NetInfoProvider } from './src/hooks/netInfoContext';
import DrawerLayout from './src/components/DrawerLayout';
import { ModalProvider } from './src/hooks/modalOpenContext';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}
