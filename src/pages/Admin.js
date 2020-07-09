import * as React from 'react';
import axios from 'axios';

function Admin() {
    const [newQ, setNewQ] = React.useState('');
    const [token, setToken] = React.useState(localStorage.getItem('token'));

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

    return (<div></div>);
}
export default Admin;
