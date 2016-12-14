import React, { Component } from 'react'
import { connect } from 'react-redux'

export default function(ComposedComponent) {
	class Authentication extends Component {
		static contextTypes = {
			router: React.PropTypes.object
		}

		componentWillMount() {
			if (!this.props.isLoggedIn) {
				this.context.router.push('/')
			}
		}

		compenentWillUpdate() {
			if (!this.props.isLoggedIn) {
				this.context.router.push('/')
			}
		}

		render() {
			return <ComposedComponent {...this.props} />
		}
	}

	function mapStateToProps(state) {
		return {
			isLoggedIn : state.isLoggedIn
		}
	} 

	return connect(mapStateToProps)(Authentication)
}