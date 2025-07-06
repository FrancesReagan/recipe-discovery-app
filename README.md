__🍴🍳🥘Recipe Discovery App🍴🍳🥘__

A simple React application that will help users discover new recipes from around the world and save their favorites to try making later. 
Built  with modern React patterns and TheMealDB API.
---------------------------------------------------------------------------------------------------------------------------------
🔭__Home Page__🔭
<img width="766" alt="image" src="https://github.com/user-attachments/assets/ad271980-331d-41e8-9c0e-2a294e582fa5" />
------------------------------------------------------------------------------------------------------------------------------

🍖__Beef Category Search__🍖
<img width="749" alt="image" src="https://github.com/user-attachments/assets/cbd5fdd5-d178-4746-b292-ae88e63d995c" />
----------------------------------------------------------------------------------------------------------------------------

🍲__Beef Strognaff Recipe Card Detail__🍲
<img width="750" alt="image" src="https://github.com/user-attachments/assets/e6a314ee-8c2e-4f47-bc35-9e33878a5703" />
--------------------------------------------------------------------------------------------------------------------------

💖__Favorites saved__💖
<img width="768" alt="image" src="https://github.com/user-attachments/assets/6b7daedb-f1b1-4868-92eb-9b27462388ce" />

--------------------------------------------------------------------------------------------------------------------------
😵‍💫__If typo happens in search__😵‍💫
<img width="754" alt="image" src="https://github.com/user-attachments/assets/ce530a33-9e21-4b68-a935-9d7cdb9ce695" />

-----------------------------------------------------------------------------------------------------------------------------

🍫__Search results for chocolate correctly typed__🍫
<img width="754" alt="image" src="https://github.com/user-attachments/assets/68c56eeb-dd94-44e5-9c3f-e9fac58913ea" />



____________________________________________________________________________________________________________________________

__🍲Features__🍲

🧐_Browse Recipe Categories_🧐

 -view all recipe categories from Beef, Chicken, Seafood, Dessert, etc. dishes.
 
 -category cards with images and descriptions of each dish.
 
 -click any category to explore receipes in that category.
 
 -click any recipe image and full recipe description is given.
 

 🕵️‍♂️_Search Recipes_🕵️‍♂️
 
  -real-time search functionality in the navigation bar.
  
  -search by recipe name or ingredients.
  
  -dedicated search results page.

 _Favorites Management_
 
  -save your favorite recipes with one click.
  
  -persistent storage using browser localStorage.
  
  -view all saved recipes on the favorites page.
  
  -easy removal of recipes from favorites.

 🔎_Recipe Details_🔎
  -complete recipe information with high-quality items.
  -detailed ingredients list with measurements.
  -step-by-step cooking instructions.
  -recipe category and cuisine country origin tags.

  💫_Modern Design_💫
   -clean and responsive design built with Tailwind CSS.
   -mobile-friendly layout that works on all devices.
   -smooth hover effects and intutive navigation.
   -professional loading states and error handling.

  🚀 _Tech Used_🚀
   -React 19
   -React Router DOM
   -Tailwind CSS
   -Vite 6.35
   -TheMealDB API
   -Context API
   -Custom Hooks-
   
--------------------------------------------------------------------------------------------------------------------------------------
   _Project Structure_
   
<img width="152" alt="image" src="https://github.com/user-attachments/assets/19139db6-920c-4b51-bcb6-d6303cbdb8cd" />

-----------------------------------------------------------------------------------------------------------------------------------------
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
 
 -Managing Favorites: click on the "`🤍`" white heart icon on any recipe to add to the favorites; click on the "`❤️`" red heart to remove from favorites; visit the "favorites" page to see all the saved recipes you love;
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

 🙏__Acknowledgements__🙏
 -2025-RTT-23 PS instructors A.Tavarez and C.Wright and my fellow classmates
 -TheMealDB
 -TailwindCSS
 -Vite
 -React

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
🤔__Reflection__🤔

Most challenging part of this project was implementing the favorites functionality with persistent storage using localStorage. I initally had challenges with state synchronization--that is ensuring that the favorites
state stayed consistent across different pages and browser refreshes. Other challenges included: Context API- making sure the FavoritesContext was properly set up to share state across all components; Data Persistence--
getting the useLocalStorage hook to work correctly with React's state management.

The main difficulty was learning to understand how to combine React's state management with browswer storage. I learned that localStorage only stores strings, so I needed to use JSON.stringify() and JSON.parse() to convert
my recipe objects. I also had to handle cases where localStorage might not be available or might fail. The solution was to create the custom hook "useLocalStorage" that abstracts away all the complexity of localStorage management
and integrates easily with React's state system. This hook handles: reading from localStorage on the intial load; automatically saves to localStorage when the state changes; error handling for storage failures; converting between
JavaScript objects and JSON strings.

Our class made the choice to structure the application around the custom hooks "useFetch" and "useLocalStorage" rather then using external libraries or more complex state mangement approaches.This approach helped me learn about 
building custom hooks to handle state management in React and React's lifecycle methods. These hooks are simple, resuable, and customizable for later use--which is great.
This customization enabled the class to tailor the hooks to the recipe discovery app needs.

  _What the `useFetch` hook does_
  ---it automatically manages the entire lifecycle of an API call so components don't have to. Automatica loading states---so eliminated "boilerplate" code in components; centralized error handling---as all API errors are handled consistently;
  simple API--as components just destructure what they need; and null intial state--prevents false positives in conditional rendering.
  
  _The API call goes through 3 stages:_ "loading"--fetching data; "success"--yes received the data; "Error"---something went wrong.
 -in the code:
useFetch Hook Design:

`function useFetch(){

   const[data,setData]=useState(null); //actual data from API//
   
   const[loading, setLoading]=useState(true); //are we still fetching?//
   
   const[error, setError]=useState(null); //did something go wrong?//
   
   //...
   
  return {data,loading,error};
  
  } `
  

  Without this custom hook --every component would need to use a useEffect function---example:

  ---------------------------------------------------------------------------------------------------------------------------------------

  `function RecipeCard(){
     const [recipes,setRecipes] = useState(null);
     const [loading, setLoading] = useState(true);
     const [error, setError] = useState(null);

     useEffect(() => {
      const fetchData = async () => {
       try {
         setLoading(true);
         setError(null);
         const response = await fetch(url);
         if(!response.ok) throw new Error("Failed");
         const result = await response.json();
         setRecipes(result);
         } catch (error) {
            setError(error.message);
         } finally {
            setLoading(false);
         }
        };
         fetchData();
        },[]);`

----------------------------------------------------------------------------------------------------------------------------------------

    So the useFetch is wonderful across all components as they know what is happening, destructing is easy, and consistent across app:).

____________________________________________________________________________________________________________________________________________

`FavoritesContext` -- this Context API was used over "prop drilling" as multiple components needed access to favorites (the navbar, recipecard,favoritespage); the way the component tree was structures it would have required passing props through many levels;
this Context API provides clean separation beteen the UI logic and the state management; and best of all--it will scale well --if anyone wants to expand this app in the future.

_________________________________________________________________________________________________________________________________________________

Technincal challenges: 

-Routing and Navigation and Tailwinds CSS:
 -setting up React Router with multiple dynamic routes was totally new to me---it taught me how to use `useParams()` to capture route parameters like recipe Ids and category names.; implement search functionality with `useSearchParams()` for query strings;
  handle navigation well with useNavigate(). Getting the Tailwinds CSS just right was still a bit of a headache---I like Tailwinds CSS but I am still learning it--so the design I will improve on in the feature.

-API integration: 

 -working with the MealDB API taught me: how to handle different API endpoints for different data types; manage asynchronous data fetching with proper loading states; parsing complex API responses with nested ingredient/measuremnent data.


-Component Architecture:

 -This app is structured with clear separation of concerns: -`Pages`: handle routing and handle data fetching (they choose what data to fetch and when); `Hooks`: provide the reusable logic for HOW to fetch data consistently (useFetch) and state management   
                                                              (useLocalStorage); `Components`:reusable UI elements (navbar, recipecard, etc); `Context`: global state sharing.

____________________________________________________________________________________________________________________________________________________________________________________________________

_To recap---the `Recipe Discovery App` project taught me:_
-React Hooks: provided an introduction to `useState`, `useEffect`, `useContext`, and custom hooks `useFetch` and `useLocalStorage`.
-State management patterns: how to manage complex state with `Context API` and `localStorage`, including handling data persistence and synchronization across components.
-Tailwind CSS: using `Tailwind CSS` for responsive, utility-first styling was a great choice for this app--yet, I am still learning the intricacies of Tailwind's utlity classes and responsive design patterns, but this project gave me alot of practice with this    
  framework.
-API integration best practices: handling different API endpoints (as mentioned above) for different data types; managing asynchronous data fetching with proper loading states; parsing complex API responses with nested ingredient/measurement data.
-Component Architecture: the importance of thinking out the design functionality first then creating a clear separation between pages, components, hoooks, and context for a favorable outcome and maintainable code.
-Thinking about the user's experience: creating features like `favorites`, `search functionality`, `loading states`, and `error handling` all are important and help the user enjoy and so keep using the application.

_Areas for Expansion_
 -features: add recipe rating and review functionality; implement user authentication for personalized favorites; add recipe filtering and sorting options; include nutritional information display; and add offline functionality.

_Things to think about_
 -The `Recipe Discovery App` taught me that modern web development requires seasoned coding skills, ability to take requirements and translate it into good code, patience, and persistence. For the latter, debugging the Tailwind CSS configuration issues really increased my patience levels:). Again, the importance of planning ahead and creating a sound architecture that supports all the functionality and beauty that the requirements for the App laid out to achieve---this was really driven home with this project.

