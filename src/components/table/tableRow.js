import React from 'react';

function TableRow(props) {
    return (
        <>
            {console.log(props)}
            {props.employee.map((employee) => {
                return (
                    <tr>
                        <td>
                            {/* Add actual path for image */}
                            <img src={employee.profilePhoto} alt="Employee Headshot" className="profilePhoto"/>
                        </td>
                        <td>
                            {employee.firstName}
                        </td>
                        <td>
                            {employee.lastName}
                        </td>
                        <td>
                            {employee.email}
                        </td>
                        <td>
                            {employee.phone}
                        </td>
                    </tr>

                )

            })}
        </>
    )
}

export default TableRow;