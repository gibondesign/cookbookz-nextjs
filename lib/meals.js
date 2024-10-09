import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import fs from "node:fs";

const db = sql("meals.db");

export async function getMeals() {
	await new Promise((res) => setTimeout(res, 1000));
	// throw new Error('Erorr on loading meal')
	return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
	return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

export async function saveMeal(meal) {
	meal.slug = slugify(meal.title, { lower: true });
	meal.instruction = xss(meal.instructions);

	const extension = meal.image.name.split(".").pop();
	let filename = `${meal.slug}.${extension}`;
	let counter = 1;

	while (fs.existsSync(`public/images/${filename}`)) {
		counter++;
		filename = `${meal.slug}${counter}.${extension}`;
	}

	const stream = fs.createWriteStream(`public/images/${filename}`);
	const bufferedImage = await meal.image.arrayBuffer();

	stream.write(Buffer.from(bufferedImage), (error) => {
		if (error) {
			throw new Error("img uplaod faild.");
		}
	});

	meal.image = `/images/${filename}`;

	db.prepare(
		`INSERT INTO meals (title, summary, instructions, creator, creator_email, image, slug) VALUES (
		@title,
		@summary,
		@instructions,
		@creator,
		@creator_email,
		@image,
		@slug
		)
		`
	).run(meal);
}
