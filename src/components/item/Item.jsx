import s from "./Item.module.scss";

const Item = ( props ) => {
    return (
        <div className={s.item}>
            <div className={s.inner}>
                <div className={s.arrow} style={props.style}></div>
                <span className={s.span}>{props.spanText}</span> 
            </div>
            <a className={s.title} href={props.link}>{props.title}</a>    
        </div>
    );
}

export default Item;