import React, { useEffect, useState } from 'react'
import "../Styles/Main.css";
import { data, projects, Slider } from '../Config/Data';
import img from "../Images/Vector1.png";
import img1 from "../Images/research.png";
import img2 from "../Images/solution1.png";
import img3 from "../Images/warranty1.png";
import img4 from "../Images/compitative.png";
import img5 from "../Images/customer.png";
import about from "../Images/about.png";
import dot from "../Images/dot.png";
import Cards from '../Components/Cards';
import Projects from '../Components/Projects';
import avhive from "../Images/Rectangle4.png";

const Main = () => {
  const [Count , setCount] = useState(0);
  const value = Slider[Count];

  const ForWard = () =>{
    const next = Count + 1;
    const lent = Slider.length;
    if(next === lent){
      setCount(0);
    }    
    else{
      setCount(next);
    }
  }

  const BackWard = () =>{
    const back = Count - 1;
    const lent = Slider.length;

    if(back<0)
    {
      setCount(lent -1)
    }
    else{
      setCount(back);
    }
  }

  useEffect(() =>{
   const setting = setTimeout(() =>{ 
      ForWard()
    },3000);
    return () =>clearTimeout(setting)
  },[Count]);

  return (
    <div>
      {/* Slider Show */}
      <div className='main__image'> 
        <div className='slider__image'>
            <img src={value.img} className="h-[100vh] w-[100%] " alt='' />
        </div>
        
        <div className='main__heading'>
            <h2><span className='text-[#5EA410]'>{value.title}</span><span className='text-[#202E86]'>{value.title1}</span><span className='text-[#F6951D]'>{value.title2}</span></h2>
        </div>
        <div className='main__title'>
            <p>{value.subtitle}</p>
            {/* <p>EMPOWERING OUR FUTURE WITH SOLAR ENERGY</p> */}
        </div>
        {/* find this pexils <p className='absolute top-[656px]'>sdhfksdjfhksdhj</p> */}
      </div>

      {/* Home Services */}
      <div className='home__container'>
      <div className='main__title-div'>
          <p className='title__line'>Why Choose <span className='font-semibold'>GREENWENDENERGY?</span></p>
      </div>

  {/* First Choose  */}
  <div className='flex flex-wrap'>
      <div className='flex'>
          <div className='avator'>
              <img src={img} className="image" alt='' />
          </div>
          <div className='paragh'>
              <p>Professional Teams.</p>
          </div>
      </div>

      {/* Second Choose  */}
      <div className='flex'>
          <div className='avator'>
              <img src={img1} className="image" alt='' />
          </div>
          <div className='paragh'>
              <p>Continuous research & development</p>
          </div>
      </div>

      {/* third Choose  */}
      <div className='flex'>
          <div className='avator'>
              <img src={img2} className="image" alt='' />
          </div>
          <div className='paragh'>
              <p>Tailor made solutions.</p>
          </div>
      </div>

      {/* fourth Choose  */}
      <div className='flex'>
          <div className='avator'>
              <img src={img3} className="image" alt='' />
          </div>
          <div className='paragh'>
              <p>longest warranties</p>
          </div>
      </div>

      {/* fifth Choose  */}
      <div className='flex'>
          <div className='avator'>
              <img src={img4} className="image" alt='' />
          </div>
          <div className='paragh'>
              <p>Competitive prices.</p>
          </div>
      </div>

      {/* Sixth Choose  */}
      <div className='flex'>
          <div className='avator'>
              <img src={img5} className="image" alt='' />
          </div>
          <div className='paragh'>
              <p>best after sale services</p>
          </div>
      </div>

    </div>
    </div>

      {/* About Services */}
      <div className='about__div'>
      <div>
          <img src={about} className="about__image" alt='' />
          <div className='mession__div'>
              <img src={dot} className='pt-20 ml-3' alt='' />
              <p className='paraghraph'>Mission: To provide high quality cost effective products and enhance customer's satisfaction.</p>
          </div>
      </div>

      <div>
        <p className='about__us'>About US</p>
        <p className='heading'>What is GreenWendEnergy?</p>
        <p className='about__paragh'>Greenwend Energy Pvt Ltd is providing SOLAR ENERGY services and products. We deal in TIER 1 Solar panels (Branded with 30/12 years warranty), Solar inverter (Branded with warranty), Batteries and other Solar products.</p>
        <p className='about__more'>More About Us </p>
      </div>
      </div>

      {/* Services Design */}
        <div>
            <h2 className='Services'>Our <span className='text-[#5462BA]'>Services</span></h2>
            
            <p className='services__para'>We are happy to use our expertise to work with you to develop a tailor-made solution for your challenge. Here are some highlights of our range of service</p>

            {/* Services Cards */}
            <div className='flex flex-wrap justify-center mt-10 gap-12'>
              {data.map((it) =>{
                return <div>
                  <Cards ImgSrc={it.img} Title={it.title} Desc={it.desc} Learn={it.learn} />
                </div>
              })}
            </div>
        </div>

        {/* Our Achievements  */}

        <div className='mt-20 achive__image'>
            <h2 className='our__head'>Our Achievements</h2>
              
              <div className='flex flex-wrap justify-center pt-28'>
                <div className='flex flex-wrap justify-center h-32 w-80'>
                    <p className='our__para'>7000(KW)</p>
                    <p className='our__title'>Installed Capacity</p>
                </div>

                <div className='flex flex-wrap justify-center h-32 w-80'>
                    <p className='our__para'>5000(KWh)</p>
                    <p className='our__title'>Self Consumption</p>
                </div>

                <div className='flex flex-wrap justify-center h-32 w-80'>
                    <p className='our__para'>35434(KG)</p>
                    <p className='our__title'>Carbon Reduced</p>
                </div>

                <div className='flex flex-wrap justify-center h-32 w-80'>
                    <p className='our__para'>2000(KWh)</p>
                    <p className='our__title'>Grid Export</p>
                </div>

              </div>
        </div>
        <br />
        {/* Our Projects */}
            <div>
                <h2 className='our__projects'>Our <span className='text-[#5462BA]'>Projects</span></h2>
                <div className='flex flex-wrap justify-center gap-4'>
                   {projects.map((it) => {
                      return <div>
                      <Projects ImgSrc={it.img} Title={it.title} Learn={it.learn} />
                    </div>
                    })}
                </div>
            </div>


            <br />
      </div>
    )
}

export default Main