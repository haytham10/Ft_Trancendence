// import { useState } from "react";
// import { useRouter } from "next/navigation";


// import Image from "next/image";


// export default function Auth() {
// 	const [activeTab, setActiveTab] = useState<'login' | 'signup'>('signup');
  
// 	const switchToLogin = () => setActiveTab('login');
// 	const switchToSignUp = () => setActiveTab('signup');
  
// 	return (
// 		<main className="flex flex-row h-screen">
// 			<section className="flex flex-col bg-[#382A39] w-2/5 relative min-[0px]:hidden sm:hidden md:flex bg-opacity-75">
// 				<div className="absolute flex-grow top-4 left-4 m-10 opacity-95">
// 					<Image src="/images/egypt.png" alt="pyramid" width={200} height={200}></Image>
// 				</div>
// 				<div className="flex-grow flex items-center justify-center">
// 					<Image src="/images/controller.png" alt="controller" width={500} height={500}></Image>
// 				</div>
// 				<div className="absolute bottom-4 right-4 m-5 opacity-75">
// 					<Image src="/images/no9at.png" alt="no9at" width={200} height={100}></Image>
// 				</div>
// 			</section>
// 			<section className="h-screen w-3/5 bg-[#1C252E] relative bg-opacity-100">
//         <div className="flex w-full h-full flex-col bg-gradient-to-t from-[#f53fa056] to-[#382A39]">
//           <div className="flex flex-row justify-around relative my-8">
//             <button
//               className={`w-[150px] h-[50px] rounded-3xl ${
//                 activeTab === 'signup'
//                   ? 'bg-[#B1216E] bg-opacity-[69%] shadow-md font-semibold text-white text-[24px]'
//                   : 'bg-white bg-opacity-75 shadow-md font-semibold text-[#342938] text-[24px] transition-all'
//               } ease-in`}
//               onClick={switchToSignUp}
//             >
//               SIGN UP
//             </button>
//             <button
//               className={`w-[150px] h-[50px] rounded-3xl ${
//                 activeTab === 'login'
//                   ? 'bg-[#B1216E] bg-opacity-[69%] shadow-md font-semibold text-white text-[24px]'
//                   : 'bg-white bg-opacity-75 shadow-md font-semibold text-[#342938] text-[24px] transition-all'
//               }`}
//               onClick={switchToLogin}
//             >
//               LOGIN
//             </button>
//           </div>
//           <div className="flex justify-center p-10 text-[75px] font-bold text-white ">
//             <h1>{activeTab === 'login' ? 'Welcome Back' : 'Get Started'}</h1>
//           </div>
//           {activeTab === 'login' ? <Login /> : <></>}
//         </div>
//       </section>
// 		</main>
// 	);
// };


// const Login: React.FC = () => {
// 	const [username, setUsername] = useState<string>("");
// 	const [password, setPassword] = useState<string>("");
// 	const router = useRouter();
  
// 	const handleLogin = (e: React.FormEvent) => {
// 	//   e.preventDefault();
// 	//   login(username, password, router);
// 	};

// 	return (
// 		<div className="container mx-auto">
// 				<div className="-mx-4 flex flex-wrap">
// 				<div className="w-full px-4">
// 					<div className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg px-10 py-16 text-center dark:bg-dark-2 sm:px-12 md:px-[60px]">
// 					<div className="mb-10 text-center md:mb-16">
// 					</div>
// 						<form onSubmit={handleLogin}>
// 							<div className="mb-6">
// 								<input
// 								type="text"
// 								name="username"
// 								placeholder="Username"
// 								className="w-full rounded-md border border-stroke bg-[#D9D9D9] px-5 py-3 text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none"
// 								value={username}
//       							onChange={(e) => setUsername(e.target.value)}
// 								></input>
// 							</div>
// 							<div className="mb-6">
// 								<input
// 								type="password"
// 								name="password"
// 								placeholder="Password"
// 								className="w-full rounded-md border border-stroke bg-[#D9D9D9] px-5 py-3 text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none"
// 								value={password}
// 								onChange={(e) => setPassword(e.target.value)}
// 								></input>
// 							</div>
// 							<div className="mb-10">
// 							<input
// 								type="submit"
// 								value="Login"
// 								className="w-full cursor-pointer rounded-md border border-primary bg-primary px-5 py-3 text-base font-medium text-white hover:ease-in duration-300"
// 							/>
// 							</div>
// 						</form>
// 						<div className="flex flex-row justify-between items-baseline">
// 							<hr className="border-[1px] rounded-full border-white w-[40%]"></hr>
// 							<p className="mb-6 text-base text-white">OR</p>
// 							<hr className="border-[1px] rounded-full border-white w-[40%]"></hr>
// 						</div>
// 						<ul className="-mx-2 mb-12 flex justify-center">
// 							<li className="w-[75%] px-2">
// 							<a
// 								href="http://localhost:5000/auth/42"
// 								className="flex h-11 items-center text-semibold text-white text-[18px] justify-center gap-4 rounded-full bg-[#1B1B1B] hover:bg-opacity-90"
// 							>
// 								<img
// 								src="images/42_Logo.png"
// 								alt="42"
// 								className="inline-block max-w-[50px] max-h-[30px] shadow-md">
// 								</img>
// 								Login with Intra</a>
// 							</li>
// 						</ul>

// 						<div>
// 							<span className="absolute right-1 top-1">
// 							<svg
// 								width="40"
// 								height="40"
// 								viewBox="0 0 40 40"
// 								fill="none"
// 								xmlns="http://www.w3.org/2000/svg"
// 							>
// 								<circle
// 								cx="1.39737"
// 								cy="38.6026"
// 								r="1.39737"
// 								transform="rotate(-90 1.39737 38.6026)"
// 								fill="#FFFFFF"
// 								/>
// 								<circle
// 								cx="1.39737"
// 								cy="1.99122"
// 								r="1.39737"
// 								transform="rotate(-90 1.39737 1.99122)"
// 								fill="#FFFFFF"
// 								/>
// 								<circle
// 								cx="13.6943"
// 								cy="38.6026"
// 								r="1.39737"
// 								transform="rotate(-90 13.6943 38.6026)"
// 								fill="#FFFFFF"
// 								/>
// 								<circle
// 								cx="13.6943"
// 								cy="1.99122"
// 								r="1.39737"
// 								transform="rotate(-90 13.6943 1.99122)"
// 								fill="#FFFFFF"
// 								/>
// 								<circle
// 								cx="25.9911"
// 								cy="38.6026"
// 								r="1.39737"
// 								transform="rotate(-90 25.9911 38.6026)"
// 								fill="#FFFFFF"
// 								/>
// 								<circle
// 								cx="25.9911"
// 								cy="1.99122"
// 								r="1.39737"
// 								transform="rotate(-90 25.9911 1.99122)"
// 								fill="#FFFFFF"
// 								/>
// 								<circle
// 								cx="38.288"
// 								cy="38.6026"
// 								r="1.39737"
// 								transform="rotate(-90 38.288 38.6026)"
// 								fill="#FFFFFF"
// 								/>
// 								<circle
// 								cx="38.288"
// 								cy="1.99122"
// 								r="1.39737"
// 								transform="rotate(-90 38.288 1.99122)"
// 								fill="#FFFFFF"
// 								/>
// 								<circle
// 								cx="1.39737"
// 								cy="26.3057"
// 								r="1.39737"
// 								transform="rotate(-90 1.39737 26.3057)"
// 								fill="#FFFFFF"
// 								/>
// 								<circle
// 								cx="13.6943"
// 								cy="26.3057"
// 								r="1.39737"
// 								transform="rotate(-90 13.6943 26.3057)"
// 								fill="#FFFFFF"
// 								/>
// 								<circle
// 								cx="25.9911"
// 								cy="26.3057"
// 								r="1.39737"
// 								transform="rotate(-90 25.9911 26.3057)"
// 								fill="#FFFFFF"
// 								/>
// 								<circle
// 								cx="38.288"
// 								cy="26.3057"
// 								r="1.39737"
// 								transform="rotate(-90 38.288 26.3057)"
// 								fill="#FFFFFF"
// 								/>
// 								<circle
// 								cx="1.39737"
// 								cy="14.0086"
// 								r="1.39737"
// 								transform="rotate(-90 1.39737 14.0086)"
// 								fill="#FFFFFF"
// 								/>
// 								<circle
// 								cx="13.6943"
// 								cy="14.0086"
// 								r="1.39737"
// 								transform="rotate(-90 13.6943 14.0086)"
// 								fill="#FFFFFF"
// 								/>
// 								<circle
// 								cx="25.9911"
// 								cy="14.0086"
// 								r="1.39737"
// 								transform="rotate(-90 25.9911 14.0086)"
// 								fill="#FFFFFF"
// 								/>
// 								<circle
// 								cx="38.288"
// 								cy="14.0086"
// 								r="1.39737"
// 								transform="rotate(-90 38.288 14.0086)"
// 								fill="#FFFFFF"
// 								/>
// 							</svg>
// 							</span>
// 							<span className="absolute bottom-1 left-1">
// 							<svg
// 								width="29"
// 								height="40"
// 								viewBox="0 0 29 40"
// 								fill="none"
// 								xmlns="http://www.w3.org/2000/svg"
// 							>
// 								<circle
// 								cx="2.288"
// 								cy="25.9912"
// 								r="1.39737"
// 								transform="rotate(-90 2.288 25.9912)"
// 								fill="#FFFFFF"
// 								/>
// 								<circle
// 								cx="14.5849"
// 								cy="25.9911"
// 								r="1.39737"
// 								transform="rotate(-90 14.5849 25.9911)"
// 								fill="#FFFFFF"
// 								/>
// 								<circle
// 								cx="26.7216"
// 								cy="25.9911"
// 								r="1.39737"
// 								transform="rotate(-90 26.7216 25.9911)"
// 								fill="#FFFFFF"
// 								/>
// 								<circle
// 								cx="2.288"
// 								cy="13.6944"
// 								r="1.39737"
// 								transform="rotate(-90 2.288 13.6944)"
// 								fill="#FFFFFF"
// 								/>
// 								<circle
// 								cx="14.5849"
// 								cy="13.6943"
// 								r="1.39737"
// 								transform="rotate(-90 14.5849 13.6943)"
// 								fill="#FFFFFF"
// 								/>
// 								<circle
// 								cx="26.7216"
// 								cy="13.6943"
// 								r="1.39737"
// 								transform="rotate(-90 26.7216 13.6943)"
// 								fill="#FFFFFF"
// 								/>
// 								<circle
// 								cx="2.288"
// 								cy="38.0087"
// 								r="1.39737"
// 								transform="rotate(-90 2.288 38.0087)"
// 								fill="#FFFFFF"
// 								/>
// 								<circle
// 								cx="2.288"
// 								cy="1.39739"
// 								r="1.39737"
// 								transform="rotate(-90 2.288 1.39739)"
// 								fill="#FFFFFF"
// 								/>
// 								<circle
// 								cx="14.5849"
// 								cy="38.0089"
// 								r="1.39737"
// 								transform="rotate(-90 14.5849 38.0089)"
// 								fill="#FFFFFF"
// 								/>
// 								<circle
// 								cx="26.7216"
// 								cy="38.0089"
// 								r="1.39737"
// 								transform="rotate(-90 26.7216 38.0089)"
// 								fill="#FFFFFF"
// 								/>
// 								<circle
// 								cx="14.5849"
// 								cy="1.39761"
// 								r="1.39737"
// 								transform="rotate(-90 14.5849 1.39761)"
// 								fill="#FFFFFF"
// 								/>
// 								<circle
// 								cx="26.7216"
// 								cy="1.39761"
// 								r="1.39737"
// 								transform="rotate(-90 26.7216 1.39761)"
// 								fill="#FFFFFF"
// 								/>
// 							</svg>
// 							</span>
// 						</div>
// 						</div>
// 					</div>
// 					</div>
// 			</div>
// 	);
// };

// export default Login;