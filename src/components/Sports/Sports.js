import React, { useEffect, useState } from 'react';
import { Card, Container, Row, Button, Col, Alert } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import MenuBar from '../MenuBar/MenuBar';
import './Sports.css';

const Sports = () => {
    const [searchText, setSearchText] = useState("");
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${searchText}`)
            .then(res => res.json())
            .then(data => setTeams(data?.teams))
    }, [searchText])

    const handleSearch = event => {
        setSearchText(event.target.value);
    }
    return (
        <div className="all-teams">
        <MenuBar></MenuBar>
            <div className="text-center">
                <h2>Our Teams</h2>
                <input onChange={handleSearch} className="p-2" type="text" placeholder="Enter team name" />
                <button className="btn btn-danger ms-2">Search</button>
            </div>
            <Container className="mt-5 text-center">
                <Row xs={1} md={3} className="g-4">
                    {
                      teams === null ?  (<div className="w-25 mx-auto">
                          <Alert variant='dark'>
                      Sorry, No Result Found
                    </Alert>
                      </div>) : teams.map(team =>
                            <Col key={team.idTeam}>
                                <Card style={{ width: '18rem' }} className="p-2">
                                    <Card.Img style={{ height: '100px', width: '100px', margin: 'auto' }} variant="top" src={team?.strTeamBadge} />
                                    <Card.Body>
                                        <Card.Title>{team?.strTeam}</Card.Title>
                                        <p>Country: {team?.strCountry}</p>
                                        <NavLink to={`/details/${team?.idTeam}`}>
                                            <Button variant="primary">Details</Button>
                                        </NavLink>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Sports;