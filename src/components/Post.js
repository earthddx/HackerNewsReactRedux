import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import theme from "../theme";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 10,
    marginRight: 400,
  },
  postGuts: {
    margin: 10,
  },
  postName: {
    display: "flex",
    alignItems: "center",
  },
}));

export default function Post({ post }) {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      {post.title && post.url && (
        <div className={classes.postGuts}>
          <div className={classes.postName}>
            <h2>{post.title}</h2>
            <a
              style={{
                color: theme.palette.primary.main,
                fontSize: ".85rem",
                margin: 10,
              }}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {post.url}
            </a>
          </div>
          <p style={{ fontSize: ".8rem", margin: 10, fontStyle:'italic' }}>{post.author}</p>
        </div>
      )}
    </Paper>
  );
}
