"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function SplashScreen() {
	const [showSplash, setShowSplash] = useState(true);
	const [fadeout, setFadeout] = useState(false);

	useEffect(() => {
		const hasSeenSplash = sessionStorage.getItem("seenSplash");

		if (hasSeenSplash) {
			setShowSplash(false);
		} else {
			setTimeout(() => {
				setFadeout(true);
			}, 1500);

			setTimeout(() => {
				setShowSplash(false);
				sessionStorage.setItem("seenSplash", true);
			}, 2000);
		}
	}, []);
	if (showSplash) {
		return (
			<div
				className={`fixed z-10 inset-0 flex items-center justify-center bg-bl-300 text-white text-3xl font-bold transition-opacity duration-500 ${
					fadeout ? "opacity-0" : "opacity-100"
				}`}>
				<Image
					src="/splash.png"
					alt="logo"
					width={200}
					height={200}
					className="object-contain w-80 h-80"
				/>
			</div>
		);
	}
	return null;
}

export default SplashScreen;
