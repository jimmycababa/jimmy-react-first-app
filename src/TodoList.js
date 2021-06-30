import React from 'react'


export default function TodoList({ characters }) {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Function</th>
                    </tr>
                </thead>
            </table>
            {characters.length}
        </div>
    )
}
