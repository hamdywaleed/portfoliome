import { motion } from 'framer-motion'

const ScrollRevealFast = ({ children, direction = "up", delay = 0 }) => {
	// Smaller offset for faster perception
	const offset = direction === "up" ? 8 : direction === "down" ? -8 : 0

	return (
		<motion.div
			initial={{ opacity: 0, y: offset, scale: 0.98 }} // very subtle offset & scale
			whileInView={{ opacity: 1, y: 0, scale: 1 }}
			viewport={{ once: true, amount: 0.1 }}          // trigger earlier
			transition={{ duration: 0.25, ease: "easeOut", delay }} // smooth & fast
		>
			{children}
		</motion.div>
	)
}

export default ScrollRevealFast
