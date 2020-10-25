import React from 'react';
import API from '../../utils/API/API';

class TableComponent extends React.Component {
    state = {
        input: ""
    };

    componentDidMount() {
        API.getRandomEmployees().then((response) => {
            
        })
    }

    handleInputChange = (event) => {
        this.setState({input: event.target.value});
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
                </table>
            </div>
        )
    }
}

export default TableComponent;