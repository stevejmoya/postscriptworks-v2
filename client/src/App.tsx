import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Careers from "@/pages/careers";
import { Navbar } from "@/components/navbar";
import { PageTransition } from "@/components/page-transition";
import { ScrollToTop } from "@/components/scroll-to-top";

function Router() {
  const [location] = useLocation();
  
  return (
    <PageTransition>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/careers" component={Careers} />
        <Route component={NotFound} />
      </Switch>
    </PageTransition>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
