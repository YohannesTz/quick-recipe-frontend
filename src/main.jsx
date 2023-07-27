import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import HomePage from './pages/HomePage';
import RecipesPage from './pages/RecipesPage';
import PostPage from './pages/PostPage';
import RecipeDetailPage from './pages/RecipeDetailPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/recipies",
        element: <RecipesPage />
      },
      {
        path: "/recipe/:id",
        element: <RecipeDetailPage />
      },
      {
        path: "/post",
        element: <PostPage />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
