import React, { lazy, Suspense, useState, useEffect } from "react";
import { Switch, Route, Router as WouterRouter, Redirect } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Layout } from "@/components/Layout";
import { IntroHero } from "@/components/IntroHero";

const Home         = lazy(() => import("@/pages/Home"));
const Sounds       = lazy(() => import("@/pages/Sounds"));
const Experiences  = lazy(() => import("@/pages/Experiences"));
const WorldBuilding= lazy(() => import("@/pages/WorldBuilding"));
const Archive      = lazy(() => import("@/pages/Archive"));
const Shop         = lazy(() => import("@/pages/Shop"));
const Fmly         = lazy(() => import("@/pages/Fmly"));
const Roots        = lazy(() => import("@/pages/Roots"));
const Signals      = lazy(() => import("@/pages/Signals"));
const Connect      = lazy(() => import("@/pages/Connect"));
const Join         = lazy(() => import("@/pages/Join"));
const NotFound     = lazy(() => import("@/pages/not-found"));

const queryClient = new QueryClient();

function Router() {
  return (
    <Layout>
      <Suspense fallback={null}>
        <Switch>
          {/* Primary routes */}
          <Route path="/"               component={Home} />
          <Route path="/sounds"         component={Sounds} />
          <Route path="/experiences"    component={Experiences} />
          <Route path="/world-building" component={WorldBuilding} />
          <Route path="/archive"        component={Archive} />
          <Route path="/shop"           component={Shop} />
          <Route path="/fmly"           component={Fmly} />
          <Route path="/roots"          component={Roots} />
          <Route path="/signals"        component={Signals} />
          <Route path="/connect"        component={Connect} />
          <Route path="/join"           component={Join} />

          {/* Legacy route redirects — old URLs forward to renamed sections */}
          <Route path="/music">    <Redirect to="/sounds" /></Route>
          <Route path="/events">   <Redirect to="/experiences" /></Route>
          <Route path="/work">     <Redirect to="/world-building" /></Route>
          <Route path="/art">      <Redirect to="/archive" /></Route>
          <Route path="/about">    <Redirect to="/roots" /></Route>
          <Route path="/press">    <Redirect to="/signals" /></Route>
          <Route path="/contact">  <Redirect to="/connect" /></Route>

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
