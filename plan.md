# PLAN

useContext custom hook used in App.js to wrap project in UsersListContext.Provider <br/><br/>
useReducer to handle state in FormComponent<br/><br/>
handleSubmit to immutably update UsersList using setUsers (passed in context) - spread then add object<br/><br/>
remove POST method on form and use e.preventDefault on handleSubmit to stop page refresh<br/><br/>
change UsersTable to add firstName and lastName into 'name' cell<br/><br/>
re-use `<Button/>` component in FormComponent<br/><br/>
removed initial dummy data (as firstName, lastName aren't defined)<br/><br/>
