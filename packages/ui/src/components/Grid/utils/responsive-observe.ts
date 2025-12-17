import { responsiveMap } from "../constants";
import type { Breakpoint, ScreenMap, SubscribeFunc } from "../types";

type MediaQueryListener = (event: MediaQueryListEvent | MediaQueryList) => void;
type MatchHandler = { mql: MediaQueryList; listener: MediaQueryListener };

let subscribers: Array<{ token: string; func: SubscribeFunc }> = [];
let subUid = -1;
let screens: ScreenMap = {};

const responsiveObserve = {
  matchHandlers: {} as Record<string, MatchHandler>,
  dispatch(pointMap: ScreenMap, breakpointChecked: Breakpoint | null) {
    screens = pointMap;
    if (subscribers.length < 1) {
      return false;
    }

    subscribers.forEach((item) => {
      item.func(pointMap, breakpointChecked);
    });

    return true;
  },

  subscribe(func: SubscribeFunc) {
    if (subscribers.length === 0) {
      this.register();
    }
    const token = (++subUid).toString();
    subscribers.push({ token, func });
    func(screens, null);
    return token;
  },

  unsubscribe(token: string) {
    subscribers = subscribers.filter((item) => item.token !== token);
    if (subscribers.length === 0) {
      this.unregister();
    }
  },

  unregister() {
    if (typeof window === "undefined") return;

    (Object.entries(responsiveMap) as Array<[Breakpoint, string]>).forEach(
      ([, matchMediaQuery]) => {
        const handler = this.matchHandlers[matchMediaQuery];
        if (!handler) return;

        if (typeof handler.mql.removeEventListener === "function") {
          handler.mql.removeEventListener("change", handler.listener);
        } else if (typeof handler.mql.removeListener === "function") {
          handler.mql.removeListener(handler.listener);
        }
      }
    );

    this.matchHandlers = {} as Record<string, MatchHandler>;
  },

  register() {
    if (
      typeof window === "undefined" ||
      typeof window.matchMedia !== "function"
    ) {
      return;
    }

    (Object.entries(responsiveMap) as Array<[Breakpoint, string]>).forEach(
      ([screen, matchMediaQuery]) => {
        const mql = window.matchMedia(matchMediaQuery);
        const listener: MediaQueryListener = (event) => {
          this.dispatch({ ...screens, [screen]: event.matches }, screen);
        };

        if (typeof mql.addEventListener === "function") {
          mql.addEventListener("change", listener);
        } else if (typeof mql.addListener === "function") {
          mql.addListener(listener);
        }

        this.matchHandlers[matchMediaQuery] = {
          mql,
          listener,
        };

        listener(mql);
      }
    );
  },
};

export default responsiveObserve;
