import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

const ProfessionalScroll = ({ children, direction = 'up', delay = 0, threshold = 0.3 }) => {
	const controls = useAnimation()
	const [ref, inView] = useInView({ threshold })

	const offset = direction === 'up' ? 50 : direction === 'down' ? -50 : 0

	useEffect(() => {
		if (inView) {
			controls.start({ opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: 'easeOut', delay } })
		} else {
			controls.start({ opacity: 0, y: offset, scale: 0.95 })
		}
	}, [controls, inView, offset, delay])

	return (
		<motion.div ref={ref} animate={controls} initial={{ opacity: 0, y: offset, scale: 0.95 }}>
			{children}
		</motion.div>
	)
}

export default ProfessionalScroll
