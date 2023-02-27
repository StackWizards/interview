# interview
Our interview questions repo

# Tailwind Component
[tailwind-component](tailwind-component/README.md)

There is a basic app with a single page.

1. We ask that the component ["TailwindComponent"](tailwind-component/src/components/TailwindComponent.jsx) be refactored into new components by splitting the large component into smaller ones
2. The [TailwindComponent](tailwind-component/src/components/TailwindComponent.jsx) has some data (people), we want you to move this state into a Context
3. Once you have a Context for the state we want you to add the ability to "Add a user" - This should add a new row to the table (use some fake data to begin with)
4. We ask that the component ["FormComponent"](tailwind-component/src/components/FormComponent.jsx) be refactored into new components by splitting the large component into smaller ones
5. We want you to wire up the "Edit" link on the table to populate the Edit section on the page (the data gets loaded for that user into the fields)
6. Once you can select someone to edit we want you to allow a user to change the values in the "Personal Information" section and when they press "Save" the changes are reflected in the table