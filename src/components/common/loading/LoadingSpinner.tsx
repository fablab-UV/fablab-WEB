// TODO Revisar y estandarizar

import React from 'react'

interface LoadingSpinnerProps {
  size?: number // Tamaño en pixeles
  color?: string // Color del borde del spinner
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 64,
  color = 'blue'
}) => {
  const spinnerSize = `${size}px`
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div
        className={`animate-spin rounded-full border-t-4 border-${color}-500 border-opacity-50`}
        style={{ width: spinnerSize, height: spinnerSize }}
      ></div>
    </div>
  )
}

export default LoadingSpinner
