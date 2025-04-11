import { Button } from "@/components/ui/button";
import { Link, Navigate } from "react-router-dom";
import { Code2, Github } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

const Index = () => {
  const { user, isLoading } = useAuth();

  // Redirect to dashboard if already logged in to it
  if (user && !isLoading) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Code2 className="h-6 w-6 text-primary" />
            <span className="font-heading text-lg font-bold">DevScope</span>
          </div>
          <Link to="/login">
            <Button size="sm" className="gap-1">
              <Github className="h-4 w-4" />
              Login
            </Button>
          </Link>
        </div>
      </header>
      
      <main className="flex-1">
        <section className="py-12 md:py-20">
          <div className="container flex flex-col items-center text-center">
            <div className="mb-4 rounded-full bg-primary/10 p-3">
              <Github className="h-6 w-6 text-primary" />
            </div>
            <h1 className="text-gradient mb-4 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Visualize Your Developer Journey
            </h1>
            <p className="mb-8 max-w-[42rem] text-lg text-muted-foreground md:text-xl">
              Track your GitHub contributions, analyze your coding patterns, and showcase your developer story with beautiful visualizations.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link to="/login">
                <Button size="lg" className="w-full gap-2 sm:w-auto">
                  <Github className="h-5 w-5" />
                  <span>Sign in with GitHub</span>
                </Button>
              </Link>
              <Link to="/dashboard">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  View Demo
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        <section className="bg-primary/5 py-16">
          <div className="container">
            <h2 className="mb-12 text-center text-3xl font-bold">Key Features</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="rounded-lg bg-background p-6 shadow-md transition-transform hover:translate-y-[-5px]">
                <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit">
                  <svg
                    className="h-6 w-6 text-primary"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <path d="M8 12h8" />
                    <path d="M12 8v8" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold">GitHub Integration</h3>
                <p className="text-muted-foreground">
                  Seamlessly connect with your GitHub account to automatically track and analyze your contributions.
                </p>
              </div>
              
              <div className="rounded-lg bg-background p-6 shadow-md transition-transform hover:translate-y-[-5px]">
                <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit">
                  <svg
                    className="h-6 w-6 text-primary"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 3v18h18" />
                    <path d="m19 9-5 5-4-4-3 3" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold">Beautiful Charts</h3>
                <p className="text-muted-foreground">
                  Visualize your coding activity with interactive charts and insightful analytics.
                </p>
              </div>
              
              <div className="rounded-lg bg-background p-6 shadow-md transition-transform hover:translate-y-[-5px]">
                <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit">
                  <svg
                    className="h-6 w-6 text-primary"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold">AI-Powered Insights</h3>
                <p className="text-muted-foreground">
                  Receive personalized recommendations and insights powered by AI to enhance your development workflow.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold">Ready to elevate your developer profile?</h2>
              <p className="mb-8 text-muted-foreground">
                Join thousands of developers who use DevScope to track, analyze, and showcase their coding journey.
              </p>
              <Link to="/login">
                <Button size="lg" className="gap-2">
                  <Github className="h-5 w-5" />
                  <span>Get Started Now</span>
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <Code2 className="h-5 w-5 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">© 2025 DevScope. All rights reserved.</span>
          </div>
          <div className="flex gap-4">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Terms
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
