import React from "react";
import style from "./style.module.scss";
import heroImage from "../../public/reward_hero.png";
import Image from "next/image";

export default function Home() {
	return (
		<>
			<section
				className={style.hero}
				aria-labelledby="hero-title"
			>
				<div className={style.container}>
					<div className={style.hero_content}>
						<h1
							className={style.hero_title}
							id="hero-title"
						>
							Quickteller Customer Reward Program
						</h1>
						<p className={style.hero_text}>
							Unlock the opportunity to win big by Playing with your
							unique reference code.
						</p>
						<button className={style.button}>Transact Now</button>
					</div>
					<div className="">
						<Image
							src={heroImage}
							width={520}
							height={480}
						/>
					</div>
				</div>
			</section>
		</>
	);
}
