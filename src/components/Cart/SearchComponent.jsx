import React from 'react';

function SearchComponent({ searchMenu, menuSearchUserFunction }) {
	return (
		<header className="App-header">
			<br /><br /><br />
			<center><h1>Your Shopping Cart</h1></center><br/>
			<div className="search-bar">
				<input
					type="text"
					placeholder="Search for..."
					value={searchMenu}
					onChange={menuSearchUserFunction}
				/><br/><br/>
			</div>
			<br/>
		</header>
	);
}

export default SearchComponent;
