import { AppRouting } from '@/routing/app-routing';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import { SettingsProvider } from './providers/settings-provider';

const { BASE_URL } = import.meta.env;

export function App() {
  return (
    <SettingsProvider>
      <HelmetProvider>
        <BrowserRouter basename={BASE_URL}>
          <Toaster />
          <AppRouting />
        </BrowserRouter>
      </HelmetProvider>
    </SettingsProvider>
  );
}
