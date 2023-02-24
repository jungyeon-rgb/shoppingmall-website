function Counter(props){
    let countState = React.useState(0);
    let count = countState[0];
    let setCount = countState[1];
    function up(){
    setCount(count+1);
    }
    return <><button onClick={up}>+</button>{count}</>;
  }