export class Activity {

  constructor(name, url) {

    'ngInject';
      this.name = name;
      this.url = url;
    }

    getActivity() {

      let name = this.name;
      let url = this.url;

      return {name, url}
    }
}
