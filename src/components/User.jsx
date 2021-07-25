import React from 'react';
import { Link } from 'react-router';

class User extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
        fetch(`https://my-json-server.typicode.com/sarthakg04/Container-Ship-Tracking-MockAPI/users/${this.props.params.username}`)
        .then(response => response.json())
        .then(
            user => {
                this.setState({
                    user: user
                });
            }
        );
    }

    renderStat(stat) {
        return (
            <li key={stat.name} className="user-info__stat">
                <Link to={stat.url}>
                    <p className="user-info__stat-value">{stat.value}</p>
                    <p className="user-info__stat-name">{stat.name}</p>
                </Link>
            </li>
        );
    }

    render() {
        if (!this.state.user) {
            return (<div className="user-page">Loading...</div>);
        }

        const user = this.state.user;

        return (
            <div className="user-page">
                <div className="user-info">
                    <div>
                        <h1 className="user-info__title">Container Number: {user.container_number}</h1>
                        <p className="user-info__bio"></p>
                        <p className="user-info__bio">Origin: {user.from}</p>
                        <p className="user-info__bio">Destination: {user.destination}</p>
                        <p className="user-info__bio">Vessel: {user.vessel}</p>
                        <p className="user-info__bio">Vessel ETA: {user.vessel_eta}</p>
                        <p className="user-info__bio"></p>
                        <div>
                          <p className="user-info__bio">Type: {user.type}</p>
                          <p className="user-info__bio">Price of Calculation: {user.price_of_calculation}</p>

                        </div>
                    </div>

                </div>
            </div>
        );
    }
};

export default User;
