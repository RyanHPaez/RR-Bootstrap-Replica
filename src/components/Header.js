import Card from "react-bootstrap/Card"


export default function Header() {
    return (
        <Card style={{ width: '90%', backgroundImage: "url(https://www.instacart.com/image-server/768x/www.instacart.com/assets/homepage/homepage-mobile-background-m3-high-res-ca3279087ea0a3337f671b694b196d43fd207443d5825e61295b0996974835e9.jpg)", height: "500px", backgroundRepeat: "no-repeat", backgroundPosition: "right", backgroundColor: "#DFEED6", backgroundSize: "450px 500px" }}>
            <Card.Body style={{ textAlign: "left", width: "300px", marginLeft: "50px", marginTop: "100px" }}>
                <Card.Title style={{ fontSize: "41px" }}>Order groceries for delivery or pickup today</Card.Title>
                <Card.Subtitle style={{ fontSize: "15px" }} className="mb-2 text-muted">Whatever you want from local stores, brought right to your door.</Card.Subtitle>                
            </Card.Body>
        </Card>
    )
}