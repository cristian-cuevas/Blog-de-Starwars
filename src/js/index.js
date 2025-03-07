///import react into the bundle
import React from "react";
import { createRoot } from 'react-dom/client';
//include your index.scss file into the bundle
import "../styles/index.css";

//import your own components
import Layout from "./layout";

//render your react application
createRoot(document.querySelector("#app")).render(<Layout />);