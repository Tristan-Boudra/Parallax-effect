# Parallax Effect React Component

A React component for creating parallax effects on images and content. Enhance your web projects with smooth and dynamic parallax scrolling.

## Installation

To install the component, you can use npm:

```bash
npm install react-parallax-effect
```

You alse need gsap, you can use npm:

```bash
npm install gsap
```

## Version

React-parallax-effect: v1.0.0 <br/>
Gsap: v3.12.5

## Usage

In your React application, import the Parallax component and use it as follows:

```javascript
import React from "react";
import { Parallax } from "react-parallax-effect";

function App() {
  return (
    <div className="App">
      <Parallax
        urlBack="url-to-background-image"
        urlFront="url-to-foreground-image"
        urlFrontRemove="url-to-remove-from-foreground-image"
        contentTop="Top content"
        contentBottom="Bottom content"
      />
    </div>
  );
}

export default App;
```

Then copy the App.css files in your project: [File CSS](https://github.com/Tristan-Boudra/Parallax-effect/blob/main/src/App.css)

## Props

- **urlBack**: URL of the background image.
- **urlFront**: URL of the foreground image.
- **urlFrontRemove**: URL of the part of the foreground image to be removed.
- **contentTop**: Content to be displayed at the top of the component.
- **contentBottom**: Content to be displayed at the bottom of the component.

## Author

Boudra Tristan
