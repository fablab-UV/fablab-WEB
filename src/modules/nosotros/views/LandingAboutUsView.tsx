'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import { PrinterIcon, Lightbulb, ScanIcon, Zap } from 'lucide-react'

interface Service {
  icon: JSX.Element
  title: string
  description: string
  forWho: string
}

const services: Service[] = [
  {
    icon: <PrinterIcon className="w-10 h-10 text-[#06717e]" />,
    title: 'Impresión 3D para Prototipos',
    description:
      'Transformamos diseños digitales en objetos físicos con tecnologías FDM, DLP y SLA.',
    forWho: 'Estudiantes, investigadores y profesionales'
  },
  {
    icon: <Lightbulb className="w-10 h-10 text-[#06717e]" />,
    title: 'Diseño y Fabricación de Prototipos',
    description:
      'Servicio integral para materializar ideas en proyectos científico-tecnológicos.',
    forWho:
      'Ingenieros, investigadores y profesionales en proyectos de base científica y tecnológica'
  },
  {
    icon: <ScanIcon className="w-10 h-10 text-[#06717e]" />,
    title: 'Escaneo 3D para Ingeniería y Diseño',
    description:
      'Digitalización de objetos físicos para ingeniería, diseño y conservación del patrimonio.',
    forWho: 'Profesionales en ingeniería, diseño y conservación'
  }
]

const QuienesSomosFablabUV: React.FC = () => {
  return (
    <div className=" bg-white text-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="md:flex md:items-center md:gap-16">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#210a3e]">
              Quiénes Somos
            </h1>
            <p className="text-xl mb-12 max-w-3xl mx-auto md:mx-0">
              FabLab UV es un laboratorio de fabricación digital que ofrece
              soluciones avanzadas para materializar ideas y proyectos
              científico-tecnológicos. Nuestro equipo especializado y tecnología
              de vanguardia nos permiten transformar conceptos en realidades
              tangibles.
            </p>
          </div>
          <div className="md:w-1/2 grid grid-cols-1 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const ServiceCard: React.FC<Service> = ({
  icon,
  title,
  description,
  forWho
}) => {
  return (
    <Card className="bg-white shadow-lg hover:shadow-xl transition-transform duration-300 border-t-4 border-[#06717e] flex items-center p-4 hover:scale-105">
      <div className="mr-4">{icon}</div>
      <div>
        <CardHeader className="p-0">
          <CardTitle className="text-xl font-semibold text-[#210a3e] mb-2">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <p className="text-gray-600 mb-2">{description}</p>
          <div>
            <h4 className="font-semibold text-[#06717e] flex items-center ">
              <Zap className="w-4 h-4 mr-2 " />
              <p>Para quiénes:</p>
            </h4>
            <p className="text-gray-700 font-extralight">{forWho}</p>
          </div>
        </CardContent>
      </div>
    </Card>
  )
}

export default QuienesSomosFablabUV
