import React, { Component } from "react";

// import of mobx-state-tree utilities
import { observer } from "mobx-react";

class Photo extends Component {
  state = {
    selectedPhoto: null,
    isUploading: false,
    isEditing: false,
  };

  handleSubmit = (event, StaffID) => {
    event.preventDefault();
    this.setState({ isUploading: true });
    const fileImg = new FormData();
    fileImg.append(
      "image",
      this.state.selectedPhoto,
      this.state.selectedPhoto.name
    );
    this.props.currentUser.postUserImage(StaffID, fileImg).then(() => {
      console.log("File uploaded");
      this.setState({ isUploading: false, isEditing: false });
    });
  };

  render() {
    const {
      StaffName,
      imgURL,
      StaffID,
    } = this.props.currentUser.currentUser[0];
    return (
      <>
        <div className="userPhoto">
          <h3>
            {StaffName}{" "}
            <button
              onClick={(e) => {
                e.preventDefault();
                this.setState({ isEditing: true });
              }}
            >
              <span role="img" aria-label="edit image">
                📝
              </span>
            </button>
            {this.state.isEditing && (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  this.setState({ isEditing: false });
                }}
              >
                <span role="img" aria-label="cancel edit">
                  ❌
                </span>
              </button>
            )}
          </h3>
          {imgURL === null ? (
            <img
              src="https://wolper.com.au/wp-content/uploads/2017/10/image-placeholder.jpg"
              alt="placeholder"
              style={{ maxheight: 200 }}
            />
          ) : (
            <img src={imgURL} alt={StaffName} style={{ maxheight: 200 }} />
          )}
          {this.state.isEditing && (
            <form
              onSubmit={(event) => this.handleSubmit(event, StaffID)}
              className="form"
              id="photo"
            >
              {!this.state.isUploading && (
                <div>
                  <input
                    ref={(fileInput) => {
                      this.fileInput = fileInput;
                    }}
                    style={{ display: "none" }}
                    type="file"
                    id="imgURL"
                    onChange={(event) => {
                      const obj = event.target.files[0];
                      this.setState({ selectedPhoto: obj });
                    }}
                  />
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      this.fileInput.click();
                    }}
                  >
                    Select a photo
                  </button>
                </div>
              )}
              <button type="submit">
                {this.state.isUploading ? "Uploading..." : "Upload Image"}
              </button>
            </form>
          )}
          <br />
        </div>
      </>
    );
  }
}

export default observer(Photo);
