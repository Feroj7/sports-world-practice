import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './TeamDetail.css';
import male from '../../images/male.png';
import female from '../../images/female.png';
import { Col, Container, Row } from 'react-bootstrap';

const TeamDetails = () => {

    const [teamDetail, setTeamId] = useState({});
    const { teamId } = useParams();

    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`)
            .then(res => res.json())
            .then(data => setTeamId(data?.teams[0]))
    }, [teamId])

    return (
        
        <div className="team-detail pt-5">        
            <div>
                {
                    teamDetail?.strGender === "Male" ? (
                        <div className="w-50 mx-auto">
                            <img className="img-fluid" src={male} alt="male" />
                        </div>
                    )
                        : (
                            <div className="w-50 mx-auto">
                                <img className="img-fluid" src={female} alt="female" />
                            </div>
                        )
                }
            </div>
            <Container fluid className="mt-5 p-5">
                <Row>
                    <Col className="text-center">
                      <img className="w-50 h-50" src={teamDetail?.strTeamBadge} alt="" />
                      <h2>{teamDetail?.strTeam}</h2>
                      <p>{teamDetail?.strCountry}</p>
                      <p>{teamDetail?.strLeague}</p>
                    </Col>
                    <Col>
                        <p>{teamDetail?.strDescriptionEN}</p>
                    </Col>
                </Row>
            </Container>
            </div>
            );
};

            export default TeamDetails;