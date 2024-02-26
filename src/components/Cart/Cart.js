import React, { useState } from 'react';
import '../../Customer/styles/Cart.css';
import SearchComponent from './SearchComponent';
import ShowItemComponent from './ShowItemComponent';
import UserCartComponent from './UserCartComponent';
import Dosa from "../../Customer/images/dosa.jpg";
import Chola from "../../Customer/images/chhola.jpg";
import Idli from "../../Customer/images/idli.jpg";
import MasalaDosa from "../../Customer/images/masala.jpg";
import Paneer from "../../Customer/images/paneer.jpg";
import Gujrati from "../../Customer/images/gujrati.jpeg";
import Header from '../Layout/Header';
import Jalebi from "../../Customer/images/jalebi.jpeg";
import Samosa from "../../Customer/images/samosa.jpg";
import Pizza from "../../Customer/images/pizza.jpeg";
import Pasta from "../../Customer/images/pasta.jpeg";
import Rasmalai from "../../Customer/images/rasmalai.jpeg";
import Rajma from "../../Customer/images/rajma.jpeg";

function Cart() {
	const [items, setItems] = useState([
		{
			id : 1,
			name: "Jalebi",
			description:
			  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, ab!",
			image: Jalebi,
			price: 100,
		  },
		  {
			id : 2,
			name: "Samosa",
			description:
			  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, ab!",
			image: Samosa,
			price: 30,
		  },
		  {
			id : 3,
			name: "Margherita Pizza",
			description:
			  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, ab!",
			image: Pizza,
			price: 260,
		  },
		  {
			id : 4,
			name: "Mix Sauce Pasta",
			description:
			  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, ab!",
			image: Pasta,
			price: 220,
		  },
		  {
			id : 5,
			name: "Rasmalai",
			description:
			  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, ab!",
			image: Rasmalai,
			price: 80,
		  },
		  {
			id : 6,
			name: "Rajma Chawal",
			description:
			  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, ab!",
			image: Rajma,
			price: 120,
		  },
		  {
			id : 7,
			name: "Masala Dosa",
			description:
			  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, ab!",
			image: Dosa,
			price: 200,
		  },
		  {
			id: 8,
			name: "Cholle Bhature",
			description:
			  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, ab!",
			image: Chola,
			price: 250,
		  },
		  {
			id: 9,
			name: "Idli Sambar",
			description:
			  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, ab!",
			image: Idli,
			price: 300,
		  },
		  {
			id: 10,
			name: "Dosa Platter",
			description:
			  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, ab!",
			image: MasalaDosa,
			price: 100,
		  },
		  {
			id: 11,
			name: "Shahi Paneer",
			description:
			  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, ab!",
			image: Paneer,
			price: 400,
		  },
		  {
			id: 12,
			name: "North Indian Thali",
			description:
			  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, ab!",
			image: Gujrati,
			price: 500,
		  }
	  ]);

	const [cartItems, setCartItems] = useState([]);
	const [searchItem, setSearchItem] = useState('');

	const addItemToCartFunction = (foodItem) => {
		const alreadyItems = cartItems
							.find(item => item.product.id === foodItem.id);
		if (alreadyItems) {
			const latestCartUpdate = cartItems.map(item =>
				item.product.id === foodItem.id ? { 
				...item, quantity: item.quantity + 1 } 
				: item
			);
			setCartItems(latestCartUpdate);
		} else {
			setCartItems([...cartItems, {product: foodItem, quantity: 1}]);
		}
	};

	const deleteItemFromCartFunction = (foodItem) => {
		const updatedCart = cartItems
							.filter(item => item.product.id !== foodItem.id);
		setCartItems(updatedCart);
	};

	const totalAmountCalculationFunction = () => {
		return cartItems
			.reduce((total, item) => 
						total + item.product.price * item.quantity, 0);
	};

	const itemSearchUserFunction = (event) => {
		setSearchItem(event.target.value);
	};

	const filterItemFunction = items.filter((course) =>
		course.name.toLowerCase().includes(searchItem.toLowerCase())
	);

	return (
		<>
		<Header/>
		<div className="Cart">
			<SearchComponent searchItem={searchItem} 
							itemSearchUserFunction=
								{itemSearchUserFunction} />
			<main className="Cart-main">
				<ShowItemComponent
					items={items}
					filterItemFunction={filterItemFunction}
					addItemToCartFunction={addItemToCartFunction}
				/>

				<UserCartComponent
					cartItems={cartItems}
					deleteItemFromCartFunction={deleteItemFromCartFunction}
					totalAmountCalculationFunction={
						totalAmountCalculationFunction
					}
					setCartItems={setCartItems}
				/>
			</main>
		</div>
	</>
	);
}

export default Cart
