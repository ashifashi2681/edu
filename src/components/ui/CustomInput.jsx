import React from "react";

function CustomInput({ label, type = "text", placeHolder, onChange }) {
	return (
		<div>
			<label className="text-xs font-[500] mb-2">{label}</label>
			{type === "textarea" ? (
				<textarea
					className="bg-[#343c4f1f] py-3 px-2 text-sm w-full rounded-md shadow focus:outline-gray-300 placeholder:text-xs"
					placeholder={placeHolder}
                    rows={6}
				/>
			) : (
				<input
					className="bg-[#343c4f1f] py-3 px-2 text-sm w-full rounded-md shadow focus:outline-gray-300 placeholder:text-xs"
					type={type}
					placeholder={placeHolder}
					onChange={onChange}
				/>
			)}
		</div>
	);
}

export default CustomInput;
