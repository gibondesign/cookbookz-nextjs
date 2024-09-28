"use client";
import { useState } from "react";
import classes from "./ImagePicker.module.css";
import Image from "next/image";

export default function ImagePicker({ label }) {
	const [pickedImage, setPickedImage] = useState(null);

	function imageChangeHandler(e) {
		const file = e.target.files[0];

		if (!file) {
			setPickedImage(null);
			return;
		}

		const reader = new FileReader();

		reader.onload = () => {
			setPickedImage(reader.result);
		};

		reader.readAsDataURL(file);
	}

	return (
		<div className={classes.picker}>
			<label htmlFor="image">{label}</label>
			<div className={classes.controls}>
				<div className={classes.preview}>
					{pickedImage ? (
						<Image src={pickedImage} alt="img uploaded by user" fill />
					) : (
						<p>no image uploaded</p>
					)}
				</div>
				<button type="button" className={classes.button}>
					<p>upload image</p>
					<input
						className={classes.input}
						type="file"
						id="image"
						accept="image/png, image/jpeg"
						name="image"
						onChange={imageChangeHandler}
                        required
					/>
				</button>
			</div>
		</div>
	);
}
