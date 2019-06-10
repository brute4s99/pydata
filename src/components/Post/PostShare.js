import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";


import config from "../../../content/meta/config";

const styles = theme => ({
  share: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "1em 0 0",
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
      flexDirection: "row"
    }
  },
  links: {
    display: "flex",
    flexDirection: "row",
    "& .SocialMediaShareButton": {
      margin: "0 .8em",
      cursor: "pointer"
    }
  },
  label: {
    fontSize: "1.2em",
    margin: "0 1em 1em",
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
      margin: "0 1em"
    }
  }
});

class PostShare extends React.Component {
  render() {
    const { post, classes, slug } = this.props;
    const { excerpt, frontmatter } = post;
    const { title } = frontmatter;
    const url = config.siteUrl + config.pathPrefix + slug;

    const iconSize = 36;
    const filter = count => (count > 0 ? count : "");

    return (
      <div className={classes.share}>
        <span className={classes.label}><a href={url}>SHARE </a> </span>
      </div>
    );
  }
}

PostShare.propTypes = {
  post: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  slug: PropTypes.string.isRequired
};

export default injectSheet(styles)(PostShare);
