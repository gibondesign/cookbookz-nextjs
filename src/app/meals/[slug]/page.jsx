import Image from "next/image";
import { getMeal } from "../../../../lib/meals";
import classes from "./page.module.css";
import { notFound } from "next/navigation";

export default function MealsSlugPage({ params }) {
	const meal = getMeal(params.slug);

    if (!meal) {
        notFound()
    }
	return (
		<>
			<header className={classes.header}>
				<div className={classes.image}>
					<Image src={meal.image} fill />
				</div>
				<div className={classes.headerText}>
					<h1>{meal.title}</h1>
					<p className={classes.creator}>	by <a href={meal.creator_email}>{meal.creator}</a>
					</p>
					<p className={classes.summary}>{meal.summary}</p>
				</div>
			</header>
			<main className={classes.main}>
				<p className={classes.instructions}>{meal.instructions}</p>
			</main>
		</>
	);
}
