import styles from "./Avatar.module.scss";

interface IAvatar{
    src: string,
    hasBorder?: boolean,
    alt?: string
} 
function Avatar({hasBorder = true, src, alt}:IAvatar){
    return (
        <img className={hasBorder ? styles.avatarHasBorder : styles.avatar} src={src} alt={alt? alt : ""}/>
    )
}

export { Avatar }