import _ from "lodash";

const routesHelper = {};

routesHelper.addRoutes = (app, routes) => {
  _.forEach(routes, (route, key) => {
    const controller = route.controller || function() {};
    app[route.method]('/' + key, controller);
  });
};

export default routesHelper;
