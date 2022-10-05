App.config(['$routeProvider',
  function ($routeProvider) {
    $routeProvider
      .when('/', {
        template: `
          <h2 style="margin-top: 0;">Alleva Test</h2>
          <p>
            Welcome to the Alleva test application. This is a simple AngularJS app
            which you will be using to demonstrate your skills in migrating AngularJS
            code to modern Angular.
          </p>
          <p>The goal of this exercise is for you to:</p>
          <ul>
            <li>Identify the AngularJS code that needs to be migrated.</li>
            <li>Identify the Angular 2+ code that needs to be written (use TypeScript).</li>
            <li>Use the Angular CLI to build the application.</li>
            <li>Write and test the new Angular 2+ code.</li>
            <li>The application must maintain the current routes.</li>
            <li>The application must use SCSS for styling.</li>
            <li>Ensure the application works as expected.</li>
          </ul>
          <p>Bonus points:</p>
          <ul>
            <li>Remove/Refactor any bad practices in code that you see.</li>
            <li>Implement a good linting strategy.</li>
            <li>Move view templates into separate files.</li>
            <li>Implement a good directory structure.</li>
          </ul>
          <a 
            type="button" 
            ng-href="{{ link }}"
          >Next page</a>
        `,
        controller: 'HomeController',
      })
      .when('/greeting', {
        template: `

          <style>
            .move-on {
              margin-top: 10px;
            }
          </style>

          <h2 style="margin-top: 0;">Please enter your name below.</h2>
          <form>
            <label for="firstName">First Name:</label>
            <input type="text" id="firstName" ng-model="firstName" />
          
            <label for="lastName">Last Name:</label>
            <input type="text" id="lastName" ng-model="lastName" />
            
            <button 
              ng-click="greet()"
              ng-disabled="!firstName || !lastName"
            >Submit</button>
          </form>
          
          <div class="message" ng-if="greeting">
            {{ greeting }}
            You may begin working on this exercise now.
          </div>

          <div ng-show="greeting" class="move-on">
            <button ng-click="GoNext()">Next</button>
          </div>
        `,
        controller: 'GreetingController',
      })
      .when('/songs', {
        template: `

        <style>
          table {
            font-family: arial, sans-serif;
            border-collapse: collapse;
            width: 100%;
          }

          td, th {
            border: 1px solid #dddddd;
            text-align: left;
            padding: 8px;
          }

          tr:nth-child(even) {
            background-color: #dddddd;
          }
          tr:nth-child(odd) {
            background-color: white;
          }
        </style>

        <div>

          <h2 style="text-align:center">Alleva Playlist</h2>
          <button class="create-btn" ng-show="!isCreate && !isUpdate" ng-click="showCreateSong()">Create</button>

          <table ng-show="!isCreate && !isUpdate">
            <tr>
              <th>#</th>
              <th>Artist</th>
              <th>Title</th>
              <th>Year</th>
              <th></th>
            </tr>
            <tr ng-repeat="song in songs">
              <th>{{$index + 1}}</th>
              <td>{{song.artist}}</td>
              <td>{{song.title}}</td>
              <td>{{song.year}}</td>
              <td>
                <button ng-click="removeSong(song)">remove</button>
                <button style="background-color: yellow;" ng-click="showUpdateSong(song)">update</button>
              </td>
            </tr>
          </table>

          <div ng-if="isCreate || isUpdate">
            <form ng-submit="saveSong()">
              <label for="artist">Artist:</label><br>
              <input type="text" name="artist" ng-model="currentSong.artist"><br>
              <label for="title">Last name:</label><br>
              <input type="text" name="title" ng-model="currentSong.title"><br>
              <label for="year">Year:</label><br>
              <input type="text" name="year" ng-model="currentSong.year"><br><br>
              <span>
                <button type="button" ng-click="cancelForm()">Cancel</button>
                <button type="submit" style="background-color:green">Submit</button>
              </span>
            </form> 
          </div>

        </div>
        `,
        controller: 'SongController',
      })
      .otherwise({ redirectTo: '/' });
  }
]);
