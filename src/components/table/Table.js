import React from 'react';
import API from '../../utils/API/API';
import TableRow from './tableRow';

class TableComponent extends React.Component {
    state = {
        input: "",
        employees: []
    };

    componentDidMount() {
        API.getRandomEmployees().then(({ data: { results } }) => {
            const newEmployees = [];
            // console.log(results);
            results.forEach(({ name: { first: firstName, last: lastName }, email, phone, picture: { medium: profilePhoto } }) => {
                newEmployees.push({ firstName, lastName, email, phone, profilePhoto });
            })
            this.setState({ employees: newEmployees });
            console.log(this.state.employees);
        }).catch((err) => {
            console.log(err);
        });
    }

    handleInputChange = (event) => {
        this.setState({ input: event.target.value });
    };




    render() {
        return (
            <div>
                <label>Input Employee Name</label>
                <input
                    type="text"
                    name="input"
                    value={this.state.input}
                    onChange={this.handleInputChange}
                />
                <table className="table">
                    <thead>
                        <tr>
                            <th>
                                Employee Photo
                            </th>
                            <th>
                                First Name
                            </th>
                            <th>
                                Last Name
                            </th>
                            <th>
                                Email Address
                            </th>
                            <th>
                                Phone Number
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <TableRow employee={this.state.employees} />
                    </tbody>
                </table>
            </div>
        )
    }
}

export default TableComponent;