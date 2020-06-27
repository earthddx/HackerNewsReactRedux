import React from "react";
import SavedSearches from "./SavedSearches";
import Toolbar from "@material-ui/core/Toolbar";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import { fade, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
  },
  searchArea: {
    display: "flex",
    flexDirection: "row",
    marginLeft: 80,
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.primary.main, 0.45),
    "&:hover": {
      backgroundColor: fade(theme.palette.primary.main, 0.25),
    },
    marginTop: 40,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
  },
  button: {
    marginTop: 40,
  },
  savedSearches: {
    marginTop: 40,
    marginLeft: 200,
  },
}));

export default function SearchBar({ query, setQuery, getData, setPage }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.searchArea}>
        <Toolbar>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              type="text"
              placeholder="..."
              onChange={(e) => setQuery(e.target.value)}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
        </Toolbar>
        <div className={classes.button}>
          <Button variant="contained" color="primary" onClick={getData} >
            Search
          </Button>
        </div>
      </div>
      <div className={classes.savedSearches}>
        <SavedSearches/>
      </div>
    </div>
  );
}
