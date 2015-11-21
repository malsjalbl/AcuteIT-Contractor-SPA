/**
 * Created by mike on 21/10/2015.
 */

//const NAVBAR_ACTIVE_CLASS_NAME = "active";

export class AppController {

  constructor (AppService) {

    'ngInject';
    this.appService = AppService;
  }

 getActivities() {

    return this.appService.getActivities();
  }

    //const NAVPILL_ACTIVE_CLASS_NAME = "active";

    /*selectActiveNavBarItem(indexToSetActive, actualIndex) {

      //return indexToSetActive == actualIndex ? NAVBAR_ACTIVE_CLASS_NAME : null;
    }*/
}
