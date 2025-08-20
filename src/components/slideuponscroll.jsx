import { motion } from 'framer-motion'

const ScrollRevealFast = ({ children, direction = "up", delay = 0 }) => {
	// Smaller offset for faster perception
	const offset = direction === "up" ? 10 : direction === "down" ? -10 : 0

	return (
		<motion.div
			initial={{ opacity: 0, y: offset, scale: 0.97 }}   // smaller scale + offset
			whileInView={{ opacity: 1, y: 0, scale: 1 }}       // animate to normal
			viewport={{ once: true, amount: 0.3 }}
			transition={{ duration: 0.4, ease: "easeOut", delay }} // faster, snappier
		>
			{children}
		</motion.div>
	)
}

export default ScrollRevealFast
