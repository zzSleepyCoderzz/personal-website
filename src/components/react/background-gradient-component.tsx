import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";


export function BackgroundGradientDemo() {
    return (
        <div>
            <BackgroundGradient className="rounded-[22px] max-w-sm bg-zinc-900">
                <img
                    src={'/personal-website/Picture_Timothy-Chin.jpeg'}
                    alt="Profile Picture of Timothy Chin"
                    height="350"
                    width="350"
                    className="object-cover rounded-2xl"
                />
            </BackgroundGradient>
        </div>
    );
}
