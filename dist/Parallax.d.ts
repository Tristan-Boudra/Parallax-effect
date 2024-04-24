import * as React from "react";
interface ParallaxProps {
    urlBack: string;
    urlFront: string;
    urlFrontRemove: string;
    contentTop: string;
    contentBottom: string;
}
/**
 * Renders a parallax effect component.
 *
 * @param {ParallaxProps} props - The props for the Parallax component.
 * @param {string} props.urlBack - The URL of the back image.
 * @param {string} props.urlFront - The URL of the front image.
 * @param {string} props.urlFrontRemove - The URL of the front image with removed content.
 * @param {string} props.contentTop - The content to be displayed at the top.
 * @param {string} props.contentBottom - The content to be displayed at the bottom.
 * @return {JSX.Element} The rendered Parallax component.
 */
export declare function Parallax(props: ParallaxProps): React.JSX.Element;
export {};
