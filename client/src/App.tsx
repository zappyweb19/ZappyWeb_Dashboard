import { useEffect, useState } from "react";
import { Switch, Route, useLocation } from "wouter";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { UserProvider } from "@/lib/userContext";

import AuthPage from "@/pages/Auth";
import Dashboard from "@/pages/Dashboard";
import NotFound from "@/pages/not-found";
import Workflows from "@/pages/Workflows";
import SEO from "@/pages/SEO";
import Content from "@/pages/Content";
import LayoutAI from "@/pages/LayoutAI";
import Performance from "@/pages/Performance";
import Integrations from "@/pages/Integrations";
import Settings from "@/pages/Settings";

function Router() {
  const [location, setLocation] = useLocation();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
      if (!u && location !== "/auth") setLocation("/auth");
      if (u && location === "/auth") setLocation("/");
    });
    return () => unsubscribe();
  }, [location, setLocation]);

  return (
    <Switch>
      <Route path="/auth" component={AuthPage} />
      <Route path="/" component={Dashboard} />
      <Route path="/workflows" component={Workflows} />
      <Route path="/seo" component={SEO} />
      <Route path="/content" component={Content} />
      <Route path="/layout" component={LayoutAI} />
      <Route path="/performance" component={Performance} />
      <Route path="/integrations" component={Integrations} />
      <Route path="/settings" component={Settings} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <UserProvider>
          <Toaster />
          <Router />
        </UserProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
