import React, { Component } from "react";

// import of mobx-state-tree utilities
import { observer } from "mobx-react";
import EditingToggle from "./EditingToggle";

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
      this.setState({
        isUploading: false,
        isEditing: false,
        selectedPhoto: null,
      });
    });
  };

  handleEditing = () => {
    this.setState((currentState) => {
      return { isEditing: !currentState.isEditing };
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
            <EditingToggle
              isEditing={this.state.isEditing}
              handleEditing={this.handleEditing}
            />
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
              {this.state.selectedPhoto !== null && (
                <p>Selected file: {this.state.selectedPhoto.name}</p>
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
