import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => ({
	cookies: ownProps.cookies
});

export default connect(mapStateToProps)(CookieManager);