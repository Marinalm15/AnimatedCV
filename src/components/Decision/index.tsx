import { useContext } from "react"
import { Context } from "../../context"
import { CaretDown } from "phosphor-react"
import "./styles.css"

export function Decision() {
    const {decision, setEducation, education} = useContext(Context)

    return (
        <>
            {decision && !education &&
            <div className="container_decision">
            <div className="css-typing-decision">
                <p className="linha_ano">
                    2014...
                </p>
                <p className="linha_decisao">
                    young Marina would have to choose between two passions:
                </p>
                <p className="opcao_a">
                    (A) the logic and precision of exact sciences?
                </p>
                <p className="opcao_b">
                    (B) the charm and emotion of humanities?
                </p>

                <div className="answer_container">
                    <p className="decisao_typping">
                        for now...
                    </p>
                    <p className="answer_typping">
                       B
                    </p>

                </div>
            </div>
            
                <div className="next_page_to_education">
                    <CaretDown 
                        size={35} 
                        color="#fff" 
                        onClick={() => setEducation(true)}
                    />
                </div>
            
        </div>  

            }
        </>
    )
}