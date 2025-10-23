import { init } from "@noriginmedia/norigin-spatial-navigation";

export function initializeSpatialNavigation() {
  init({
    debug: false,
    visualDebug: false,
  });
}
