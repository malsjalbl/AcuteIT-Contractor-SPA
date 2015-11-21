
import {manConfig} from "./man-config.js";
import {manRouterConfig } from "./man-route.js";
import {manRunBlock} from "./man-run.js";

export var manufacturer = angular.module("app.manufacturer", ["ngAnimate", "ngCookies", 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'restangular', 'ngRoute', 'mgcrea.ngStrap'])

  .config(manConfig)
  .config(manRouterConfig)
  .run(manRunBlock)
