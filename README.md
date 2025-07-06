__🍴🍳🥘Recipe Discovery App🍴🍳🥘__

A simple React application that will help users discover new recipes from around the world and save their favorites to try making later. 
Built  with modern React patterns and TheMealDB API.

__Home Page__
<img width="766" alt="image" src="https://github.com/user-attachments/assets/ad271980-331d-41e8-9c0e-2a294e582fa5" />


__Beef Category Search__
<img width="749" alt="image" src="https://github.com/user-attachments/assets/cbd5fdd5-d178-4746-b292-ae88e63d995c" />


__Beef Strognaff Recipe Card Detail__
<img width="750" alt="image" src="https://github.com/user-attachments/assets/e6a314ee-8c2e-4f47-bc35-9e33878a5703" />


__Favorites saved__
<img width="768" alt="image" src="https://github.com/user-attachments/assets/6b7daedb-f1b1-4868-92eb-9b27462388ce" />


__If typo happens in search__
<img width="754" alt="image" src="https://github.com/user-attachments/assets/ce530a33-9e21-4b68-a935-9d7cdb9ce695" />



__Search results for chocolate correctly typed__
<img width="754" alt="image" src="https://github.com/user-attachments/assets/68c56eeb-dd94-44e5-9c3f-e9fac58913ea" />



____________________________________________________________________________________________________________________________

__🍲Features__

_Browse Recipe Categories_

 -view all recipe categories from Beef, Chicken, Seafood, Dessert, etc. dishes.
 
 -category cards with images and descriptions of each dish.
 
 -click any category to explore receipes in that category.
 
 -click any recipe image and full recipe description is given.
 

 _Search Recipes_
 
  -real-time search functionality in the navigation bar.
  
  -search by recipe name or ingredients.
  
  -dedicated search results page.

 _Favorites Management_
 
  -save your favorite recipes with one click.
  
  -persistent storage using browser localStorage.
  
  -view all saved recipes on the favorites page.
  
  -easy removal of recipes from favorites.

 _Recipe Details_
  -complete recipe information with high-quality items.
  -detailed ingredients list with measurements.
  -step-by-step cooking instructions.
  -recipe category and cuisine country origin tags.

  _Modern Design_
   -clean and responsive design built with Tailwind CSS.
   -mobile-friendly layout that works on all devices.
   -smooth hover effects and intutive navigation.
   -professional loading states and error handling.

   _Tech Used_
   -React 19
   -React Router DOM
   -Tailwind CSS
   -Vite 6.35
   -TheMealDB API
   -Context API
   -Custom Hooks-

   _Project Structure_
   
<img width="152" alt="image" src="https://github.com/user-attachments/assets/19139db6-920c-4b51-bcb6-d6303cbdb8cd" />

_Make it Run_
 _Must have_
 -Node.js (16 or higher)
 -npm (comes with node.js)

_Installation_
 -Clone the repository `git clone https://github.com/FrancesReagan/recipe-discovery-app/tree/main`
 
 -`cd recipe-discovery-app`
 
 _-Install dependencies and required packages:_ `npm install` , `npm install react-router-dom`, `npm install tailwindcss@tailwindcss/vite`
 
 _Configure Tailwind CSS:_ Update your vite.config.js: `import { defineConfig } from 'vite'`,`import react from '@vitejs/plugin-react'`,
 `import tailwindcss from '@tailwindcss/vite'`,`export default defineConfig({ plugins: [react(), tailwindcss()]})`

 _Start the development server_
 -`npm run dev`
 -open your browser: Navigate to http://localhost:5173 to view the application--or within VS Cod `ctrl click` hyperlink.

 _Available Scripts_
 -`npm run dev` 
 -`npm run build`
 -`npm run preview`

 _API Endpoints Used_
 -This app uses the free TheMealDB API:
 
 -categories:https://www.themealdb.com/api/json/v1/1/categories.php
 
 -receipes by category:https://www.themealdb.com/api/json/v1/1/filter.php?c={category}
 
 -recipe details:https://www.themealdb.com/api/json/v1/1/lookup.php?i={id}
 
 -search recipes:https://www.themealdb.com/api/json/v1/1/search.php?s={query}

 _How to Use_
 -Browse Recipes: start on the homepage to see all the recipe categories; click any category card to view recipes in that category; click any recipe card to see full details with ingredientsand instructions.
 
 -Searching for Recipes: use the search bar in the navigation bar; type a recipe name or ingredient; press enter to see search results.
 
 -Managing Favorites: click on the `🤍` heart icon on any recipe to add to the favorites; click on the `❤️` red heart to remove from favorites; visit the "favorites" page to see all the saved recipes you love;
    favorites are automatically saved and persist between browser sessions.

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
__Key React Concepts__
-Custom Hooks: useFetch, useLocalStorage
-Context API
-React Router
-State Management: FavoritesContext, Local State
-Component Composition
-Error Handling

_Styling Approach_: Tailwind CSS; Component-based; Mobile-first

______________________________________________________________________________________________________________________________________________________________________________________________________________________

 







