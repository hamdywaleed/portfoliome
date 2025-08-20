import { motion } from 'framer-motion'

const ScrollReveal = ({ children, direction = "up", delay = 0 }) => {
	// Determine initial offset based on direction
	const offset = direction === "up" ? 50 : direction === "down" ? -50 : 0

	return (
		<motion.div
			initial={{ opacity: 0, y: offset, scale: 0.95 }}  // start slightly smaller and offset
			whileInView={{ opacity: 1, y: 0, scale: 1 }}      // animate to normal position & scale
			viewport={{ once: true, amount: 0.3 }}           // trigger when 30% visible
			transition={{ duration: 0.7, ease: "easeOut", delay }} // smooth transition with optional delay
		>
			{children}
		</motion.div>
	)
}

export default ScrollReveal
