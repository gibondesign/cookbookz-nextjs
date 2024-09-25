import classes from "./page.module.css";
import MealsGrid from "@/components/MealsGrid";
import MealsLoading from "@/components/MealsLoading";
import { getMeals } from "../../../lib/meals";
import { Suspense } from "react";
import Link from "next/link";

async function Meals() {
	const meals = await getMeals();
	return <MealsGrid meals={meals} />;
}

export default function MealsPage() {
	return (
		<>
			<header className={classes.header}>
				<h1>
					Delicioys meals, created{" "}
					<span className={classes.highlight}>by you</span>
				</h1>
				<p>
					Choose Your favourite recipe and cook it yourself. It is easy and fun!
				</p>
				<p className={classes.cta}>
					<Link href="/meals/share">Share Your Favourite Recipe</Link>
				</p>
			</header>
			<main className={classes.main}>
				<Suspense fallback={<MealsLoading />}>
					<Meals />
				</Suspense>
			</main>
		</>
	);
}
