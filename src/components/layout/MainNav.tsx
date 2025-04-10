
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import { useAuth } from "@/contexts/AuthContext";
import { 
  BarChart3, 
  ChevronDown, 
  Code2, 
  Github, 
  LayoutDashboard, 
  LogOut,
  Menu, 
  Search, 
  User, 
  X 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function MainNav() {
  const isMobile = useIsMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  // Get user avatar and initials
  const userAvatar = user?.user_metadata?.avatar_url || null;
  const userInitials = user?.user_metadata?.preferred_username 
    ? user.user_metadata.preferred_username.substring(0, 2).toUpperCase()
    : 'GH';
  const userName = user?.user_metadata?.preferred_username || 'GitHub User';
  const userEmail = user?.email || '';

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 md:gap-4">
          {isMobile && (
            <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          )}
          <Link to="/" className="flex items-center gap-2">
            <Code2 className="h-6 w-6 text-primary" />
            <span className="hidden font-heading text-lg font-bold sm:inline-block">
              DevScope
            </span>
          </Link>
          {!isMobile && user && (
            <nav className="flex items-center gap-1 md:gap-2">
              <Link to="/dashboard" className="group px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                <div className="flex items-center gap-1">
                  <LayoutDashboard className="h-4 w-4" />
                  <span>Dashboard</span>
                </div>
                <div className="h-0.5 scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
              <Link to="/ai-summary" className="group px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                <div className="flex items-center gap-1">
                  <BarChart3 className="h-4 w-4" />
                  <span>AI Summary</span>
                </div>
                <div className="h-0.5 scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
              <Link to={`/portfolio/${userName}`} className="group px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  <span>Portfolio</span>
                </div>
                <div className="h-0.5 scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            </nav>
          )}
        </div>
        
        <div className="flex items-center gap-2">
          {!isMobile && user && (
            <div className="relative w-full max-w-[200px]">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="w-full rounded-full bg-background pl-8 md:w-[200px] lg:w-[250px]"
              />
            </div>
          )}
          
          <ThemeToggle />
          
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={userAvatar} alt={userName} />
                    <AvatarFallback>{userInitials}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">{userName}</p>
                    <p className="text-xs leading-none text-muted-foreground">
                      {userEmail}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to={`/portfolio/${userName}`}>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="https://github.com/settings/applications" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    <span>GitHub</span>
                  </a>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleSignOut}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button variant="default" size="sm" asChild>
              <Link to="/login">
                <Github className="mr-2 h-4 w-4" />
                Login
              </Link>
            </Button>
          )}
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobile && mobileMenuOpen && user && (
        <div className="absolute left-0 right-0 z-50 border-b bg-background py-4 shadow-lg animate-fade-in">
          <nav className="container flex flex-col gap-2">
            <Link 
              to="/dashboard" 
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
              onClick={toggleMobileMenu}
            >
              <LayoutDashboard className="h-4 w-4" />
              <span>Dashboard</span>
            </Link>
            <Link 
              to="/ai-summary" 
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
              onClick={toggleMobileMenu}
            >
              <BarChart3 className="h-4 w-4" />
              <span>AI Summary</span>
            </Link>
            <Link 
              to={`/portfolio/${userName}`} 
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
              onClick={toggleMobileMenu}
            >
              <User className="h-4 w-4" />
              <span>Portfolio</span>
            </Link>
            <div className="relative mt-2 w-full">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="w-full pl-8"
              />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
