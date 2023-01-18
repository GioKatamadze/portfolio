const Hamburger = (props) => {
    return (
      <svg
        onClick={props.onClick}
        width='25'
        height='23'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g fill='#088b85' fillRule='evenodd'>
          <path d='M0 0h20v3H0zM0 7h20v3H0zM0 14h20v3H0z' />
        </g>
      </svg>
    );
  };
  
  export default Hamburger;