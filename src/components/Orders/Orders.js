import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import OrderDetailsTable from '../OrderDetailsTable/OrderDetailsTable';

const Orders = () => {
    const [user] = useContext(UserContext);
    const {name, email} = user;
    const [allOrders, setAllOrders] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:1712/submitedOrders/${email}`)
        .then(res => res.json())
        .then(data => setAllOrders(data));
    }, [email])

    return (
        <div>
            <h3>{name}</h3>
            {
                allOrders.map(order => <OrderDetailsTable order={order} key={order._id} />)
            }
        </div>
    );
};

export default Orders;