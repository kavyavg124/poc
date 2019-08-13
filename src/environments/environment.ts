// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseUrl: 'http://18.223.98.185:80/',
    endpoint: {
    userLogin: 'api/users/login/',
    userList: 'api/users/user-list/',
    addUser: 'api/users/user-creation/',
    getUser: 'api/users/user-view/',
    updateUser: 'api/users/user-update/',
    deleteUser: 'api/users/delete/',
    deleteTask: 'api/users/task-delete/',
    addTask: 'api/users/task-creation/',
    updateTask: 'api/users/task-update/',
    getTask: 'api/users/task-view/',
    tasksListAll: 'api/users/task-list-all/',
    taskFilter: 'api/users/task-filter/'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
