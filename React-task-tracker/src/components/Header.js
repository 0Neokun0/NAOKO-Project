import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button color={showAdd ? 'red' : 'green'} 
      text={showAdd ? '閉める' : '追加する'} 
      onClick= {onAdd} />
    </header>
  )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// CSS in Js
// return (
// <h1 style={headingStyle}>{title}</h1>
// )
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }
export default Header
