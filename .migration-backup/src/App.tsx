import React, { useState, useEffect } from "react";
import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import { IntroHero } from "@/components/IntroHero";
import { Layout } from "@/components/Layout";

import Home from "@/pages/Home";
import Music from "@/pages/Music";
import Events from "@/pages/Events";
import Work from "@/pages/Work";
import Shop from "@/pages/Shop";
import Art from "@/pages/Art";
import About from "@/pages/About";
import Fmly from "@/pages/Fmly";
import Join from "@/pages/Join";
import Contact from "@/pages/Contact";

const queryClient = new QueryClient();

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/music" component={Music} />
        <Route path="/events" component={Events} />
        <Route path="/work" component={Work} />
        <Route path="/shop" component={Shop} />
        <Route path="/art" component={Art} />
        <Route path="/about" component={About} />
        <Route path="/fmly" component={Fmly} />
        <Route path="/join" component={Join} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function IntroGate() {
  const [location] = useLocation();
  const isHome = location === "/" || location === "";
  const [showIntro, setShowIntro] = useState(() => {
    if (typeof window === "undefined") return false;
    return isHome && !sessionStorage.getItem("introSeen");
  });

  useEffect(() => {
    const handleIntroFinished = () => {
      sessionStorage.setItem("introSeen", "true");
      setShowIntro(false);
    };
    window.addEventListener("introFinished", handleIntroFinished);
    return () => window.removeEventListener("introFinished", handleIntroFinished);
  }, []);

  if (showIntro && isHome) return <IntroHero />;
  return <Router />;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <IntroGate />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
