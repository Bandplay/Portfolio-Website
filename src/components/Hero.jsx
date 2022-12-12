import React from 'react'
import styles from '../style'
import { discount, robot} from '../assets'
import SeePortfolio from './SeePortfolio'


function jobRoll(){
    jobsList=['INVENTOR.','CREATOR.','DESIGNER.','DEVELOPER.']
    jobsList.map((job)=>job)
}
export const Hero = () => (
   

    <section  id="home" className={`flex-container md:flex-row flex-col ${styles.paddingY}`}> 
        <div className={'flex-1 ${style.flex-start} flex-col xl:paddingx-0 sm:px-6 px-6'}>


            <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-s">
                <img src={discount} alt="discount" className="w-[32px] h-[32px}" />
                <p className={`${styles.paragraph} ml-2`}>
                    <span className="text-white">Contact </span> Immediately  
                    
                </p>
            </div>

            <div className="flex flex-row justify-items-between items-center w-full">
                <h1 className=" flex-1 font-poopins font-semibold ss:text-[72px] text-[52px] text-white
                    leading-[75px] ss:leading-[100px]">
                    BEN RAGLAND <br className="sm:block hidden" />{" "}
                    <span className="text-gradient">FRONT END</span> <br className="sm:block hidden" />{" "}
                    <span>Developer.</span>
                </h1>
                <div className=" ss:flex hidden md:mr-4 mr-0">
                    <SeePortfolio />
                </div>
            </div>
        </div>
    </section>
)


export default Hero