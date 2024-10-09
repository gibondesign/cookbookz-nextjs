'use client'
import ImagePicker from "@/components/ImagePicker";
import classes from "./page.module.css";
import shareNewMeal from "../../../../lib/shareMeal";
import MealFormSubmit from "@/components/MealFormSubmit";
import { useFormState } from 'react-dom';





export default function ShareMealPage() {

	const [state, formAction] = useFormState(shareNewMeal, {message: null})
	

	
	return (
		<>
			<header className={classes.header}>
				<h1>
					Share your <span className={classes.highlight}>favorite meal</span>
				</h1>
				<p>Or any other meal you feel needs sharing!</p>
			</header>
			<main className={classes.main}>
				<form className={classes.form} action={formAction}>
					<div className={classes.row}>
						<p>
							<label htmlFor="name">Your name</label>
							<input type="text" id="name" name="name" required />
						</p>
						<p>
							<label htmlFor="email">Your email</label>
							<input type="email" id="email" name="email" required />
						</p>
					</div>
					<p>
						<label htmlFor="title">Title</label>
						<input type="text" id="title" name="title" required />
					</p>
					<p>
						<label htmlFor="summary">Short Summary</label>
						<input type="text" id="summary" name="summary" required />
					</p>
					<p>
						<label htmlFor="instructions">Instructions</label>
						<textarea
							id="instructions"
							name="instructions"
							rows="10"
							required></textarea>
					</p>
					<ImagePicker label="Image picker" />
					{state.message && <p>{state.message}</p>}
					<div className={classes.actions}>
						<MealFormSubmit />
					</div>
				</form>
			</main>
		</>
	);
}
