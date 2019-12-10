import React, { Component } from "react";
    import {
      Button,
      Modal,
      ModalHeader,
      ModalBody,
      ModalFooter,
      Form,
      FormGroup,
      Input,
      Label
    } from "reactstrap";

    export default class CustomModal extends Component {
        constructor(props) {
            super(props);
            this.state = {
              activeItem: this.props.activeItem
            };
          }
          handleChange = e => {
            let { name, value } = e.target;
            if (e.target.type === "checkbox") {
              value = e.target.checked;
            }
            const activeItem = { ...this.state.activeItem, [name]: value };
            this.setState({ activeItem });
          };

          render() {
            const { toggle, onSave } = this.props;
            return (
                        <div class="modal fade" role="dialog" tabindex="-1">
                                    <div class="modal-dialog" role="document">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h4 class="modal-title">Task</h4><button class="btn btn-primary" type="button">+</button>
                                                <div class="table-responsive">
                                                    <table class="table">
                                                        <thead>
                                                            <tr>
                                                                <th>Description</th>
                                                                <th>State</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>Cell 1</td>
                                                                <td>
                                                                    <div class="form-check"><input class="form-check-input" type="radio" id="formCheck-1"/><label class="form-check-label" for="formCheck-1">Done</label></div>
                                                                </td>
                                                            </tr>
                                                            <tr></tr>
                                                        </tbody>
                                                    </table>
                                                </div><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button></div>
                                            <div class="modal-body">
                                                <p>User_name</p>
                                                <div class="table-responsive">
                                                    <table class="table">
                                                        <thead>
                                                            <tr>
                                                                <th>ID</th>
                                                                <th>Description</th>
                                                                <th>State</th>
                                                                <th></th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>Cell 1</td>
                                                                <td>Cell 2</td>
                                                                <td>
                                                                    <div class="form-check"><input class="form-check-input" type="radio" id="formCheck-2"/><label class="form-check-label" for="formCheck-2">Done</label></div>
                                                                </td>
                                                                <td><button class="btn btn-primary" type="button">Update</button></td>
                                                            </tr>
                                                            <tr></tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div class="modal-footer"><button class="btn btn-light" type="button" data-dismiss="modal">Close</button><button class="btn btn-primary" type="button">Save</button></div>
                                        </div>
                                    </div>
                                </div>
                                );
                            }
                         }