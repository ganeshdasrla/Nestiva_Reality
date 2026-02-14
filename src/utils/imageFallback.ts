import type { SyntheticEvent } from 'react'

export const PROJECT_IMAGE_FALLBACK = `${import.meta.env.BASE_URL}projects/fallback-property.svg`

export function handleProjectImageError(event: SyntheticEvent<HTMLImageElement>) {
  const img = event.currentTarget
  if (img.dataset.fallbackApplied === 'true') return
  img.dataset.fallbackApplied = 'true'
  img.src = PROJECT_IMAGE_FALLBACK
}
