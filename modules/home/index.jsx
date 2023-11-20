import React from "react";
import style from "./style.module.scss";
import heroImage from "../../public/reward_hero.png";
import Image from "next/image";
import { useForm } from "react-hook-form";
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
					<div className={style.lower}>
						<form className={style.form}>
							<h3>Fill in your details</h3>
							<div className={style.form_inputs}>
								<div className={style.form_input}>
									<label htmlFor="">First Name</label>
									<input type="text" />
								</div>
								<div className={style.form_input}>
									<label htmlFor="">First Name</label>
									<input type="text" />
								</div>
								<div className={style.form_input}>
									<label htmlFor="">First Name</label>
									<input type="text" />
								</div>
							</div>

							<button className={style.button}>
								Submit and Spin
							</button>
						</form>
						<div className="">Spinner Goes Here</div>
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
							Transact, Predict and Win!
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

						<p className={`${style.spinner_text} ${style.top}`}>
							<span className={style.bold}>Note:</span> Correct
							Prediction = 1 Point. The top predictor of the month
							wins N20,000 , Everybody starts from 0 points every
							month!
						</p>
					</div>
					<div className={style.lower}>
						<div className="">Spinner Goes Here</div>
						<form className={style.form}>
							<h3>Fill in your details</h3>
							<div className={style.form_inputs}>
								<div className={style.form_input}>
									<label htmlFor="">First Name</label>
									<input type="text" />
								</div>
								<div className={style.form_input}>
									<label htmlFor="">First Name</label>
									<input type="text" />
								</div>
								<div className={style.form_input}>
									<label htmlFor="">First Name</label>
									<input type="text" />
								</div>
							</div>

							<button className={style.button}>
								Submit and Spin
							</button>
						</form>
					</div>
				</div>
			</section>

			<section className={style.leadBoard}>
				<div className={style.leadBoard_container}>
					<h3>Predict & Win Leader Board</h3>
					<div className={style.leadBoard_leaders}>
						<div className={style.leadBoard_player}>
							<span>Qudus Olatunji</span> <span>10 points</span>
						</div>
						<div className={style.leadBoard_player}>
							<span>Qudus Olatunji</span> <span>10 points</span>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
