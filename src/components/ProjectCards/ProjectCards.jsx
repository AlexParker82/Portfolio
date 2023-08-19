import React from "react";
import {
	Card,
	CardHeader,
	CardMedia,
	CardContent,
	Button,
	Link,
	Typography,
	Grid,
} from "@mui/material";

const ProjectCard = (props) => {
	return (
		<Card
			sx={{
				height: "auto",
				width: "75%",
				marginLeft: "auto",
				marginRight: "auto",
			}}
		>
			<CardHeader
				title={props.title}
				subheader={props.technologies}
				sx={{
					textAlign: "center",
					backgroundColor: "black",
					color: "lightGray",
				}}
			/>
			<Grid
				container
				spacing={0}
			>
				<Grid
					item
					xs={12}
					md={6}
				>
					<CardMedia
						component="img"
						image={props.img}
						sx={{ padding: "5px" }}
						alt="Project Photo"
						height="200"
						width="300"
					/>
				</Grid>
				<Grid
					item
					xs={12}
					md={6}
				>
					<CardContent
						sx={{
							textAlign: "center",
							paddingTop: "5%",
							backgroundColor: "lightGray",
							height: "100%",
						}}
					>
						<Typography variant="body2">{props.description}</Typography>
						<Button>
							<Link
								href={props.repo}
								target="_blank"
								rel="noopener"
							>
								Repo
							</Link>
						</Button>
						<Button>
							<Link
								href={props.deployed}
								target="_blank"
								rel="noopener"
							>
								Deployed App
							</Link>
						</Button>
					</CardContent>
				</Grid>
			</Grid>
		</Card>
	);
};

export default ProjectCard;
