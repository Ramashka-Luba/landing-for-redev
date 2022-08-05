import s from "./WhatsNext.module.scss";

const WhatsNext = ( props ) => {
    return (
        <div className={s.whatsNext}>
            <div className={s.inner}>
                <div className={s.text}>{props.text}
                    <span className={s.spanText}>{props.spanText}</span>
                </div>
            </div>
                
        </div>
    );
}

export default WhatsNext;