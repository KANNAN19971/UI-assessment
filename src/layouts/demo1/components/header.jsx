import { useEffect, useState } from 'react';
import {
  Bell,
  Menu,
  Search,
  X,
} from 'lucide-react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import { useScrollPosition } from '@/hooks/use-scroll-position';
import { Button } from '@/components/ui/button';

export function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const { pathname } = useLocation();
  const mobileMode = useIsMobile();

  const scrollPosition = useScrollPosition();
  const headerSticky = scrollPosition > 0;

  // Close sidebar when route changes
  useEffect(() => {
    setIsSidebarOpen(false);
    document.body.classList.remove('sidebar-open');
  }, [pathname]);

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    document.body.classList.toggle('sidebar-open');
  };

  return (
    <header
      className={cn(
        'header fixed top-0 right-0 left-0 z-30 flex items-stretch shrink-0 border-b border-border bg-background',
        headerSticky && 'shadow-sm',
      )}
    >
      <div className="flex justify-between items-center h-16 w-full px-6">
        {/* Mobile Header */}
        <div className="flex lg:hidden items-center gap-3">
          <Button 
            variant="ghost" 
            mode="icon"
            onClick={toggleSidebar}
            className="lg:hidden"
          >
            {isSidebarOpen ? (
              <X className="text-muted-foreground/70" />
            ) : (
              <Menu className="text-muted-foreground/70" />
            )}
          </Button>
          
          <Link to="/" className="shrink-0">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">M</span>
            </div>
          </Link>
        </div>

        {/* Desktop Header */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Button variant="ghost" mode="icon">
              <Search className="text-muted-foreground/70" />
            </Button>
            <Button variant="ghost" mode="icon">
              <Bell className="text-muted-foreground/70" />
            </Button>
          </div>
          
          {/* User Menu */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">U</span>
            </div>
            <div className="hidden md:block">
              <p className="text-sm font-medium">User</p>
              <p className="text-xs text-muted-foreground">user@example.com</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
