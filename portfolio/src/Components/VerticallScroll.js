import React from 'react'
import './VerticallScroll.css'

export default function VerticallScroll() {
  const carColumns = [
    {
      id: 1,
      title: "LUXURY CARS",
      cars: [
        {
          id: 1,
          name: "BMW M8",
          image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=300&h=400&fit=crop",
          year: "2023"
        },
        {
          id: 2,
          name: "Mercedes AMG",
          image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=300&h=400&fit=crop",
          year: "2023"
        },
        {
          id: 3,
          name: "Audi RS7",
          image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=300&h=400&fit=crop",
          year: "2023"
        },
        {
          id: 4,
          name: "Porsche 911",
          image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=300&h=400&fit=crop",
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
          image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=300&h=400&fit=crop",
          year: "2023"
        },
        {
          id: 2,
          name: "Lamborghini Huracan",
          image: "https://images.unsplash.com/photo-1544829099-b9a0cccf1c38?w=300&h=400&fit=crop",
          year: "2023"
        },
        {
          id: 3,
          name: "McLaren 720S",
          image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=400&fit=crop",
          year: "2023"
        },
        {
          id: 4,
          name: "Aston Martin Vantage",
          image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=300&h=400&fit=crop",
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
          image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=300&h=400&fit=crop",
          year: "2023"
        },
        {
          id: 2,
          name: "Koenigsegg Agera",
          image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=300&h=400&fit=crop",
          year: "2023"
        },
        {
          id: 3,
          name: "Pagani Huayra",
          image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=300&h=400&fit=crop",
          year: "2023"
        },
        {
          id: 4,
          name: "Mclaren P1",
          image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=300&h=400&fit=crop",
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
          image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=300&h=400&fit=crop",
          year: "1967"
        },
        {
          id: 2,
          name: "Chevrolet Camaro",
          image: "https://images.unsplash.com/photo-1544829099-b9a0cccf1c38?w=300&h=400&fit=crop",
          year: "1969"
        },
        {
          id: 3,
          name: "Dodge Charger",
          image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=400&fit=crop",
          year: "1970"
        },
        {
          id: 4,
          name: "Jaguar E-Type",
          image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=300&h=400&fit=crop",
          year: "1961"
        }
      ]
    }
  ]

  return (
    <section id="vertical-scroll" className="vertical-scroll">
      <div className="vertical-scroll-container">
        <div className="columns-grid">
          {carColumns.map((column) => (
            <div key={column.id} className="car-column">
              <div className="car-list">
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
