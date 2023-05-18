// import React, { useContext } from "react";
// import { Route, Navigate } from "react-router-dom";
// import UserContext from "./UserContext";

// const PrivateRoute = ({ path, element }) => {
//   const { user } = useContext(UserContext);

//   return user ? <Route path={path} element={element} /> : <Navigate to="/login" />;
// };

// export default PrivateRoute;

// import React from 'react';
// import { Navigate, Outlet } from 'react-router-dom';

// const PrivateRoute = () => {
//     const auth = true; // pavyzdinis kodas - jūsų logikoje turėtumėte nustatyti, ar vartotojas yra autorizuotas

//     // Jei autorizuotas, grąžinkite vaikinių elementų rinkinį (Outlet) su QuestionsPage
//     // Jei ne, peradresuokite vartotoją į prisijungimo puslapį
//     return auth ? <Outlet /> : <Navigate to="/login" />;
// }

// export default PrivateRoute;

