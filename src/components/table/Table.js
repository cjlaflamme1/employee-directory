import React from 'react';
import API from '../../utils/API/API';
import TableRow from './tableRow';
import "./table.css";

class TableComponent extends React.Component {
    state = {
        input: "",
        employees: [],
        filteredEmployees: []
    };

    // sort function created, need to hook to list.
    sortFactory = (event) => {
        const dataSort = event.target.id;
        let modifier = (dataSort === "true") ? 1 : -1;

        if (this.state.filteredEmployees.length > 0) {
            const newList = this.state.filteredEmployees.sort((curr, prev) => {
                return (curr.lastName > prev.lastName ? 1 : -1) * modifier;
            })
            this.setState({ filteredEmployees: newList });

        } else {
            const newList = this.state.employees.sort((curr, prev) => {
                return (curr.lastName > prev.lastName ? 1 : -1) * modifier;
            })
            this.setState({ employees: newList });
        }
    }

    searchFilter(searchString) {
        console.log(searchString);
        let newEmployeeArray = this.state.employees.filter((employee) => {
            if (employee.firstName.includes(searchString)) {
                return employee;
            } else {
                return;
            };
        })
        this.setState({ filteredEmployees: newEmployeeArray });
    }

    componentDidMount() {
        if (this.state.employees.length <= 0) {
            API.getRandomEmployees().then(({ data: { results } }) => {
                const newEmployees = [];
                // console.log(results);
                results.forEach(({ name: { first: firstName, last: lastName }, email, phone, picture: { medium: profilePhoto } }) => {
                    newEmployees.push({ firstName, lastName, email, phone, profilePhoto });
                })
                this.setState({ employees: newEmployees });
            }).catch((err) => {
                console.log(err);
            });
        }

    }

    handleInputChange = (event) => {
        const newSearch = event.target.value;
        console.log(newSearch);
        this.setState({ input: newSearch });
        if (!newSearch) {
            this.setState({ filteredEmployees: [] });
            this.setState({ input: "" });
        } else {
            this.searchFilter(newSearch);

        }
        // console.log(this.state.input);
    };

    deliverEmployees() {
        if ((this.state.filteredEmployees.length === 0) && (this.state.input.length > 0)) {
            return [{
                profilePhoto: "https://cdn.pixabay.com/photo/2015/11/03/08/56/question-mark-1019820_960_720.jpg",
                firstName: "Employee",
                lastName: "Not Found",
                email: "",
                phone: ""
            }]
        } else if (this.state.filteredEmployees.length > 0) {
            return this.state.filteredEmployees;
        } else {
            return this.state.employees
        }
    }




    render() {
        return (
            <div>
                <div class="input-group flex-nowrap justify-content-center mb-2">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="addon-wrapping">Search</span>
                    </div>
                    
                    <input
                        type="text"
                        name="input"
                        placeholder="First Name"
                        onChange={this.handleInputChange}
                    />
                </div>
                <table className="table table-dark table-striped table-hover">
                    <thead>
                        <tr>
                            <th>
                                Employee Photo
                            </th>
                            <th>
                                First Name
                            </th>
                            <th>
                                <a id="true" onClick={this.sortFactory}><i class="fas fa-sort-alpha-down" id="true"></i></a> Last Name  <a onClick={this.sortFactory} id="false"><i class="fas fa-sort-alpha-up-alt" id="false"></i></a>

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
                        <TableRow employee={this.deliverEmployees()} />
                    </tbody>
                </table>
            </div>
        )
    }
}

export default TableComponent;