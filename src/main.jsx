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
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';

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
      },
      {
        path: "/signUp",
        element: <SignUpPage />
      },
      {
        path: "/signIn",
        element: <SignInPage />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
