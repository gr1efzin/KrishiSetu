import { useCallback } from 'react'
import { useStore } from '@/store'

/**
 * Returns the translation function from the global store.
 * Usage: const t = useTranslation()
 */
export function useTranslation() {
  const t = useStore((s) => s.t)
  return useCallback((key) => t(key), [t])
}
