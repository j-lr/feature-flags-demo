import { users } from "./data/users.js";
import { Cart } from "./pages/cart.jsx";
import { Cart2 } from "./pages/cart2.jsx";
import { DropDownSelect } from "./pages/drop_down_select.jsx";
import { Feature1 } from "./pages/feature1.jsx";
import { Feature2 } from "./pages/feature2.jsx";
import { Feature3 } from "./pages/feature3.jsx";

const App = () => {
	return (
		<>
			<DropDownSelect label="Select user" options={users} />
			<div className="flex min-h-screen w-full flex-col gap-8 bg-black p-20 text-3xl text-white">
				<Feature1 />
				<Feature2 />
				<Feature3 />
				<Cart />
				<Cart2 />
			</div>
		</>
	);
};

export { App };
