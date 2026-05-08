import React, { lazy, Suspense, useState, useEffect } from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Layout } from "@/components/Layout";
import { IntroHero } from "@/components/IntroHero";

const Home = lazy(() => import("@/pages/Home"));
const Music = lazy(() => import("@/pages/Music"));
const Events = lazy(() => import("@/pages/Events"));
const Work = lazy(() => import("@/pages/Work"));
const Shop = lazy(() => import("@/pages/Shop"));
const Art = lazy(() => import("@/pages/Art"));
const About = lazy(() => import("@/pages/About"));
const Fmly = lazy(() => import("@/pages/Fmly"));
const Join = lazy(() => import("@/pages/Join"));
const Contact = lazy(() => import("@/pages/Contact"));
const Press = lazy(() => import("@/pages/Press"));
const NotFound = lazy(() => import("@/pages/not-found"));

const queryClient = new QueryClient();

function Router() {
  return (
    <Layout>
      <Suspense fallback={null}>
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
          <Route path="/press" component={Press} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </Layout>
  );
}

function App() {
  const [introDone, setIntroDone] = useState(false);

  useEffect(() => {
    const handler = () => setIntroDone(true);
    window.addEventListener("introFinished", handler);
    return () => window.removeEventListener("introFinished", handler);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          {!introDone && <IntroHero />}
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
