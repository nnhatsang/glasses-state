import React, { Component } from "react";
import data from "./../Data/dataGlasses.json";

export default class Glasses extends Component {
  state = {
    glassesItem: {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  };
  renderGlassesList = () => {
    return data.map((item, index) => {
      return (
        <img
          className="me-3 p-3 py-4 border bg-white"
          onClick={() => {
            this.changeGlasses(item);
          }}
          style={{ height: 100, cursor: "pointer" }}
          key={index}
          src={item.url}
        />
      );
    });
  };
  changeGlasses = (item) => {
    this.setState({
      glassesItem: item,
    });
  };
  render() {
    return (
      <>
        <div
          className=""
          style={{
            backgroundImage: "url('./glassesImage/background.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            minHeight: "100vh",
          }}
        >
          <div
            className="pt-5"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              minHeight: "100vh",
            }}
          >
            <h2
              className="text-center  p-4 text-white text-black text-uppercase"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
            >
              Try glasses app online
            </h2>
            <div className="container">
              <div className="row mt-5 text-center">
                <div className="col-6">
                  <div className="position-relative">
                    <img
                      className="position-absolute"
                      style={{ width: 250 }}
                      src={"./glassesImage/model.jpg"}
                      alt="model.jpg"
                    />
                    <img
                      className="position-absolute"
                      style={{
                        width: "144px",
                        top: "80px",
                        right: "120px",
                        opacity: "0.8",
                      }}
                      src={this.state.glassesItem.url}
                      alt="v1.png"
                    />
                    <div
                      style={{
                        width: 250,
                        top: 200,
                        left: 318,
                        paddingLeft: 15,
                        backgroundColor: "rgba(251, 127, 0,.5)",
                        textAlign: "left",
                        height: 105,
                      }}
                      className="position-relative"
                    >
                      <span
                        style={{ fontWeight: "bold", color: "rgba(0,0,128)" }}
                      >
                        {this.state.glassesItem.name}
                      </span>
                      <br />
                      <span style={{ fontSize: 13, fontWeight: 300 }}>
                        {this.state.glassesItem.desc}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <img
                    style={{ width: 250 }}
                    src="./glassesImage/model.jpg"
                    alt="model.jpg"
                  />
                </div>
              </div>
              <div className="container mt-5 d-flex justify-content-center">
                {this.renderGlassesList()}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
