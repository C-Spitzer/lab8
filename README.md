# # Lab 8

**[Optional]** If what is being submitted is an individual Lab or Assignment. Otherwise, include a brief one paragraph description about the project.

* *Date Created*: 03 12 2024
* *Last Modification Date*: 03 12 2024
* *Lab URL*: <http://example.com/>


## Authors

* [Caroline Spitzer](caroline.spitzer@dal.ca) - (Author)


## Built With

* [node.js](https://nodejs.org/docs/latest/api/) - The runtime environment used
* [react](https://react.dev/) - JavaScript libary to build user interface


## Sources Used


### index.js

*Lines 30-50*

```
 <h3>Form</h3>
    <form id="register">     
      <label for="fname">First Name:</label>
      <input type="text" name="fname" id="fname" required><br>
      <label for="lname">Last Name:</label>
      <input type="text" name="lname" id="lname" required><br>
      <label for="email">Email: </label>
      <input type="email" name="email" id="email" required><br>
      <label for="password">Password: </label>
      <input type="current-password" name="password" id="password" required><br>
      <label for="seasons">Favourite Season</label>
      <select name="seasons" id="seasons">
        <option value="fall">Fall</option>
          <option value="winter">Winter</option>
          <option value="spring">Spring</option>
       </select>
      <br>
      <button type="submit">Submit</button>
				</form>
			</div>
        <div id="formData"></div>
```

The code above was created by adapting the code in [HTML Forms](https://www.w3schools.com/html/html_forms.asp) as shown below: 

```
<form action="/action_page.php">
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" value="John"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname" value="Doe"><br><br>
  <input type="submit" value="Submit">
</form>
```

- <!---How---> The code in [HTML Forms](https://www.w3schools.com/html/html_forms.asp) was implemented by referencing the form structure and creating the submit button
- <!---Why---> [HTML Forms](https://www.w3schools.com/html/html_forms.asp)'s Code was used because it displayed a form with actions assocaiated 
- <!---How---> [HTML Forms](https://www.w3schools.com/html/html_forms.asp)s Code was modified by referencing the structure of the form as well as the html elements

### index.js

*Lines 67 - 79*

```

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} /> {/* Add Dashboard route */}

      </Routes>
    </Router>
  </React.StrictMode>
);
```

The code above was created by adapting the code in [Codaisseur via GitHub](https://github.com/Codaisseur/React-Routing-Example) as shown below: 

```
// Set up your routes
ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>                           // everything will be under the `App` component
      <IndexRoute component={Welcome} />                       // the `Welcome` component will be rendered on `/`
      <Route path="/projects" component={Projects}/>           // the `Projects` component will be rendered on `/projects`
      <Route path="/project/:projectId" component={Project}/>  // the `Project` component will be rendered on `/project/<id>`
      <Route path="/about" component={About}/>                 // the `About` component will be rendered on `/about`
      <Route path="*" component={PageNotFound}/>               // all other routes will render `PageNotFound`
    </Route>
  </Router>
), document.getElementById('root'));
```

- <!---How---> The code in [Codaisseur via GitHub](https://github.com/Codaisseur/React-Routing-Example) was implemented by using the format to connect different pages together 
- <!---Why---> [Codaisseur via GitHub](https://github.com/Codaisseur/React-Routing-Example)'s Code was used because it used node and react to connect routes
- <!---How---> [Codaisseur via GitHub](https://github.com/Codaisseur/React-Routing-Example)'s Code was modified by adding my own paths and root
