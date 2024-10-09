"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

function isInputInvalid(input) {
	return !input || (typeof input === "string" && input.trim() === "");
}

const inputLabels = {
	summary: "short summary",
	creator: "your name",
	creator_email: "your email"
};

export default async function shareNewMeal(prevState ,formData) {
	const mealData = {
		title: formData.get("title"),
		summary: formData.get("summary"),
		instructions: formData.get("instructions"),
		image: formData.get("image"),
		creator: formData.get("name"),
		creator_email: formData.get("email"),
	};

	for (const [key, value] of Object.entries(mealData)) {
		if (isInputInvalid(value)) {
			return {
                message: `invalid ${inputLabels[key] || key} input`
            }
		}
	}

	await saveMeal(mealData);
	revalidatePath("/meals", "page");
	redirect("/meals");
}
