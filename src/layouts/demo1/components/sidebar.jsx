import { useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { useSettings } from '@/providers/settings-provider';
import { useIsMobile } from '@/hooks/use-mobile';
import { SidebarHeader } from './sidebar-header';
import { SidebarMenu } from './sidebar-menu';

export function Sidebar() {
  const { settings } = useSettings();
  const { pathname } = useLocation();
  const isMobile = useIsMobile();

  const closeSidebar = () => {
    document.body.classList.remove('sidebar-open');
  };

  return (
    <>
      {/* Mobile overlay */}
      {isMobile && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden sidebar-overlay"
          style={{ display: 'none' }}
          onClick={closeSidebar}
        />
      )}
      
      <aside
        className={cn(
          'sidebar bg-background border-r border-border flex flex-col items-stretch shrink-0 transition-all duration-300',
          'w-64',
          'min-h-screen',
          'overflow-y-auto',
          // Mobile: fixed overlay, Desktop: relative
          isMobile 
            ? 'fixed top-0 left-0 z-50 h-full transform -translate-x-full' 
            : 'relative',
          // Show sidebar on mobile when body has sidebar-open class
          isMobile && 'sidebar-mobile',
          (settings.layouts.demo1.sidebarTheme === 'dark' ||
            pathname.includes('dark-sidebar')) &&
            'dark',
        )}
        style={{ 
          maxWidth: '256px', 
          minWidth: '200px',
        }}
      >
        <SidebarHeader />
        <nav className="flex-1 overflow-y-auto">
          <SidebarMenu />
        </nav>
      </aside>
    </>
  );
}
