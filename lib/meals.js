import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getMeals() {
	await new Promise((res) => setTimeout(res, 1000));
	// throw new Error('Erorr on loading meal')
	return db.prepare("SELECT * FROM meals").all();
}


export function getMeal(slug) {
	return  db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug)
}

export function saveMeal(meal){

	const slug = meal.title.toLowerCase().replace(/\s+/g, '-')

	console.log(slug);

}