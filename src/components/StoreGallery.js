import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"

export default function StoreGallery() {
    return (
        <Container>
            <h1>Browse stores in Los Angeles</h1>
            <Row>
                <Col xs>
                    <Card style={{ border: "none", borderRadius: "0", borderBottom: "1px solid lightgray" }}>
                        <Card.Body style={{ textAlign: "left" }}>
                            <div style={{ display: "block", margin: "2.5px" }}>
                                <img src="data:image/png;base64,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" alt="Ralphs logo" className="rounded-circle" style={{ border: "1px solid lightgray", width: "60px" }} />
                            </div>
                            <div style={{ display: "inline-block", verticalAlign: "middle", margin: "2.5px" }}>
                                <Card.Title>Ralphs</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Delivery • Pickup</Card.Subtitle>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs>
                    <Card style={{ border: "none", borderRadius: "0", borderBottom: "1px solid lightgray" }}>
                        <Card.Body style={{ textAlign: "left" }}>
                            <div style={{ display: "inline-block", margin: "2.5px" }}>
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAAWCAMAAADNT/NHAAAAnFBMVEX////kFyAAAADiAAAUEA6Tk5LDw8P29vaGhYUrKSgaFxUXFBIPCwg8OjkoJiUlIyIgHh0zMTD3zc7b29vk5OS2trbyqarzsrPjABFfXl3w8PCMi4uenZ0JAQDT0tKxsLDnREjrcXT87OxqaWh8e3tHRUV0c3OmpaXwnp/ui432wMHqYmXvkpT63N3lKjHnTFDoVlnmNTpTUlHtgYOv6bMrAAADqElEQVRIib2WC3OjOAzHHdlADAabEFLyAJKSRx/b3V72+3+3kyxMmu7t3M3cTjWTwYDlnyX95SDEF1jy8vy6/7YQi8Nh9fYVQG+PBynlAQdPsmmk/P7wP9dL/tu0B9nM5Dfiy5k3+YNfxEOeX6MqzFuH9epotIuotmEsLtF2419XW562i7bkcVwKsZmHl2KzjeYbxs5mzTuNXkburPmLbs/glFEZjLglXEbu3LiUzFxFDDzMQFwAev966xgA2YmChzm5gBrYeTBwFCFI+XbHncmfGC0UeR/v8sA9Ohe4rsjJykHESpc8FpvWrv1r13Z06bOM9rFL/QJ5AbHPIa7qZx0aAnFdJu5MPuLqrc9HnYzb16oPXBiThlwVT3WwnhAbdx5vaZbTaUTJh8JvO9PAhfOsPXuubgGvML42rM7Zs0U5cZc3bh1m1Bzg2mriJ+DD77NCG19tRds5O7XzkxcfueJ5qvBB9Mpeb8pMlF07E/8Dd4qXSZgXnV4I6Hek0S31wjhZ6DqwV578wKTg+xDAuJPcWRWkRGVantxp5Kq4Itsg10UxGW1koETvUneyuU8z5cC03eA0F6rIT0U77vjJg+R0WCwCGPd/NYUqxzbKcKO1go65Whk0FDjqyik0qH1lMURtr3WKNWx9lXNb8mNKuSmKNlSFuc1hSmgQNY0vxhXAPopyrFixyDVA5rnKD73kUneuCAJuG3uHuCUtlpYlPFg7iDvuTL5MYBb4mPmj0T7G0pKmIufFOHemW5JRnrNaJGg82+mzTelaDpbke6U7LDULA4VXf+LO5CI8ebur+C6lGGOTUkCJccMvupqWEqIz2jo8rboWr3NqHufVm7KaRsHfC0lOp/KdwoUrUBWnQpda04+Iv+Vis/oJeEpo01FiJ7fuE3dxa9mn8dGeC879kSg8XzrQGQnJqMIdf9tHwje5j6zPtKWTVafsZr0wPnLFhzNqxU9+NH4M63gjqislbG3b2ndLdyqwVe64bluT8YIVjOGDi6jMqmc3bKrlJ+4oIw9Opp3gOYndC2CsS5MKxpMXXbFf77naZWTA92XG1yPO2ISjmApPXVVn6Y37+CFgry3SlXzGnJlWZQrWG7EG7lsfCAAueuNCML6Pxv/AyhIbJowmlx6mvzTxQVljM2Gamz07131MR3RoEzGOP92z8e1y2tC9G98kd18EK9lMf0L+iJbv4kuMvnMa/MLB5CavUu4x7Kr7d7c/YPRd9/qSLJ7ef/J3Xdf9DdO3QbEqgWF8AAAAAElFTkSuQmCC" alt="Safeway" className="rounded-circle" style={{ border: "1px solid lightgray", width: "60px" }} />
                            </div>
                            <div style={{ display: "block", verticalAlign: "middle", margin: "2.5px" }}>
                                <Card.Title>Safeway</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Delivery</Card.Subtitle>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs>
                    <Card style={{ border: "none", borderRadius: "0", borderBottom: "1px solid lightgray" }}>
                        <Card.Body style={{ textAlign: "left" }}>
                            <div style={{ display: "block", margin: "2.5px" }}>
                                <img src="data:image/png;base64,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" alt="Costco logo" className="rounded-circle" style={{ border: "1px solid lightgray", width: "60px" }} />
                            </div>
                            <div style={{ display: "inline-block", verticalAlign: "middle", margin: "2.5px" }}>
                                <Card.Title>Costco</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Delivery</Card.Subtitle>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            
        </Container>
    )
}