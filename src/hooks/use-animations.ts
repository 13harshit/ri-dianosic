'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * Hook to trigger animations when elements scroll into view
 * @param threshold - Percentage of element visible before triggering (0-1)
 * @param rootMargin - Margin around the root element
 * @returns ref to attach to element and isVisible boolean
 */
export function useScrollAnimation(threshold: number = 0.1, rootMargin: string = '0px') {
  const ref = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true)
          setHasAnimated(true)
        }
      },
      {
        threshold,
        rootMargin,
      }
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [threshold, rootMargin, hasAnimated])

  return { ref, isVisible, hasAnimated }
}

/**
 * Hook to repeatedly trigger scroll animations (for elements that should animate every time they come into view)
 * @param threshold - Percentage of element visible before triggering (0-1)
 * @param rootMargin - Margin around the root element
 * @returns ref to attach to element and isVisible boolean
 */
export function useScrollAnimationRepeat(threshold: number = 0.1, rootMargin: string = '0px') {
  const ref = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      {
        threshold,
        rootMargin,
      }
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [threshold, rootMargin])

  return { ref, isVisible }
}

/**
 * Hook to animate counting numbers
 * @param endValue - The target number to count to
 * @param duration - Duration of the count animation in ms
 * @param startValue - The starting number (default: 0)
 * @param delay - Delay before starting animation in ms (default: 0)
 * @returns The current counted value
 */
export function useCounterAnimation(
  endValue: number,
  duration: number = 2000,
  startValue: number = 0,
  delay: number = 0
) {
  const [count, setCount] = useState(startValue)
  const [shouldAnimate, setShouldAnimate] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldAnimate(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  useEffect(() => {
    if (!shouldAnimate) return

    const startTime = Date.now()
    const changeInValue = endValue - startValue

    const animationFrame = setInterval(() => {
      const elapsedTime = Date.now() - startTime
      const progress = Math.min(elapsedTime / duration, 1)

      // Ease out quart function for smoother animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = startValue + changeInValue * easeOutQuart

      setCount(currentCount)

      if (progress >= 1) {
        clearInterval(animationFrame)
      }
    }, 16) // ~60fps

    return () => clearInterval(animationFrame)
  }, [endValue, startValue, duration, shouldAnimate])

  return Math.round(count)
}

/**
 * Hook to animate typing text
 * @param text - The text to type
 * @param speed - Typing speed in ms per character (default: 50)
 * @param delay - Delay before starting typing in ms (default: 0)
 * @returns The currently typed text
 */
export function useTypewriter(text: string, speed: number = 50, delay: number = 0) {
  const [typedText, setTypedText] = useState('')

  useEffect(() => {
    const timer = setTimeout(() => {
      let index = 0
      const typingInterval = setInterval(() => {
        if (index <= text.length) {
          setTypedText(text.slice(0, index))
          index++
        } else {
          clearInterval(typingInterval)
        }
      }, speed)

      return () => clearInterval(typingInterval)
    }, delay)

    return () => clearTimeout(timer)
  }, [text, speed, delay])

  return typedText
}

/**
 * Hook for parallax scroll effect
 * @param speed - Speed factor for parallax (default: 0.5)
 * @returns ref to attach to element and transform style
 */
export function useParallax(speed: number = 0.5) {
  const ref = useRef<HTMLElement>(null)
  const [transform, setTransform] = useState('')

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const handleScroll = () => {
      const rect = element.getBoundingClientRect()
      const scrolled = window.scrollY
      const rate = scrolled * speed
      setTransform(`translateY(${rate}px)`)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed])

  return { ref, transform }
}

/**
 * Hook to track which section is currently in view
 * @param sectionIds - Array of section IDs to track
 * @returns The currently active section ID
 */
export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        threshold: 0.3,
      }
    )

    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [sectionIds])

  return activeSection
}

/**
 * Hook to animate an element when it comes into view with multiple animation phases
 * @param options - Configuration options
 * @returns ref, current phase, and visibility state
 */
export function useMultiPhaseAnimation(options: {
  phases: number
  phaseDelay?: number
  threshold?: number
}) {
  const { phases, phaseDelay = 500, threshold = 0.1 } = options
  const ref = useRef<HTMLElement>(null)
  const [currentPhase, setCurrentPhase] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && currentPhase === 0) {
          setIsVisible(true)
        }
      },
      { threshold }
    )

    observer.observe(element)

    return () => observer.unobserve(element)
  }, [threshold, currentPhase])

  useEffect(() => {
    if (isVisible && currentPhase < phases) {
      const timer = setTimeout(() => {
        setCurrentPhase((prev) => Math.min(prev + 1, phases))
      }, phaseDelay)

      return () => clearTimeout(timer)
    }
  }, [isVisible, currentPhase, phases, phaseDelay])

  return { ref, currentPhase, isVisible }
}

/**
 * Hook to create a staggered animation for child elements
 * @param count - Number of child elements
 * @param delay - Delay between each child animation in ms
 * @returns Array of delays to apply to child elements
 */
export function useStaggeredAnimation(count: number, delay: number = 100) {
  return Array.from({ length: count }, (_, i) => i * delay)
}
