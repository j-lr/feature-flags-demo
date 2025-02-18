import { userTypes } from "./user_types.js";

function generateRandomId() {
	return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
		const r = (Math.random() * 16) | 0;
		const v = c === "x" ? r : (r & 0x3) | 0x8;
		return v.toString(16);
	});
}

const users = [
	{ id: generateRandomId(), label: "Admin", value: userTypes.admin },
	{ id: generateRandomId(), label: "Tester", value: userTypes.tester },
	{
		id: generateRandomId(),
		label: "Product Manager",
		value: userTypes.productManager,
	},
	{
		id: generateRandomId(),
		label: "Alpha Tester",
		value: userTypes.alphaTester,
	},
	{ id: generateRandomId(), label: "Beta Tester", value: userTypes.betaTester },
	{ id: generateRandomId(), label: "User 1", value: userTypes.user },
	{ id: generateRandomId(), label: "User 2", value: userTypes.user },
	{ id: generateRandomId(), label: "User 3", value: userTypes.user },
	{ id: generateRandomId(), label: "User 4", value: userTypes.user },
	{ id: generateRandomId(), label: "User 5", value: userTypes.user },
	{
		id: generateRandomId(),
		label: "Premium User 1",
		value: userTypes.premiumUser,
	},
	{
		id: generateRandomId(),
		label: "Premium User 2",
		value: userTypes.premiumUser,
	},
	{
		id: generateRandomId(),
		label: "Premium User 3",
		value: userTypes.premiumUser,
	},
];

export { users };
