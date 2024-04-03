import { useContext } from "react";
import "./styles.css";
import { Context } from "../../context";

export function FirstPage() {
    const {yes, setYes, no, setNo, beginning, setBeginning} = useContext(Context)
    

    return (
        <div>
            {!beginning &&
            <>
            {!yes && !no &&
            <div>
                <div className="typewriter">
                    <h1>hello! are you ready?</h1>
                </div> 
            </div>
            }

            {no &&
            <div>
                <div className="typewriter">
                    <h1>:(</h1>
                </div> 
            </div>
            }

            <div className="buttons_wrapper">
                <button 
                    className="yes_or_no"
                    onClick={() => {
                        setYes(true),
                        setBeginning(true)
                        }}>
                        yes
                </button>
                <button 
                    className="yes_or_no"
                    onClick={() => setNo(true)}>
                        no
                </button>
            </div>

            <div className="back_to_beginning_wrapper">
                <button 
                    className="back_to_beginning"
                    onClick={() => {
                        setNo(false),
                        setYes(false)}}>
                    Back to the beginning
                </button>
            </div>
            </>
            }
        </div>
    )
}