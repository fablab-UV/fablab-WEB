import React from 'react'

// Helper para hacer importaciones perezosas más limpias
export function lazyImport<T extends React.ComponentType<any>>(
  factory: () => Promise<{ default: T }>
): React.LazyExoticComponent<T> {
  return React.lazy(factory)
}
