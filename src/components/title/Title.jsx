import s from "./Title.module.scss";

const Title = ( props ) => {
    return (
        <div className={s.title}>
            <div className={s.inner}>
                <h1 className={s.h1Title}>{props.h1Title}</h1>
                <h2 className={s.h2Title}>{props.h2Title}</h2>
            </div>

        </div>
    );
}

export default Title;