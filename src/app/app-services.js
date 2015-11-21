/**
 * Created by mike on 19/10/2015.
 */

let activityList = new WeakMap();

export class AppService {

    constructor () {

        'ngInject';
        activityList.set(this, []);
    }

    registerActivity(activity) {

        activityList.get(this).push(activity);
    }

    getActivities() {

        return activityList.get(this);
    }
}
