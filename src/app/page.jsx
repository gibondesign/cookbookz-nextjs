import Link from "next/link";
import classes from "./page.module.css";
import ImageSlideshow from "@/components/ImageSlideshow";

export default function Home() {
	return (
		<main>
			<section className={classes.header}>
				<div className={classes.slideshow}>
          <ImageSlideshow />
        </div>
        <div>
          <div className={classes.hero}>
            <h1>Explore new tastes</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, animi?</p>
          </div>
          <div className={classes.cta}>
            <Link href='./community'>Join the Community</Link>
            <Link href='./meals'>Explore Meals</Link>
          </div>
        </div>
			</section>
      <section className={classes.section}>
          <h2>How it works</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

        <section className={classes.section}>
          <h2>Why NextLevel Food?</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
   
		</main>
	);
}
