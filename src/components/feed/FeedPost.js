import { React, useState } from "react";
import { useFeedPostStyles } from "../../styles";
import UserCard from "../shared/UserCard";
import {
	CommentIcon,
	MoreIcon,
	SaveIcon,
	ShareIcon,
	UnlikeIcon,
	LikeIcon,
	RemoveIcon,
} from "../../icons";
import {
	Button,
	Divider,
	Hidden,
	Link,
	TextField,
	Typography,
} from "@material-ui/core";
import HTMLEllipsis from "react-lines-ellipsis/lib/html";
import SEO from "../shared/Seo";

function FeedPost({ post }) {
	const classes = useFeedPostStyles();
	const [showCaption, setCaption] = useState();
	const { media, id, likes, user, caption, comments } = post;

	return (
		<>
			<SEO title={`Feed`} />
			<article className={classes.article}>
				{/* Feed Post Header */}
				<div className={classes.postHeader}>
					<UserCard user={user} />
					<MoreIcon className={classes.moreIcon} />
				</div>
				{/* Feed Post Image */}
				<div>
					<img src={media} alt="Post Media" className={classes.image} />
				</div>
				{/* Feed Post Buttons */}
				<div className={classes.postButtonsWrapper}>
					<div className={classes.postButtons}>
						<LikeButton />
						<Link to={`/p/${id}`}>
							<CommentIcon />
						</Link>
						<ShareIcon />
						<SaveButton />
					</div>
					<Typography className={classes.like} variant="subtitle2">
						<span>{likes === 1 ? "1 like" : `${likes} likes`}</span>
					</Typography>
					<div className={showCaption ? classes.expanded : classes.collapsed}>
						<Link to={`/${user.username}`}>
							<Typography
								color="textPrimary"
								variant="subtitle2"
								component="span"
								className={classes.username}
							>
								{user.username}
							</Typography>
						</Link>
						{showCaption ? (
							<Typography
								variant="body2"
								component="span"
								dangerouslySetInnerHTML={{ __html: caption }}
							/>
						) : (
							<div className={classes.captionWrapper}>
								<HTMLEllipsis
									unsafeHTML={caption}
									className={classes.caption}
									maxLine="0"
									ellipsis="..."
									basedOn="letters"
								/>
								<Button
									className={classes.moreButton}
									onClick={() => setCaption(true)}
								>
									more
								</Button>
							</div>
						)}
					</div>
					<Link to={`/p/${id}`}>
						<Typography
							className={classes.commentsLink}
							variant="body2"
							component="div"
						>
							View all {comments.length} comments
						</Typography>
					</Link>
					{comments.map((comment) => (
						<div key={comments.id}>
							<Link to={`/${comment.user.username}`}>
								<Typography
									variant="subtitle3"
									component="span"
									className={classes.commentUsername}
								>
									{comment.user.username}
								</Typography>{" "}
								<Typography variant="body2" component="span">
									{comment.content}
								</Typography>
							</Link>
						</div>
					))}
					<Typography color="textSecondary" className={classes.datePosted}>
						5 DAYS AGO
					</Typography>
					<Hidden xsDown>
						<Divider />
						<Comment />
					</Hidden>
				</div>
			</article>
		</>
	);
}

function LikeButton() {
	const classes = useFeedPostStyles();
	const [liked, setLiked] = useState(false);
	const Icon = liked ? UnlikeIcon : LikeIcon;
	const className = liked ? classes.liked : classes.like;
	const onClick = liked ? handleUnlike : handleLike;

	function handleUnlike() {
		setLiked(false);
	}

	function handleLike() {
		setLiked(true);
	}

	return <Icon className={className} onClick={onClick} />;
}
function SaveButton() {
	const classes = useFeedPostStyles();
	const [saved, setSaved] = useState(false);
	const Icon = saved ? RemoveIcon : SaveIcon;
	const onClick = saved ? handleSave : handleRemove;

	function handleSave() {
		setSaved(false);
	}

	function handleRemove() {
		setSaved(true);
	}

	return <Icon className={classes.saveIcon} onClick={onClick} />;
}
function Comment() {
	const classes = useFeedPostStyles();
	const [content, setContent] = useState("");

	return (
		<div className={classes.commentContainer}>
			<TextField
				className={classes.textField}
				fullWidth
				value={content}
				placeholder="Add a comment..."
				multiline
				rowsMax={5}
				rows={1}
				onChange={(event) => setContent(event.target.value)}
				InputProps={{
					classes: {
						root: classes.root,
						underline: classes.underline,
					},
				}}
			/>
			<Button
				color="primary"
				className={classes.commentButton}
				disabled={!content.trim()}
			>
				Post
			</Button>
		</div>
	);
}

export default FeedPost;
