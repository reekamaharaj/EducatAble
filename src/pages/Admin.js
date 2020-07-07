import * as React from 'react';
import axios from 'axios';

function Admin() {
    const [newQ, setNewQ] = React.useState('');
    const populateQs = () => {
        axios
            .get('/api/newQuestion')
            .then((res) => setNewQ(res.data))
            .catch((err) => console.log(err));
    };

    return <div></div>;
}
export default Admin;
