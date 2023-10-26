import { Title, Description, Button } from "./homeStyle"
import './home.scss'

const HeroHeader = () => {
    return (
        <div className="hero-header">
            <Title>Online voting, smarter, faster, safer.</Title>
            <Description>Use cryptography to make your vote count.</Description>
            <Button>Get started</Button>
        </div>
    )
}

const Homepage = () => {
    return (
        <>
            <HeroHeader />  
        </>
    )
}

export default Homepage