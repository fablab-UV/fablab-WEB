// utils.ts
export const getUniqueCategories = (categories: string[][]): string[] => {
  // Aplanar el array y eliminar duplicados manualmente
  const flattenedCategories = categories.flat()

  // Utilizamos un array auxiliar para eliminar los duplicados
  const uniqueCategories: string[] = []

  flattenedCategories.forEach((category) => {
    if (!uniqueCategories.includes(category)) {
      uniqueCategories.push(category)
    }
  })

  // Ordenar las categorías alfabéticamente
  uniqueCategories.sort((a, b) => a.localeCompare(b))

  return uniqueCategories
}
