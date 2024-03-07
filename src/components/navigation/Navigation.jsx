import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { useNavigate } from 'react-router-dom'
import styles from './nav.module.css'

const Navigation = ({ children }) => {
  let navigate = useNavigate()

  return (
    <>
      <Container className={styles.container}>
        <Nav className={styles.nav}>
          <div>
            <Nav.Item>
              <span className={styles.name}>Troy Tang.</span>
            </Nav.Item>
          </div>
          <div className={styles.links}>
            <Nav.Item>
              <Nav.Link
                className={styles.navlink}
                onClick={() => navigate('/')}
              >
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                className={styles.navlink}
                onClick={() => navigate('/about')}
              >
                About
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                className={styles.navlink}
                onClick={() => navigate('/education')}
              >
                Education
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                className={styles.navlink}
                onClick={() => navigate('/pricing')}
              >
                Pricing
              </Nav.Link>
            </Nav.Item>
          </div>
        </Nav>
      </Container>
      {children}
    </>
  )
}

export default Navigation
