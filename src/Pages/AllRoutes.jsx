import React from "react";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../Components/Admin/Dashboard";
import  {Admin}  from "./Admin";
import Cart from "./Cart";
import ErrorPage from "./ErrorPage";
// import { Admin } from "./Admin";
import HomePage from "./HomePage";
import ProductDetail from "./ProductDetail";
import ProductPage from "./ProductPage";
import {EditProducts} from "./EditProducts";
import Ordercheck from './ordercheck'
import { PrivateRoute } from "../Components/PrivateRoute";

export const AllRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/cart" element={<Cart />} />
			<Route path="/dashboard/admin" element={<Admin/>}/>
			<Route path="/dashboard/edit/:id" element={
			
				<EditProducts/>
			
			}/>
			<Route path="/dashboard" element={<Dashboard />} />
			<Route path="*" element={<ErrorPage />} />
			<Route path="/product" element={<ProductPage/>} />
			<Route path="/ordercheck" element={<Ordercheck />} />
			<Route path="/product/:id" element={<ProductDetail/>} />
		</Routes>
	);
};
