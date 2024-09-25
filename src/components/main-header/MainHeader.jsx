import Link from "next/link";
import classes from "./MainHeader.module.css";
import logoImg from "@/assets/logo.png";
import Image from "next/image";
import MainHeaderBackground from "./MainHeaderBackground";
import NavLink from './NavLink'

export default function MainHeader() {

	return (
		<>
			<MainHeaderBackground />
			<header className={classes.header}>
				<Link href="/" className={classes.logo}>
					<Image src={logoImg} alt="CookBookz logo" priority />
					CookBookz
				</Link>
				<nav className={classes.nav}>
					<ul>
						<li>
							<NavLink href='/meals'>Browse Meals</NavLink>
						</li>
						<li>
							<NavLink href="/community">Community</NavLink>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
}
