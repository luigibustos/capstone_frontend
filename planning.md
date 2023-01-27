# Brew Time
Brew Time is the ultimate coffee lover's companion, revolutionizing the pour over experience with its user-friendly interface, allowing anyone to craft the perfect cup of coffee with just a few taps. Experience the art of pour over coffee like never before with Brew Time.

## User Story
- As a user, I want to be able to login to the app so that I can access the create recipe form and my saved recipes. 
- Once logged in, I want to be presented with the option to either create a new recipe or view existing ones on the home page. 
- If I choose to create a new recipe, I should be taken to a form where I can input the necessary parameters to craft my perfect pour over coffee. 
-If I choose to view recipes, I should be taken to a page where I can see all the recipes that I have created and saved, and be able to edit or delete them as needed

## Wireframe

### Login
### Home 
### Create Form
### Show Page

## ERD
The "Users" table would have fields for storing information about each user, such as a unique ID, name, email, password, etc.
The "Recipes" table would have fields for storing information about each recipe, such as a unique ID, name, ingredients, instructions, etc.
There would be a relationship between the "Users" and "Recipes" table, with a one-to-many relationship between a user and their recipes, meaning one user can have multiple recipes, but each recipe can only belong to one user.

## MVP Scope
- [ ] Recipe creation and management: Allow users to create, edit and delete their own recipes.
- [ ] View all recipes: Logged in User can view all thier created recipes
- [ ] User registration and login: Allow users to create an account and log in to the system.
- [ ] Mobile compatibility: Ensure that the project is compatible with mobile devices and responsive design.

### Stretch Features
- [ ] Search and filter: Allow users to search and filter recipes by different criteria such as name, ingredients, etc.
- [ ] User profiles: Allow users to view and edit their own profile information, such as name, email, and profile picture.
- [ ] Social Sharing: Allow users to share recipes between each other.
- [ ] Rating and commenting: Allow users to rate and comment on shared recipes.
- [ ] Push notifications: Send push notifications to users when new recipes are created or when a user's recipe is commented on.