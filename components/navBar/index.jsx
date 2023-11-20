import style from "./style.module.scss";
const NavBar = () => {
	return (
		<nav className={style.nav}>
			<div className={style.container}>
				<span className="">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="138"
						height="35"
						fill="none"
						viewBox="0 0 138 35"
					>
						<path
							fill="#00425F"
							fillRule="evenodd"
							d="M11.783 25.831l1.567 1.56 2.512-1.807-1.894-1.885a7.54 7.54 0 001.301-4.245c0-4.197-3.418-7.6-7.634-7.6-4.217 0-7.635 3.403-7.635 7.6 0 4.197 3.418 7.598 7.635 7.598a7.62 7.62 0 004.148-1.22zm-8.604-6.377c0-2.45 1.995-4.435 4.456-4.435 2.46 0 4.456 1.985 4.456 4.435 0 2.45-1.996 4.435-4.456 4.435-2.461 0-4.456-1.986-4.456-4.435zm107.093-1.313l.457-2.427s-3.53-1.067-6.4.91v9.708h3.048v-7.888c1.219-.91 2.895-.303 2.895-.303zm-75.283.65a6.288 6.288 0 00-.379 2.188c0 .801.106 1.544.318 2.23.211.685.544 1.279 1.002 1.781.457.502 1.04.9 1.75 1.192.708.291 1.553.437 2.535.437.641 0 1.228-.054 1.76-.163a7.163 7.163 0 001.33-.387l-.43-2.483c-.355.149-.744.257-1.166.325a7.485 7.485 0 01-1.187.102c-1.036 0-1.762-.265-2.178-.794-.416-.53-.624-1.276-.624-2.24 0-.91.221-1.642.665-2.199.443-.556 1.114-.835 2.015-.835.422 0 .804.041 1.145.123.34.08.655.176.941.285l.634-2.423a7.651 7.651 0 00-1.39-.438 7.56 7.56 0 00-1.576-.153c-.873 0-1.65.15-2.332.448A5.217 5.217 0 0036.083 17a5.236 5.236 0 00-1.094 1.791zm36.639-1.29c-1.981 0-2.134 2.123-2.134 2.123h4.267S73.61 17.5 71.628 17.5zm-2.134 4.246h6.858c.305-1.82 0-6.37-4.572-6.37-3.048 0-5.181 2.123-5.181 5.46 0 4.247 2.743 5.764 5.79 5.764 2.134 0 3.658-.606 3.658-.606l-.304-2.427s-1.525.455-3.048.455c-3.048 0-3.201-2.276-3.201-2.276zM97.219 17.5c-1.981 0-2.134 2.124-2.134 2.124h4.268S99.2 17.5 97.219 17.5zm-2.134 4.247h6.858c.305-1.82 0-6.37-4.571-6.37-3.049 0-5.182 2.123-5.182 5.46 0 4.247 2.743 5.764 5.79 5.764 2.135 0 3.658-.606 3.658-.606l-.305-2.427s-1.523.455-3.047.455c-3.048 0-3.2-2.276-3.2-2.276z"
							clipRule="evenodd"
						></path>
						<path
							fill="#00425F"
							d="M32.267 26.333H29.22v-10.71h3.047v10.71zM27.063 15.625l.005 9.702s-1.53 1.218-4.882 1.218c-3.048 0-4.724-1.517-4.724-4.854v-6.067h3.048v6.067c0 2.124 1.066 2.275 1.98 2.275.915 0 1.526-.455 1.526-.455l-.001-7.886h3.048zM48.506 19.468c.3-.324.61-.661.93-1.012.32-.35.63-.698.93-1.042.3-.345.582-.672.848-.982.266-.31.494-.58.684-.81h3.625c-.723.827-1.429 1.616-2.118 2.367a58.57 58.57 0 01-2.26 2.327c.41.367.831.805 1.269 1.315.436.51.858 1.037 1.267 1.581a23.048 23.048 0 011.985 3.12h-3.505a59.693 59.693 0 00-.745-1.173 28.904 28.904 0 00-.888-1.286c-.314-.428-.644-.84-.991-1.235a8.346 8.346 0 00-1.031-1v4.694h-3.048V12.947l3.048-.535v7.056zM57.435 12.948l3.048-.536v3.157h3.016v2.524h-3.016v3.767c0 .638.112 1.147.337 1.527.225.38.678.57 1.36.57a5.857 5.857 0 001.964-.346l.43 2.362a8.71 8.71 0 01-1.228.387c-.45.108-1.002.162-1.656.162-.833 0-1.521-.111-2.066-.335-.546-.224-.982-.537-1.31-.937-.327-.4-.556-.886-.685-1.456a8.528 8.528 0 01-.194-1.893v-8.953zM82.883 26.536c-.887-.013-1.606-.109-2.158-.285-.553-.176-.99-.424-1.31-.744a2.452 2.452 0 01-.654-1.16 6.232 6.232 0 01-.174-1.537v-9.863l3.048-.536V22.2c0 .272.02.516.061.733.041.217.12.4.236.55.115.15.282.271.501.366.218.096.511.156.88.183l-.43 2.505zM89.767 26.536c-.887-.013-1.606-.109-2.158-.285-.552-.176-.99-.424-1.309-.744a2.456 2.456 0 01-.655-1.16 6.237 6.237 0 01-.174-1.537v-9.863l3.048-.536V22.2c0 .272.02.516.062.733.04.217.119.4.235.55.116.15.283.271.501.366.218.096.512.156.88.183l-.43 2.505z"
						></path>
						<mask
							id="mask0_9_27"
							style={{ maskType: "luminance" }}
							width="20"
							height="26"
							x="115"
							y="10"
							maskUnits="userSpaceOnUse"
						>
							<path
								fill="#fff"
								fillRule="evenodd"
								d="M115.016 12.402c0-.666 8.428-2.103 14.081-2.103 2.451 0 4.38.27 4.874.99 2.545 3.346-15.373 24.334-16.866 23.697-1.197-.318 9.553-13.677 7.761-19.086-.894-2.86-9.85-2.542-9.85-3.498z"
								clipRule="evenodd"
							></path>
						</mask>
						<g mask="url(#mask0_9_27)">
							<path
								fill="#EE312A"
								d="M110.099 39.894h29.036V5.404h-29.036v34.49z"
							></path>
						</g>
						<mask
							id="mask1_9_27"
							style={{ maskType: "luminance" }}
							width="8"
							height="9"
							x="130"
							y="0"
							maskUnits="userSpaceOnUse"
						>
							<path
								fill="#fff"
								fillRule="evenodd"
								d="M130.239 4.404c0-2.134 1.738-3.862 3.881-3.862A3.87 3.87 0 01138 4.404a3.87 3.87 0 01-3.88 3.864 3.871 3.871 0 01-3.881-3.864z"
								clipRule="evenodd"
							></path>
						</mask>
						<g mask="url(#mask1_9_27)">
							<path
								fill="#EE312A"
								d="M125.322 12.841h17.595V-4.03h-17.595V12.84z"
							></path>
						</g>
					</svg>
				</span>
			</div>
		</nav>
	);
};

export default NavBar;
