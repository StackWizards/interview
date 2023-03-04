# PLAN

useContext custom hook used in App.js to wrap project in UsersListContext.Provider <br/><br/>

# Adding a new Dummy User

Click event of 'Add User' button in PageSummary to update table with new unique dummy row<br/><br/>
Append ${list.length + 1} to the lastName and email values when adding a new user to keep unique key and to demonstrate it is a new piece of data<br/><br/>

# Editing a User

Create an EditModeContext to share the state of edit mode (which will eventually be a user's details in an object) and it's setState function<br/><br/>
Conditionally set the defaultValue (value alone stops editing) of each input on FormComponent to be populated by the currently selected user's details (if editMode has a value)
else be empty string<br/><br/>

useReducer to handle state in FormComponent<br/><br/>
handleSubmit to immutably update UsersList using setUsers (passed in context) - spread, then add object<br/><br/>
remove POST method on form and use e.preventDefault on handleSubmit to stop page refresh<br/><br/>
change UsersTable to add firstName and lastName into 'name' cell with string literals<br/><br/>
re-use `<Button/>` component in FormComponent<br/><br/>
removed initial dummy data (as firstName, lastName aren't defined)<br/><br/>
