// hooks/useGenerateId.ts
import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid'
import { useAppDispatch } from '../../store/root'
import { NoRushSlice } from '../comunications-layers/no-rush-layer/store/no-rush-slice'

interface UseGenerateIdProps {
  prefix?: string
}

export const useGenerateId = ({ prefix = 'element' }: UseGenerateIdProps = {}) => {
  const dispatch = useAppDispatch()
  const [id, setId] = useState<string | null>(null)

  useEffect(() => {
    const generatedId = `${prefix}-${nanoid()}`
    setId(generatedId)
    
    dispatch(NoRushSlice.actions.registerId({ id: generatedId }))
  }, [])

  return { id }
}
