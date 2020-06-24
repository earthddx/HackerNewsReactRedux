import React from "react";
import { useSelector } from "react-redux";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
}));

export default function SavedSearches() {
  const classes = useStyles();
  const searchKey = useSelector((state) => state.saveSearchReducer);

  return (
    <div style={{ display: "flex" }}>
      <p>Previous search:</p>
      {searchKey &&
        searchKey.map((key, id) => (
          <Paper className={classes.root} key={id}>
            <p style={{ marginLeft: 10, marginRight: 10 }}>{key.term}</p>
          </Paper>
        ))}
    </div>
  );
}
