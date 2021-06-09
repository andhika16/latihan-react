import PropTypes from 'prop-types';

const Button = ({ color, text , onClick}) => {
    return (
        <button onClick={onClick} style={{ backgroundColor : color}} className='self-btn'>{text}</button>
     );
}
 

Button.defaultProps = {
    color: 'green',
    text : 'add'
}

Button.propTypes = {
    color: PropTypes.string.isRequired,
    text :  PropTypes.string.isRequired
}


export default Button;