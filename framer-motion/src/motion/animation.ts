import { Variants } from "framer-motion";

const heroVariants: Variants = {
	hidden: {},
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 1,
		},
	},
};

const heroHeader: Variants = {
	tap: {
		scale: 0.9,
	},
	hover: {
		scale: 1.2,
		transition: { duration: 1 },
	},
};

const heroChildrenVariants: Variants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { duration: 3 },
	},
};

const hightlightVariants: Variants = {
	initial: {
		opacity: 0,
		y: 25,
	},

	whileInView: {
		repeatCount: 0,
		opacity: 1,
		y: 0,
		transition: {
			staggerChildren: 0.5,
			duration: 0.75,
			ease: "easeInOut",
		},
	},
};

const hightlightChildrenVariants: Variants = {
	initial: {
		opacity: 0,
	},
	whileInView: {
		opacity: 1,
	},
};

const websiteVariants: Variants = {
	hidden: {
		opacity: 0,
		y: 25,
	},

	visible: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 1,
			ease: "linear",
			staggerChildren: 0.5,
			staggerDirection: -1,
			when: "beforeChildren",
		},
	},
};

const websiteChildrenVariants: Variants = {
	hidden: {
		opacity: 0,
		y: 25,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 1, type: "spring" },
	},
};

const leftSwingVariants: Variants = {
	hidden: {
		opacity: 0,
	},

	visible: {
		opacity: 1,
		transition: {
			duration: 1,
			ease: "linear",
			staggerChildren: 1,
			when: "beforeChildren",
		},
	},
};

const leftSwingChildrenVariants: Variants = {
	hidden: {
		opacity: 0,
		x: "-100%",
	},
	visible: {
		opacity: 1,
		x: 0,
	},
};

export {
	heroVariants,
	heroChildrenVariants,
	hightlightVariants,
	hightlightChildrenVariants,
	heroHeader,
	websiteVariants,
	websiteChildrenVariants,
	leftSwingVariants,
	leftSwingChildrenVariants,
};
