import { Activity } from "../../models/activity";

export function manRunBlock ($log, AppService) {

    'ngInject';

  $log.debug('Manufacturer module appRunBlock started...');

    const MODULE_DISPLAY_NAME = "Manufacturers";
    const MODULE_HOME_URL = "#/manufacturers";

    let activity = new Activity(MODULE_DISPLAY_NAME, MODULE_HOME_URL);

    AppService.registerActivity(activity);

    $log.debug('Manufacturer module appRunBlock end.');
}
