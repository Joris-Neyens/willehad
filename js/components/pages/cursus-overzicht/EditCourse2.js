import React from "react";
import axios from "axios";
import { BASE_URL } from "../../../api/baseUrl";

export default class EditCourse2 extends React.Component {
  state = {
    file: null,
  };

  handleChange = (event) => {
    console.log("handleChange", event.target.files);

    this.setState({ file: event.target.files[0] });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    console.log("handleSubmit", this.state.file);

    const editData = {
      method: "POST",
      files: this.state.file,
      ref: "courses",
      refId: id,
    };

    const data = new FormData();
    data.append("files", this.state.file);

    const url = BASE_URL + "upload";

    console.log(data);

    const response = await axios({
      method: "POST",
      url: url,
      data,
    });
    console.log(response);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h4 className="text-center">Media</h4>
        <div className="row">
          <p className="m-0 col-12">Cursus afbeelding</p>
          <div className="col-5 px-0 pb-3">
            <input onChange={this.handleChange} className="w-100 rounded" rows="2" type="file" />
          </div>
        </div>
        <button type="submit">add media</button>
      </form>
    );
  }
}
