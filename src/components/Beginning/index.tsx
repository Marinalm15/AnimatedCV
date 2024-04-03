import "./styles.css"
import { useContext } from "react"
import { Context } from "../../context"
import brazilFlag from "../../assets/brazil.png"
import potugueseFlag from "../../assets/portugal.png"
import { Airplane, CaretDown } from "phosphor-react"


export function Beginning() {
    const {beginning, setDecision, education, decision} = useContext(Context)

    return (
        <> 
            {beginning && !education && !decision &&
            <div className="container">
                <div className="css-typing-begnning">
                    <p className="born_date">
                        i was born on 1995-11-03!
                    </p>
                    <p className="born_location">
                        in a small town in the interior of minas gerais, brazil.
                        <img src={brazilFlag} /> 
                    </p>

                    <div className="portugal_container">
                        <p className="move_date_typping">
                            <img src={potugueseFlag} /> 2012-04-25
                        </p>
                        <p className="portugal_typping">
                            i moved to portugal with my family.
                        </p>
                        <div className="next_page_to_decision">
                            <CaretDown 
                                size={35} 
                                color="#fff" 
                                onClick={() => setDecision(true)}
                                />
                        </div>
                    </div>
                </div>
                <div className="sky">
                    <div className="trail">
                        <Airplane size={32} weight="fill" color="#fff" className="plane" />
                    </div>
                </div>
            </div>  
            }
        </>
    )
}