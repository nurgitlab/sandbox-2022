import styles from "./Viewer.module.scss"
import RectangularButton from "../RectangularButton/RectangularButton";
import play from "./Viewer.assets/play.svg"
export const Viewer = () => {
    return (
        <div className={styles.Main}>
            <div className={styles.Container}>
                <div className={styles.LeftColumn}>
                    <div className={styles.Title}>
                        Enjoy Your
                        Morning Coffee.
                    </div>
                    <div className={styles.Text}>
                        The coofee is brewed by fist roasting the green coffee beans over hot coals in brazier. given to Opportunity
                    </div>
                    <RectangularButton>Test Coffee</RectangularButton>
                </div>
                <div className={styles.RightColumn}>
                    <img src={play} className={styles.Play}/>
                    <span className={styles.PlayText}>Play video</span>
                </div>
            </div>
        </div>
    )
}