/* eslint-disable jsx-a11y/img-redundant-alt */
import { gsap } from "gsap";
import * as React from "react";
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
export function Parallax(props) {
    const { urlBack, urlFront, urlFrontRemove, contentTop, contentBottom } = props;
    /**
     * Updates the CSS custom properties `--x` and `--y` of the `document.documentElement`
     * based on the provided `x` and `y` coordinates.
     *
     * @param {Object} coords - The coordinates object containing `x` and `y` properties.
     * @param {number} coords.x - The x coordinate.
     * @param {number} coords.y - The y coordinate.
     */
    const update = ({ x, y }) => {
        gsap.set(document.documentElement, {
            "--x": gsap.utils.mapRange(0, window.innerWidth, -1, 1, x),
            "--y": gsap.utils.mapRange(0, window.innerHeight, -1, 1, y),
        });
    };
    React.useEffect(() => {
        const handlePointerMove = (event) => {
            update(event);
        };
        if (typeof window !== "undefined") {
            window.addEventListener("pointermove", handlePointerMove);
            return () => {
                window.removeEventListener("pointermove", handlePointerMove);
            };
        }
    }, []);
    return (React.createElement(React.Fragment, null,
        React.createElement("article", null,
            React.createElement("img", { src: urlBack, alt: "Image background" }),
            React.createElement("h3", null, contentTop),
            React.createElement("img", { src: urlFront, alt: "Image front" }),
            React.createElement("div", { className: "blur" },
                React.createElement("img", { src: urlFrontRemove, alt: "Image front with removed background" })),
            React.createElement("div", { className: "content" },
                React.createElement("p", null, contentBottom)))));
}
