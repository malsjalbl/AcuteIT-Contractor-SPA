
import {homeRouteConfig } from "./home-route.js";

export var appHomeModule = angular.module("appHomeModule", ['ui.router'])

  .config(homeRouteConfig)
