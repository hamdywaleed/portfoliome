import { motion } from 'framer-motion'

const SlideUpOnScroll = ({ children }) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 50 }} // start invisible, 50px below
			whileInView={{ opacity: 1, y: 0 }} // animate to visible and original position
			viewport={{ once: true, amount: 0.3 }} // trigger when 30% visible
			transition={{ duration: 0.6, ease: "easeOut" }}
		>
			{children}
		</motion.div>
	)
}

export default SlideUpOnScroll
