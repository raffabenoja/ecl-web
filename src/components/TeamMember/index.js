import React, { useState } from "react";
import { Container, Row, Col, Button, Card, TabPane, TabContent, CardTitle, CardText, } from "reactstrap"
import styled from "styled-components"

const TeamMember = ({ photo }) => {
    const [activeTab, setActiveTab] = useState('0');

    const toggle = tab => {
        if (activeTab === tab) setActiveTab(0)
        else setActiveTab(tab);
    }

    return (
        <Container>
            <Row>
                <Col sm={6} md={4} lg={2}>
                    {/* Single Component (Team Member) -hover, activestate, passing of eventhandler to Section List Component props: photoUrl bw, photoUrl clr, Name + handle click event > sectionlist component, which opens the details components. 
                    + Better terms: toggle = toggleTeamMemberDetail, plus identifier (fullName)
                    */}
                    <ImgBtn
                        alt='Team Profile'
                        onClick={() => { toggle('1'); }}
                        src={photo}
                    />
                </Col>
                <Col sm={6} md={4} lg={2}>
                    <ImgBtn
                        alt='Team Profile'
                        onClick={() => { toggle('2'); }}
                        src={photo}
                    />
                </Col>
            </Row>
            <Row>
                <Col lg={12}>
                    {/* Team Member Details Component */}
                    <TabContent activeTab={activeTab}>
                        <TabPane tabId="1">
                            <Row>
                                <Col sm="12">
                                    <Card body>
                                        <StyledButton
                                            className="close closeBtn"
                                            aria-label="Close"
                                            onClick={toggle}
                                        >
                                            <span aria-hidden="true">×</span>
                                        </StyledButton>
                                        <Row>
                                            <Col lg={4}>
                                                <img src={photo} width="100%" alt='Team Profile' />
                                            </Col>
                                            <Col lg={8}>
                                                <CardTitle>Name</CardTitle>
                                                <CardText>
                                                    Position <br />
                                                    Education <br />
                                                    Previous Work
                                                </CardText>
                                            </Col>
                                        </Row>
                                    </Card>
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="2">
                            <Row>
                                <Col sm="12">
                                    <Card body>
                                        <StyledButton
                                            className="close closeBtn"
                                            aria-label="Close"
                                            onClick={toggle}
                                        >
                                            <span aria-hidden="true">×</span>
                                        </StyledButton>
                                        <Row>
                                            <Col lg={4}>
                                                <img src={photo} width="100%" alt='Team Profile' />
                                            </Col>
                                            <Col lg={8}>
                                                <CardTitle>Name 2</CardTitle>
                                                <CardText>
                                                    Position <br />
                                                    Education <br />
                                                    Previous Work
                                                </CardText>
                                            </Col>
                                        </Row>
                                    </Card>
                                </Col>
                            </Row>
                        </TabPane>
                    </TabContent>
                </Col>
            </Row>
        </Container >
    );
}

export default TeamMember;

const StyledButton = styled(Button)`
    width: 2%;
    margin-bottom: -1.25rem;
    margin-left: auto;
    margin-right: 0;
    z-index: 4;
`

const ImgBtn = styled.img`
    width: 90%;
    cursor: pointer;
    margin-bottom: 1rem;
`
