import styles from './style'
import { Navbar,Billing,Business,CTA,Stats,Footer,Portfolio,Hero }  from "./components"


const App = () => (
  <>
    <div className="bg-primary w-full overflow-hidden">
      <h1>Hellow</h1>
      <div  className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={ ` ${styles.boxWidth} ` }>
          <Navbar />
        </div>
      </div>
      
      <div className={`bg-primary ${styles.flexStart}`}>
        
          <div className = {`${styles.boxWidth}`}>
          
          </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className = {`${styles.boxWidth}`}>
          < Billing/>
          < Button />
          < Business />
          < CTA />
          < Stats />
          < Portfolio />
          < Footer />
          <AboutMe />
          </div>

        </div>

    </div>
  </>
)

export default App