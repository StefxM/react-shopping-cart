import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import ProductContext from './contexts/ProductContext';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		setCart([...cart, item])
	};

	return (
		<div className="App">
			<ProductContext.Provider value={{ products, addItem }}>
			<Navigation />

			{/* Routes */}
			<Route exact path="/">
				<Products />
			</Route>

			<Route path="/cart">
				<ShoppingCart />
			</Route>
			</ProductContext.Provider>
		</div>
	);
}

export default App;
/*
**Step 1 - Add item functionality** 

- In `App.js` there is a function called `addItem`. Finish writing the logic in this function to be able to add the given item to the shopping cart

+

**STEP 3 - Providing data with ProductContext**

- Now that we've created our `ProductContext` we can import into our `App.js`. Now we can start providing data across our application!

- Wrap all of your components/routes in `App.js` inside of `ProductContext.Provider` component.

- Next pass a value prop to your `Provider`.

- In the value prop we'll pass in the products state, and an addItem function that will allow us to add books to the cart.

```js
<ProductContext.Provider value={{ products, addItem }}>
```

- Now that we're providing our products state and addItem function we can simplify our products route a bit.

**Before**

```js
<Route exact path="/">
  <Products products={products} addItem={addItem} />
</Route>
```

**After**

```js
<Route exact path="/">
  <Products />
</Route>
```

- After refactoring you'll notice a few errors... Don't worry we'll clean those up shortly!*/