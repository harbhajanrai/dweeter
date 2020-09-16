import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import { connect } from 'react-redux'

import { 
	likePost
} from '../../actions/postActions'

const styles = {
	paper: {
		padding: 10,
		display: 'flex',
		marginTop: 10,
	},
	avatar: {
		minWidth: 10,
		margin: '4px 10px 4px 4px'
	},
	login: {
		marginBottom: 5
	},
	time: {
		marginLeft: 10,
		color: '#bbb',
		fontSize: 14
	}
}

class Post extends Component {
	constructor (props) {
		super(props)

		this.handleLike = this.handleLike.bind(this)
		//this.handleUnfollow = this.handleUnfollow.bind(this)
	}
	handleLike () {
		console.log('click ho raha hai ...')
		// this.props.unfollowUser(this.props.match.params.userId)
		this.props.likePost(this.props.post)
		//this.props.followUser(this.props.post)
	}
	render () {
		const { classes, post } = this.props
		return (
			<Paper className={classes.paper}>
				<div 
					className={classes.avatar}
					style={{
						backgroundColor: `#${post.user.id.slice(post.user.id.length - 3)}`
					}}
				/>
				<div>
					<h3 className={classes.login}>
						<Link to={`/profile/${post.user.id}`}>{post.user.login}</Link>
						<span className={classes.time}>{(new Date(post.createdAt)).toLocaleString()}</span>
					</h3>
					{post.text}
					<div className={classes.btnBlock}>
						<Button 
							variant="outlined" 
							className={classes.btnFollow} 
							onClick={this.handleLike}>
							Follow
						</Button>
					</div>
				</div>
			</Paper>
		)
	}
}


// export default withStyles(styles)(Post)
export default connect(null, { likePost })(withStyles(styles)(Post))