import Header from './components/Header'
import './App.css'
import Footer from './components/Footer'
import MyCard from './components/MyCard'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {

  return (
    <>

        
        <Header título = 'Adopta un perrito'/>

        <Container   gap={2}>

          <Row className='p-4'>

            <Col md={4} >
              
              <MyCard imagen = 'https://images.pexels.com/photos/3478875/pexels-photo-3478875.jpeg?auto=compress&cs=tinysrgb&w=1200' nombre = 'Clarita' info = 'Lomito hiper regalona' color = 'success' texto = 'Husky'/>

            </Col>

            <Col md={{ span: 4, offset: 4 }}>

              <MyCard imagen = 'https://cdn.pixabay.com/photo/2014/08/21/14/51/dog-423398_1280.jpg' nombre = 'Panchito' info = 'Amigo de sus amigos, enemigo de sus enemigos' color = 'danger' texto = 'Quiltro'/>
              
            </Col>  

          </Row>

          <Row className='p-4'>

            <Col md={4}>

              <MyCard imagen = 'https://cdn.pixabay.com/photo/2017/02/01/09/48/jack-russell-2029214_1280.jpg' nombre = 'Luna' info = 'Perrita que tiene mucha energía durante la noche' color = 'primary' texto = 'Quiltro'/>

            </Col>

            <Col md={{ span: 4, offset: 4 }}>
            
              <MyCard imagen = 'https://cdn.pixabay.com/photo/2017/06/24/09/13/continental-bulldog-2437110_1280.jpg' nombre = 'Joaquin' info = 'Regalon a más no poder, pero con complejo de humano' color = 'secondary' texto = 'Quiltro pequeño'/>

            </Col>
           
          </Row>

    </Container>

        <Footer descripción = 'Explora nuestra galería de adopción de perritos para encontrar a tu compañero perfecto. Tenemos una variedad de perritos con diferentes personalidades y tamaños, todos en busca de un hogar amoroso. Cada imagen captura su escencia única. Adopta un perrito y brindale una segunda oportunidad. Encuentra a tu compañero peludo para siempre.' />         

    </>
  )
}

export default App
  