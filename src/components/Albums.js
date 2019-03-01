import React, { Component, Fragment } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Loader from "./Loader";

export default class Albums extends Component {
  state = {
    albums: [],
    error: false
  };

  componentDidMount() {
    axios
      .get(`https://jsonplaceholder.typicode.com/albums/`)
      .then(res => {
        const albums = res.data;
        this.setState({
          albums,
          error: null
        });
      })
      .catch(err => {
        this.setState({
          error: err
        });
      });
  }
  render() {
    const { albums } = this.state;
    return (
      <Fragment>
        {albums.length ? (
          <div className="animated fadeIn container">
            <div className="row mt-4">
              <h1 className="col-md-12 mb-4">Albums</h1>
              {albums.map(album => {
                return (
                  <div
                    className="col-md-2 animated fadeIn"
                    key={`key-${album.id}`}
                  >
                    <Link to={`/${album.id}`} className="album">
                      Album {album.id}
                    </Link>
                    <br />
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <Loader color="black" title="Carregando..." />
        )}
      </Fragment>
    );
  }
}
