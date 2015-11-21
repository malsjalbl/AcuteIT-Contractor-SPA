/**
 * Created by mike on 05/11/2015.
 */

let security = new WeakMap();

export class SecurityService {

  constructor () {

    'ngInject';
    security.set(this, {});
  }

  setAuthenticated(isAuthenticated) {

    security.get(this).isAuthenticated = isAuthenticated;
  }

  getAuthenticated() {

    return security.get(this).isAuthenticated;
  }
}
