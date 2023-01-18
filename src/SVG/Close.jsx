const Close = (props) => {
    return (
      <svg
        width='25'
        onClick={props.onClick}
        height='24'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M15.01.368l2.122 2.122-6.01 6.01 6.01 6.01-2.122 2.122L9 10.622l-6.01 6.01L.868 14.51 6.88 8.5.87 2.49 2.988.368 9 6.38 15.01.37z'
          fill='#088b85'
          fillRule='evenodd'
        />
      </svg>
    );
  };
  
  export default Close;