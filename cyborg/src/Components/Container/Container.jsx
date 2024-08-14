import './Container.css'; 

const Container = (props) => {
  return (
    // if we need to pass a component "function" we need to get a props.children.
    <div className='container main-container'>{props.children}</div>
  )
}

export default Container