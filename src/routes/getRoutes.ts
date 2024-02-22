export interface Route {
  path: string;
  label: string;
}

export type RouteConfigKeys = "overview" | "earnings" | "payout" | "settings";

export type RouteConfigs = {
  [key in RouteConfigKeys]: Route;
};

export const getRoutes = () => {
  const routeMap: RouteConfigs = {
    overview: {
      path: "/",
      label: "Overview",
    },
    earnings: {
      path: "/earnings",
      label: "Earnings",
    },
    payout: {
      path: "/payout",
      label: "Payout",
    },
    settings: {
      path: "/settings",
      label: "Settings",
    },
  };

  return {
    routeMap,
    routes: Object.values(routeMap),
  };
};

export default getRoutes;
