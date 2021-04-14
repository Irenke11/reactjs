import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import {AiOutlineFileProtect} from 'react-icons/ai';
import {FiMapPin} from 'react-icons/fi';
import {FiPhoneCall} from 'react-icons/fi';

class Call extends React.Component {
    render() {
        const icon={
            fontSize: '20px',
        }
        return (
            <Container fluid  className="pt-3 pb-3">
                <Row>
                    <Col xs={12} md={6}>
                        <iframe title="myPage" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3641.376068629658!2d120.65869155099941!3d24.123427730262904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693c54981a04c5%3A0x597131c48ebf5d23!2z5aSn5a6J5ZyL546L5aSn5qiT!5e0!3m2!1szh-TW!2stw!4v1596510571615!5m2!1szh-TW!2stw" style={{border: '0',width:"100%",height:"400px"}}   frameborder="0"  allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    </Col>
                    <Col xs={12} md={6} className="p-3">
                        <Row>
                            <Col style={icon} xs={1}><AiOutlineFileProtect/></Col>
                            <Col style={icon} xs={11}>XX XXX XX XX</Col>
                            <Col style={icon} xs={1}><FiMapPin/></Col>
                            <Col style={icon} xs={11}>No. 707, Zhongming S. Rd., South Dist., Taichung City 402, Taiwan (R.O.C.)</Col>
                            <Col style={icon} xs={1}><FiPhoneCall/></Col>
                            <Col style={icon} xs={11}>09090912345</Col>
                        </Row>
                    </Col>
                    <Col> <span>* Just modle please don't make this call</span></Col>
                </Row>
            </Container>
        )
    }
}

export default Call;