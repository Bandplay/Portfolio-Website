import styles from './style'
import {Navbar, Hero,Portfolio,Billing,AboutMe,CTA,Stats,Footer,} from './components'

const App = () => (

  <div className="bg-primary w-full overflow-hidden">
      <div  className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={ ` ${styles.boxWidth} ` }>
          < Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className = {`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

     <div className ={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      
        <div className= {`${styles.boxWidth}`}>
          < Billing />
          < AboutMe />
          < CTA />
          < Stats />
          < Footer />
          < Portfolio />
        </div>
      
     </div>


      


  </div>

  
)

export default App
