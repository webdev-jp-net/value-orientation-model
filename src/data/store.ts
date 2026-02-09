import { atom } from 'jotai'

import type { PersonalPlot } from '@/type/personalPlot'

export type PersonalPlotGroup = {
  name: string
  personalPlotList: PersonalPlot[]
}

export const groupAtom = atom<PersonalPlotGroup>({
  name: '新しいグループ',
  personalPlotList: [],
})
