/**
 * Created by mike on 05/11/2015.
 */
//import {SecurityController} from './security-controller';
import {SecurityService}        from './security-service';
//import {securityConfig}         from "./security-manConfig.js";
import {securityRouteConfig }   from "./security-route.js";
//import {securityRunBlock}       from "./security-man-run.js";

export var appSecurityModule = angular.module('appSecurityModule', ['ui.router'])

//  .controller ('AppController', AppController)
.service    ('securityService', SecurityService)
.config     (securityRouteConfig);
