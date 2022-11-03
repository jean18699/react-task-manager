import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onCreate}) => {

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button onClick={()=>onCreate()} title="Add" color="green"></Button>
        </header>
    )
}


Header.defaultProps = {
    title: "Task Tracker"
}

// Permite asignar un tipo a la propiedad (prop)
Header.propTypes = {
    title: PropTypes.string.isRequired
}

// CSS ini JS
const headingStyle = {color: 'red', backgroundColor: 'black'};

export default Header
