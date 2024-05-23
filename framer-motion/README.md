# Framer Motion

## Introduction

Framer Motion is a popular animation library for React applications that allows developers to create smooth and interactive animations.

## Installation

To install Framer Motion in your React app, you can use npm or yarn:

```bash
npm install framer-motion
or
yarn add framer-motion
```

### Usage

```ts
import { motion } from "framer-motion";

const App = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1 }}
		>
			Hello Framer Motion!
		</motion.div>
	);
};
```
