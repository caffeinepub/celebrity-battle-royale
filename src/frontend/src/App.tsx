import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Leaderboard } from "./pages/Leaderboard";
import { LegendDetail } from "./pages/LegendDetail";
import { Legends } from "./pages/Legends";
import { Play } from "./pages/Play";

const queryClient = new QueryClient();

// Root layout
const rootRoute = createRootRoute({
  component: () => (
    <div className="dark">
      <Navbar />
      <Outlet />
    </div>
  ),
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const legendsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/legends",
  component: Legends,
});

const legendDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/legends/$id",
  component: LegendDetail,
});

const playRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/play",
  component: Play,
});

const leaderboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/leaderboard",
  component: Leaderboard,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  legendsRoute,
  legendDetailRoute,
  playRoute,
  leaderboardRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
