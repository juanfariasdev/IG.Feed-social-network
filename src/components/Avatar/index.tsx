import styles from "./Avatar.module.scss";

interface IAvatar{
    src: string;
    hasBorder?: boolean
} 
function Avatar({hasBorder = true, src}:IAvatar){
    return (
        <img className={hasBorder ? styles.avatarHasBorder : styles.avatar} src={src} />
    )
}

export { Avatar }