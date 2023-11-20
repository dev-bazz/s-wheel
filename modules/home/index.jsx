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

			<section
				className={style.spinner}
				aria-labelledby="spinner"
			>
				<div className={style.container}>
					<div className="">
						<h2
							className={style.spinner_title}
							id="spinner"
						>
							Transact, Spin and Win!
						</h2>
						<p className={`${style.spinner_text} ${style.top}`}>
							<span className={style.bold}>Quickteller</span> is
							giving our wonderful football fans a chance to WIN BIG
							every week by spinning the wheel with their reference
							code in the Transact, Spin and WIN Promo.
						</p>
						<p className={style.spinner_text}>
							A reference code is only valuable for 7 days and can
							only be used once.
						</p>
					</div>
				</div>
			</section>
		</>
	);
}
