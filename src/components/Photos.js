import React, { Component, Fragment } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Loader from "./Loader";
import ImageLoader from "react-load-image";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);
const Preloader = props => {
  return <Loader color="black" title="Carregando..." />;
};

export default class Photos extends Component {
  state = {
    photos: [],
    error: false
  };

  componentDidMount() {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/photos?albumId=${
          this.props.match.params.id
        }`
      )
      .then(res => {
        const photos = res.data;
        this.setState({
          photos,
          error: null
        });
      })
      .catch(err => {
        this.setState({
          error: err
        });
      });
  }

  handleModal = e => {
    MySwal.fire({
      type: false,
      title: e.title,
      width: "auto",
      html: (
        <ImageLoader src={e.url}>
          <img alt={e.title} src={e.url} />
          <div>Erro ao carregar a imagem!</div>
          <Preloader />
        </ImageLoader>
      ),
      confirmButtonText: "Fechar"
    });
  };
  render() {
    const { photos } = this.state;
    const { props } = this;

    return (
      <Fragment>
        {photos.length ? (
          <div className="animated fadeIn container">
            <div className="row">
              <div className="col-md-6 col-6 mt-3">
                <h1>Album {props.match.params.id}</h1>
              </div>
              <div className="col-md-6 col-6 mt-2 text-right">
                <Link to="/" className="btn btn-primary mb-5 mt-3">
                  Voltar para Albums
                </Link>
              </div>
              {photos.map(e => {
                return (
                  <div className="col-md-2 col-12 mb-5" key={`key-${e.id}`}>
                    <ImageLoader src={e.url}>
                      <img
                        src={e.thumbnailUrl}
                        className="animated fadeIn"
                        alt=""
                        onClick={() => this.handleModal(e)}
                      />
                      <div>Erro ao carregar a imagem!</div>
                      <Preloader />
                    </ImageLoader>
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
