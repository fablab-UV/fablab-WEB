import { useKeenSlider, type KeenSliderOptions } from 'keen-slider/react'

interface IUseAutoScrollSliderProps {
  options: KeenSliderOptions
  slideCount: number
  autoScrollTime?: number
}

export const useAutoScrollSlider = (
  props: IUseAutoScrollSliderProps
): ((node: HTMLDivElement | null) => void) => {
  const { options, slideCount, autoScrollTime = 2000 } = props

  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      ...options,
      loop: slideCount > 1
    },
    [
      (slider) => {
        if (slideCount > 1) {
          let timeout: ReturnType<typeof setTimeout>
          let mouseOver = false

          const clearNextTimeout = (): void => {
            clearTimeout(timeout)
          }

          const nextTimeout = (): void => {
            if (mouseOver) return
            timeout = setTimeout(() => {
              slider.next()
            }, autoScrollTime)
          }

          const pause = (): void => {
            mouseOver = true
            clearNextTimeout()
          }

          const resume = (): void => {
            mouseOver = false
            nextTimeout()
          }

          slider.on('created', () => {
            slider.container.addEventListener('mouseover', pause)
            slider.container.addEventListener('mouseout', resume)
            nextTimeout()
          })

          slider.on('dragStarted', clearNextTimeout)
          slider.on('animationEnded', nextTimeout)
          slider.on('updated', nextTimeout)

          slider.on('destroyed', () => {
            slider.container.removeEventListener('mouseover', pause)
            slider.container.removeEventListener('mouseout', resume)
          })
        }
      }
    ]
  )

  return sliderRef
}
