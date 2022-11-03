import PropTypes from 'prop-types';

const Button = (props) => {
   
    return (
        <button  onClick={props.onClick} style={{backgroundColor: props.color}} className='btn'>{props.title}</button>
    )
}

Button.defaultProps = {
    title: "Button",
    color: "gray"
}

Button.propTypes = {
    title: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
}

export default Button;