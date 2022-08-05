import s from "./NewLine.module.scss";
import newLine from "./../../assets/images/NewLine.png";

const NewLine = ( props ) => {
    return (
        <div className={s.newLine}>
            <div className={s.inner} style={props.style}>
            <img src={newLine} alt="New Line" className={s.line} />
            </div> 
        </div>
    );
}

export default NewLine;