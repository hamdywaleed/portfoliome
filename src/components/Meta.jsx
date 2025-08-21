// src/components/Meta.jsx
import { Helmet } from "react-helmet";

const Meta = () => {
	return (
		<Helmet>
			{/* Basic */}
			<title>Shnno | Full-Stack Developer Portfolio</title>
			<meta name="description" content="Portfolio of Shnno, showcasing projects in backend and full-stack development." />
			<meta name="author" content="Shnno" />
			<meta name="robots" content="index, follow" />

			{/* Open Graph / Facebook */}
			<meta property="og:type" content="website" />
			<meta property="og:title" content="Shnno | Full-Stack Developer Portfolio" />
			<meta property="og:description" content="Explore my recent projects in backend and full-stack development." />
			<meta property="og:image" content="../assets/profile.png" />
			<meta property="og:url" content="https://ahmed-el-shenawy.com" />

			{/* Twitter */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content="Shnno | Full-Stack Developer Portfolio" />
			<meta name="twitter:description" content="Explore my recent projects in backend and full-stack development." />
			<meta name="twitter:image" content="https://yourdomain.com/assets/cover.png" />
		</Helmet>
	);
};

export default Meta;
