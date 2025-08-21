import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
	{
		title: "My Recipe for ",
		Svg: require("@site/static/img/recipes.svg").default,
		description: (
			<>
				A dash of clarity, sprinkled with real-life experiences and just a hint
				of humor. Because let's be honest, technical documentation doesn't have
				to be boring.
			</>
		),
	},
	{
		title: "What I Bring to the Table",
		Svg: require("@site/static/img/lightbulb-idea.svg").default,
		description: (
			<>
				Got complex ideas? I'll break them down into simple, easy-to-understand
				docs that help your team and your users work smarter, not harder.
			</>
		),
	},
	{
		title: "Why Choose Me?",
		Svg: require("@site/static/img/handshake-deal.svg").default,
		description: (
			<>
				With my experience in modern docs tools and passion for accessible and
				engaging content, I'll make sure your documentation isn't just read, but
				actually used and loved.
			</>
		),
	},
];

function Feature({ Svg, title, description }) {
	return (
		<div className={clsx("col col--4")}>
			<div className="text--center">
				<Svg className={styles.featureSvg} role="img" />
			</div>
			<div className="text--center padding-horiz--md">
				<Heading as="h3">{title}</Heading>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default function HomepageFeatures() {
	return (
		<section className={styles.features}>
			<div className="container">
				<div className="row">
					{FeatureList.map((props, idx) => (
						<Feature key={idx} {...props} />
					))}
				</div>
			</div>
		</section>
	);
}
