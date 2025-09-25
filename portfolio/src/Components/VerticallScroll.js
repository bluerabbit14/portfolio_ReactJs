import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import './VerticallScroll.css'

export default function VerticallScroll() {
  // Refs for scroll tracking
  const containerRef = useRef(null)
  const list1Ref = useRef(null)
  const list2Ref = useRef(null)
  const list3Ref = useRef(null)
  const list4Ref = useRef(null)
  const list5Ref = useRef(null)

  // Scroll progress tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Transform values for infinite scroll
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -300])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 300])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -300])
  const y4 = useTransform(scrollYProgress, [0, 1], [0, 300])
  const y5 = useTransform(scrollYProgress, [0, 1], [0, -300])

  const carColumns = [
    {
      id: 1,
      title: "LUXURY CARS",
      cars: [
        {
          id: 1,
          name: "BMW M8",
          image: "/Assets/listItem1.jpg",
          year: "2023"
        },
        {
          id: 2,
          name: "Mercedes AMG",
          image: "/Assets/listItem2.jpg",
          year: "2023"
        },
        {
          id: 3,
          name: "Audi RS7",
          image: "/Assets/listItem3.jpg",
          year: "2023"
        },
        {
          id: 4,
          name: "Porsche 911",
          image: "/Assets/listItem4.jpg",
          year: "2023"
        },
        {
          id: 5,
          name: "Porsche 911",
          image: "/Assets/listItem5.jpg",
          year: "2023"
        },
        {
          id: 6,
          name: "Porsche 911",
          image: "/Assets/listItem6.jpg",
          year: "2023"
        },
        {
          id: 7,
          name: "Porsche 911",
          image: "/Assets/listItem7.jpg",
          year: "2023"
        }

      ]
    },
    {
      id: 2,
      title: "SPORTS CARS",
      cars: [
        {
          id: 1,
          name: "Ferrari 488",
          image: "/Assets/listItem6.jpg",
          year: "2023"
        },
        {
          id: 2,
          name: "Lamborghini Huracan",
          image: "/Assets/listItem5.jpg",
          year: "2023"
        },
        {
          id: 3,
          name: "McLaren 720S",
          image: "/Assets/listItem3.jpg",
          year: "2023"
        },
        {
          id: 4,
          name: "Aston Martin Vantage",
          image: "/Assets/listItem7.jpg",
          year: "2023"
        },
        {
          id: 5,
          name: "Aston Martin Vantage",
          image: "/Assets/listItem4.jpg",
          year: "2023"
        },
        {
          id: 6,
          name: "Aston Martin Vantage",
          image: "/Assets/listItem1.jpg",
          year: "2023"
        },
        {
          id: 7,
          name: "Aston Martin Vantage",
          image: "/Assets/listItem2.jpg",
          year: "2023"
        }
      ]
    },
    {
      id: 3,
      title: "SUPERCARS",
      cars: [
        {
          id: 1,
          name: "Bugatti Chiron",
          image: "/Assets/listItem5.jpg",
          year: "2023"
        },
        {
          id: 2,
          name: "Koenigsegg Agera",
          image: "/Assets/listItem3.jpg",
          year: "2023"
        },
        {
          id: 3,
          name: "Pagani Huayra",
          image: "/Assets/listItem7.jpg",
          year: "2023"
        },
        {
          id: 4,
          name: "Mclaren P1",
          image: "/Assets/listItem2.jpg",
          year: "2023"
        }
        ,
        {
          id: 5,
          name: "Mclaren P1",
          image: "/Assets/listItem1.jpg",
          year: "2023"
        }
        ,
        {
          id: 6,
          name: "Mclaren P1",
          image: "/Assets/listItem4.jpg",
          year: "2023"
        }
        ,
        {
          id: 7,
          name: "Mclaren P1",
          image: "/Assets/listItem6.jpg",
          year: "2023"
        }
      ]
    },
    {
      id: 4,
      title: "CLASSIC CARS",
      cars: [
        {
          id: 1,
          name: "Ford Mustang",
          image: "/Assets/listItem2.jpg",
          year: "1967"
        },
        {
          id: 2,
          name: "Chevrolet Camaro",
          image: "/Assets/listItem1.jpg",
          year: "1969"
        },
        {
          id: 3,
          name: "Dodge Charger",
          image: "/Assets/listItem3.jpg",
          year: "1970"
        },
        {
          id: 4,
          name: "Jaguar E-Type",
          image: "/Assets/listItem4.jpg",
          year: "1961"
        },
        {
          id: 5,
          name: "Jaguar E-Type",
          image: "/Assets/listItem7.jpg",
          year: "1961"
        },
        {
          id: 6,
          name: "Jaguar E-Type",
          image: "/Assets/listItem6.jpg",
          year: "1961"
        },
        {
          id: 7,
          name: "Jaguar E-Type",
          image: "/Assets/listItem5.jpg",
          year: "1961"
        }
      ]
    },
    {
      id: 5,
      title: "CLASSIC CARS",
      cars: [
        {
          id: 1,
          name: "Ford Mustang",
          image: "/Assets/listItem5.jpg",
          year: "1967"
        },
        {
          id: 2,
          name: "Chevrolet Camaro",
          image: "/Assets/listItem7.jpg",
          year: "1969"
        },
        {
          id: 3,
          name: "Dodge Charger",
          image: "/Assets/listItem4.jpg",
          year: "1970"
        },
        {
          id: 4,
          name: "Jaguar E-Type",
          image: "/Assets/listItem1.jpg",
          year: "1961"
        },
        {
          id: 5,
          name: "Jaguar E-Type",
          image: "/Assets/listItem3.jpg",
          year: "1961"
        },
        {
          id: 6,
          name: "Jaguar E-Type",
          image: "/Assets/listItem6.jpg",
          year: "1961"
        },
        {
          id: 7,
          name: "Jaguar E-Type",
          image: "/Assets/listItem2.jpg",
          year: "1961"
        }
      ]
    }
  ]

  return (
    <section id="vertical-scroll" className="vertical-scroll" ref={containerRef}>
      <div className="vertical-scroll-container">
        <div className="columns-grid">
          {carColumns.map((column) => {
            const yTransform = column.id === 1 ? y1 : 
                              column.id === 2 ? y2 : 
                              column.id === 3 ? y3 : 
                              column.id === 4 ? y4 : y5
            
            const listRef = column.id === 1 ? list1Ref : 
                           column.id === 2 ? list2Ref : 
                           column.id === 3 ? list3Ref : 
                           column.id === 4 ? list4Ref : list5Ref
            
            return (
              <div key={column.id} className="car-column">
                <motion.div 
                  ref={listRef}
                  className="car-list"
                  style={{ y: yTransform }}
                >
                  {column.cars.map((car) => (
                    <div key={car.id} className="car-card">
                      <div className="car-image">
                        <img src={car.image} alt={car.name} />
                      </div>
                      <div className="car-info">
                        <h4 className="car-name">{car.name}</h4>
                        <p className="car-year">{car.year}</p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
