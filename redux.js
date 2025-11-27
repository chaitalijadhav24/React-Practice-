import { connect } from "react-redux";
import { increment, decrement, reset } from "./action.js";

function App({variable, increment, decrement, reset}){
    return(
        <div>
            <center>
                <h1>Reac-Redux</h1>
                <h2>{variable}</h2>
                <button onClick={increment}>INC</button>
                <button onClick={decrement}>DEC</button>
                <button onClick={reset}>RES</button>
            </center>
        </div>
    )
}
const mapStateToProps=state=>({
    variable:state
})
export default connect(mapStateToProps, {increment, decrement, reset}) (App); 