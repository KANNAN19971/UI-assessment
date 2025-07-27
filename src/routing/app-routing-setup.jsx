import { LandingPage } from '@/pages/landing-page';
import { Demo1Layout } from '@/layouts/demo1/layout';
import DashboardHome from '@/pages/dashboard-page';
import ChatPage from '@/pages/chat-page';
import { Navigate, Route, Routes } from 'react-router';

export function AppRoutingSetup() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/" element={<Demo1Layout />}>
        <Route path="dashboard" element={<DashboardHome />} />
        <Route path="chat" element={<ChatPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
