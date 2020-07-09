import * as React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';

function Admin() {
    const [newQ, setNewQ] = React.useState('');
    const [token, setToken] = React.useState(localStorage.getItem('token'));
    const [admin, setAdmin] = React.useState(localStorage.getItem('admin'));

    React.useEffect(
        function () {
            populateQs();
            if (!!token) {
                localStorage.setItem('token', token);
            } else {
                localStorage.removeItem('token');
            }
        },
        [token]
    );

    const populateQs = () => {
        axios
            .get('/api/newQuestion', { headers: { Authorization: "Bearer " + token } } )
            .then((res) => setNewQ(res.data))
            .catch((err) => console.log(err));
    };

    return (
    <div>
        {admin ? (
        <p>Admin page</p>
        ):(
        <Redirect to="/"></Redirect>
        )}
    </div>
    );
}
export default Admin;
